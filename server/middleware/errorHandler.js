export const errorHandler = (err, req, res, next) => {
  // In development, log the full error
  if (process.env.NODE_ENV !== 'production') {
    console.error('[Error Middleware]', err);
  } else {
    console.error(`[Error Middleware] ${err.name}: ${err.message}`);
  }

  // Handle JSON parse error in body
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      success: false,
      message: 'Invalid JSON payload received.',
    });
  }

  // Handle Mongoose Validation Error
  if (err.name === 'ValidationError') {
    const fieldErrors = {};
    Object.keys(err.errors).forEach((key) => {
      fieldErrors[key] = err.errors[key].message;
    });

    return res.status(400).json({
      success: false,
      message: 'Please correct the highlighted fields.',
      errors: fieldErrors,
    });
  }

  // Handle Mongoose CastError (e.g. invalid ObjectId)
  if (err.name === 'CastError') {
    return res.status(400).json({
      success: false,
      message: `Invalid format for field ${err.path}.`,
    });
  }

  // Default server error
  const statusCode = err.statusCode || 500;
  const message = err.isOperational
    ? err.message
    : 'An unexpected server error occurred. Please try again later.';

  return res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { details: err.message }),
  });
};
