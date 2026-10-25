/**
 * Faculty details for Aaroh Academy
 * Exactly 4 faculty cards as specified
 * (Identified placeholders for development)
 */

const base = import.meta.env.BASE_URL || '/';

export const FACULTY_DATA = [
  {
    id: 'fac-1',
    name: 'Er. Alok Sharma',
    qualification: 'M.Tech, IIT Delhi (Ex-Visiting Faculty)',
    subject: 'Senior Physics Faculty & Academic Director',
    experienceYears: '14+ Years Experience',
    bio: 'Specialist in Mechanics, Electrodynamics, and problem decomposition for JEE Advanced and Boards.',
    image: `${base}images/faculty/faculty-alok-sharma.svg`,
    speciality: 'Conceptual Physics & Olympiad Training',
  },
  {
    id: 'fac-2',
    name: 'Dr. Sunita Mehra',
    qualification: 'Ph.D. in Organic Chemistry',
    subject: 'Senior Chemistry Faculty',
    experienceYears: '12+ Years Experience',
    bio: 'Known for demystifying organic reaction mechanisms and visual physical chemistry approaches.',
    image: `${base}images/faculty/faculty-sunita-mehra.svg`,
    speciality: 'Organic & Inorganic Chemistry',
  },
  {
    id: 'fac-3',
    name: 'Prof. Rajesh Verma',
    qualification: 'M.Sc. Mathematics, Gold Medalist',
    subject: 'Senior Mathematics Faculty',
    experienceYears: '15+ Years Experience',
    bio: 'Pioneer of step-by-step calculus mastery, trigonometry simplification, and competitive algebra.',
    image: `${base}images/faculty/faculty-rajesh-verma.svg`,
    speciality: 'Calculus, Vectors & Algebra',
  },
  {
    id: 'fac-4',
    name: 'Dr. Neha Kapoor',
    qualification: 'MBBS / M.Sc. Life Sciences',
    subject: 'Senior Biology Faculty',
    experienceYears: '10+ Years Experience',
    bio: 'Focuses on NCERT line-by-line synthesis, diagrams, mnemonics, and high-yield NEET biology prep.',
    image: `${base}images/faculty/faculty-neha-kapoor.svg`,
    speciality: 'Cell Biology, Genetics & Human Physiology',
  },
];
