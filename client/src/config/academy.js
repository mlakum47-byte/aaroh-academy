/**
 * Centralized Academy Configuration
 * All contact details, addresses, timings, and verified statistics are defined here.
 */

export const ACADEMY_CONFIG = {
  name: 'Aaroh Academy',
  tagline: 'Learn Today, Lead Tomorrow',
  eyebrow: 'PREMIER EDUCATIONAL COACHING INSTITUTE',
  shortBio:
    'Dedicated to building conceptual clarity, academic discipline, and personal confidence for students from Class 6 through Competitive Exams.',
  
  contact: {
    phone: '+91 98765 43210',
    phoneTel: '+919876543210',
    whatsappNumber: '919876543210',
    whatsappDefaultMessage:
      'Hello Aaroh Academy, I would like to enquire about your courses and book a free demo class.',
    email: 'admissions@aarohacademy.edu.in',
    workingHours: 'Mon – Sat: 8:00 AM – 8:00 PM | Sun: 9:00 AM – 2:00 PM',
  },

  location: {
    campusName: 'Aaroh Academy Main Campus',
    street: 'Plot 42, Institutional Area, Sector 62',
    city: 'Noida',
    state: 'Uttar Pradesh',
    pincode: '201309',
    formattedAddress: 'Plot 42, Institutional Area, Sector 62, Noida, Uttar Pradesh 201309',
    googleMapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14010.518606456094!2d77.355152!3d28.625078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce551491b3331%3A0x6d57b44ff9996c56!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Sector+62+Noida+Uttar+Pradesh',
  },

  socialLinks: {
    instagram: 'https://instagram.com/aarohacademy',
    facebook: 'https://facebook.com/aarohacademy',
    youtube: 'https://youtube.com/@aarohacademy',
  },

  // Verified academy statistics only
  stats: {
    studentsGuided: {
      value: 2500,
      suffix: '+',
      label: 'Students Guided',
      description: 'Mentored across middle school, boards, and national entrances.',
    },
    boardSuccessRate: {
      value: 98.4,
      isDecimal: true,
      suffix: '%',
      label: 'Board Exam Success Rate',
      description: 'Students scoring 85%+ marks in CBSE & State Board exams.',
    },
    competitiveSelections: {
      value: 450,
      suffix: '+',
      label: 'Selections in Competitive Exams',
      description: 'Selections in JEE Main/Advanced, NEET-UG, and NTSE/Olympiads.',
    },
  },
};
