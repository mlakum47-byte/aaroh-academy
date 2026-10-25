import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { connectDatabase, checkDbConnection } from './config/database.js';
import enquiryRoutes from './routes/enquiryRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import { apiGeneralLimiter } from './middleware/rateLimiter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

// Security Headers
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  })
);

// CORS configuration
const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, or server-to-server)
    if (!origin) return callback(null, true);
    
    // Allow localhost and specified client origins
    const allowed = [
      CLIENT_ORIGIN,
      'http://localhost:5173',
      'http://127.0.0.1:5173',
      'http://localhost:3000',
      'http://localhost:4173',
    ];

    if (allowed.includes(origin) || origin.startsWith('http://localhost:')) {
      return callback(null, true);
    }
    
    return callback(new Error(`CORS blocked for origin: ${origin}`));
  },
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

// Body parsers with safe payload limits
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Apply general rate limiter to API routes
app.use('/api', apiGeneralLimiter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  const dbStatus = checkDbConnection() ? 'connected' : 'disconnected';
  res.status(200).json({
    status: 'ok',
    service: 'Aaroh Academy API',
    database: dbStatus,
    timestamp: new Date().toISOString(),
  });
});

// Demo Enquiry Routes
app.use('/api/enquiries', enquiryRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Resource not found: ${req.method} ${req.originalUrl}`,
  });
});

// Centralized Error Handler
app.use(errorHandler);

// Helper to determine if file is run directly
const isMain = process.argv[1] && process.argv[1].endsWith('server.js');

if (isMain && process.env.NODE_ENV !== 'test') {
  connectDatabase();

  app.listen(PORT, () => {
    console.log(`[Aaroh Academy Server] Running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
    console.log(`[Aaroh Academy Server] Client Origin allowed: ${CLIENT_ORIGIN}`);
    console.log(`[Aaroh Academy Server] Health check: http://localhost:${PORT}/api/health`);
  });
}

export default app;
