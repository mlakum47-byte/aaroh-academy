/**
 * Gallery data for Aaroh Academy
 * Covering classrooms, teaching activities, events, student activities, and achievements.
 * (Clearly marked development photographic assets / SVGs)
 */

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All Photos' },
  { id: 'classrooms', label: 'Classrooms' },
  { id: 'teaching', label: 'Teaching & Mentorship' },
  { id: 'events', label: 'Academy Events' },
  { id: 'activities', label: 'Student Activities' },
  { id: 'achievements', label: 'Achievements' },
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    category: 'classrooms',
    title: 'Smart Interactive Classrooms',
    description: 'Air-conditioned, modern audio-visual equipped smart classrooms designed for small focused batches.',
    image: '/images/gallery/classroom-modern.svg',
    alt: 'Modern smart classroom with digital interactive board and ergonomic seating at Aaroh Academy',
  },
  {
    id: 'gal-2',
    category: 'teaching',
    title: 'Interactive Physics Demonstration',
    description: 'Faculty explaining classical mechanics using real visual demonstrations and interactive software.',
    image: '/images/gallery/teaching-session.svg',
    alt: 'Faculty member explaining physics equations on an interactive board to attentive students',
  },
  {
    id: 'gal-3',
    category: 'activities',
    title: 'Collaborative Problem-Solving Circles',
    description: 'Students working in small peer groups to solve advanced mathematical puzzles and science problem sets.',
    image: '/images/gallery/peer-learning.svg',
    alt: 'Group of secondary school students engaged in collaborative problem solving with workbooks',
  },
  {
    id: 'gal-4',
    category: 'achievements',
    title: 'Annual Academic Felicitations',
    description: 'Celebrating high achievers of CBSE Board Examinations and competitive entrance exams.',
    image: '/images/gallery/achievements-ceremony.svg',
    alt: 'Aaroh Academy annual felicitation ceremony honoring top scoring board exam students with medals',
  },
  {
    id: 'gal-5',
    category: 'events',
    title: 'National Science Day Science Fair',
    description: 'Hands-on exhibits and experimental working models prepared and demonstrated by middle school students.',
    image: '/images/gallery/science-exhibition.svg',
    alt: 'Students demonstrating hands-on scientific working models during the Academy Science Fair',
  },
  {
    id: 'gal-6',
    category: 'teaching',
    title: 'One-on-One Doubt Clearing Clinic',
    description: 'Dedicated post-class mentorship sessions ensuring no student leaves the campus with unresolved questions.',
    image: '/images/gallery/doubt-clinic.svg',
    alt: 'Teacher patiently clarifying doubts with a student during a personal one-on-one session',
  },
];
