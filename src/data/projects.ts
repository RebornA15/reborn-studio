// Configuration guide: public/images/projects/README.md
export interface Project {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  services: string[]; // Empty until verified.
  year: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string;
  techStack: string[];
  caseStudyUrl?: string; // Optional real HTTPS case study URL.
  projectUrl: string; // Real HTTPS URL, or empty until ready.
  detailImage?: string; // Modal override; otherwise uses image.
  imagePosition?: string; // Preview crop, e.g. '50% 30%'.
  detailImagePosition?: string; // Modal alignment.
  detailImageFit?: 'cover' | 'contain'; // Optional per-project modal framing.
  detailImageScale?: number; // Optional uniform modal crop; defaults to 1.
  images: string[];
  image: string; // hero image for grid
  glow: string; // ambient glow color
  coords: string; // coordinates placeholder
  gridClass: string; // bento layout class
}

// First entry is featured; later entries use the existing smaller card grid.
export const projects: Project[] = [
  {
    id: '01',
    title: 'MAISON NOIR',
    category: 'Luxury Fashion E-commerce',
    overview: 'An editorial luxury fashion shopping experience combining sophisticated typography, immersive imagery, and refined interactions.',
    industry: 'Fashion',
    client: 'Portfolio Concept',
    year: '2026',
    services: ['UI/UX Design', 'Web Development', 'Creative Direction'],
    // Verified in ../Mason/package.json and its app/components source.
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Lucide React'],
    // MAISON NOIR: deployed website URL.
    projectUrl: 'https://maison-noir-one-tawny.vercel.app/',
    caseStudyUrl: '', // Optional verified HTTPS case study URL.
    image: '/images/projects/maison-noir.png',
    detailImage: '', // Reuses image; set a different path for a modal-only screenshot.
    imagePosition: '50% 40%', // Card crop; does not affect the modal.
    detailImagePosition: '50% 50%',
    detailImageScale: 1.18, // Crop the screenshot's baked-in outer white margin.
    // Legacy fields retained for compatibility; not displayed by the current layout.
    challenge: '',
    solution: '',
    results: '',
    images: [],
    glow: '',
    coords: '',
    gridClass: '',
  },
  {
    id: '02',
    title: 'Anthony J. Brian',
    category: 'Legal & Professional Website',
    overview: 'A refined digital presence for a legal professional, combining sophisticated editorial typography, structured content, and intuitive navigation to communicate credibility, expertise, and trust.',
    industry: 'Legal Services',
    client: 'Portfolio Concept',
    year: '',
    services: ['Website Design', 'UI/UX Design', 'Web Development'],
    // Verified from ../Lawyer Up/package.json and src/App.tsx.
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Motion', 'Lucide React'],
    // Anthony J. Brian: deployed website URL.
    projectUrl: 'https://lawyer-up-zpk2.vercel.app',
    caseStudyUrl: '', // Optional verified HTTPS case study URL.
    image: '/images/projects/anthony-j-brian.png',
    detailImage: '', // Reuses image; set a different path for a modal-only screenshot.
    imagePosition: '50% 40%', // Card crop; does not affect the modal.
    detailImagePosition: '50% 50%',
    detailImageFit: 'contain', // Keep the full screenshot composition visible.
    // Legacy fields retained for compatibility; not displayed by the current layout.
    challenge: '',
    solution: '',
    results: '',
    images: [],
    glow: '',
    coords: '',
    gridClass: '',
  },
  {
    id: '03',
    title: 'Solaris',
    category: 'Solar Energy Web Application',
    overview: 'An interactive solar planning application designed to help users estimate their energy requirements, explore suitable system configurations, and make more informed decisions about solar power.',
    industry: 'Renewable Energy / Technology',
    client: 'Portfolio Concept',
    year: '',
    services: ['Web Application Development', 'UI/UX Design', 'Interactive Calculator Design'],
    // Verified from ../Energy Calc/package.json and src.
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Motion', 'Recharts'],
    // Solaris: deployed website URL.
    projectUrl: 'https://energy-six-nu.vercel.app',
    caseStudyUrl: '', // Optional verified HTTPS case study URL.
    image: '/images/projects/solaris.png',
    detailImage: '', // Reuses image; set a different path for a modal-only screenshot.
    imagePosition: '50% 40%', // Card crop; does not affect the modal.
    detailImagePosition: '50% 50%',
    detailImageFit: 'contain', // Keep the full screenshot composition visible.
    // Legacy fields retained for compatibility; not displayed by the current layout.
    challenge: '',
    solution: '',
    results: '',
    images: [],
    glow: '',
    coords: '',
    gridClass: '',
  },
  {
    id: '04',
    title: 'InboxZero',
    category: 'Web Application',
    overview: 'A streamlined temporary email application featuring address generation, inbox management, and an intuitive message-reading interface, designed around clarity, simplicity, and efficient interaction.',
    industry: 'Software / Digital Utilities',
    client: 'Portfolio Concept',
    year: '',
    services: ['Web Application Development', 'UI/UX Design', 'Frontend Development', 'Backend Integration'],
    // Verified from ../Inbox Zero/packages/web and packages/api.
    techStack: ['React', 'TypeScript', 'Vite', 'CSS', 'Node.js', 'Fastify', 'Drizzle ORM', 'PostgreSQL'],
    // InboxZero: deployed website URL.
    projectUrl: 'https://inbox-zero-psi-ecru.vercel.app/',
    caseStudyUrl: '', // Optional verified HTTPS case study URL.
    image: '/images/projects/inboxzero.png',
    detailImage: '', // Reuses image; set a different path for a modal-only screenshot.
    imagePosition: '50% 40%', // Card crop; does not affect the modal.
    detailImagePosition: '50% 50%',
    detailImageFit: 'contain', // Keep the full screenshot composition visible.
    // Legacy fields retained for compatibility; not displayed by the current layout.
    challenge: '',
    solution: '',
    results: '',
    images: [],
    glow: '',
    coords: '',
    gridClass: '',
  },
];
