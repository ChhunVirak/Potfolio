// All portfolio copy lives here so the section components stay presentational.
import iBankMobile from '../assets/images/iBank-Mobile.png';
import cicApp from '../assets/images/CiC-App.png';
import iBankWeb from '../assets/images/iBank-KH-Web.png';

// Drop photos into these folders and they show up as a thumbnail grid — sorted by filename.
const toGallery = (modules: Record<string, string>) =>
  Object.keys(modules)
    .sort()
    .map((path) => ({
      src: modules[path],
      alt: (path.split('/').pop() ?? '').replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' '),
    }));

const CERTIFICATE_IMAGES = toGallery(
  import.meta.glob('../assets/images/certificates/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }),
);
const ADF_IMAGES = toGallery(
  import.meta.glob('../assets/images/adf/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }),
);

// CV lives in public/ and is deployed as-is.
export const RESUME_URL = `${import.meta.env.BASE_URL}${encodeURIComponent("Chhoeung Chhun Virak's CV.pdf")}`;

export type GalleryImage = { src: string; alt: string };

export type TimelineItem = {
  date: string;
  title: string;
  description?: string;
  /** Optional bullet list under the description (e.g. individual certificates). */
  items?: string[];
  link?: string;
  /** Optional thumbnail grid (certificates, event photos). */
  images?: GalleryImage[];
};

export type Project = {
  name: string;
  year: string;
  meta: string;
  description: string;
  link?: string;
  image?: string;
};

export const PROFILE = {
  firstName: 'Chhoeung',
  lastName: 'Chhun Virak',
  role: 'Software engineer at iBank Cambodia',
  lede: 'I build mobile banking apps with Flutter — the kind people open every day to move their money, so they need to be fast, secure and easy to trust.',
  github: 'https://github.com/ChhunVirak',
  sourceCode: 'https://github.com/ChhunVirak/Potfolio',
};

export const FACTS = [
  { label: 'Focus', value: 'Flutter & mobile banking' },
  { label: 'Shipping software since', value: '2021' },
  { label: 'Interns mentored', value: '8, all completed' },
  { label: 'Based in', value: 'Cambodia' },
];

export const PROJECTS: Project[] = [
  {
    name: 'iBank KH',
    year: '2025',
    meta: 'iBank Cambodia · Mobile banking',
    description: 'Digital banking features for the iBank KH app, built and maintained end to end.',
    link: 'https://apps.apple.com/us/app/ibank-kh/id6759181803',
    image: iBankMobile,
  },
  {
    name: 'iBank KH Business',
    year: '2025',
    meta: 'iBank Cambodia · Business banking',
    description: "Mobile banking for iBank's business customers.",
  },
  {
    name: 'iBank KH Website',
    year: '2025',
    meta: 'iBank Cambodia · Web',
    description: "The bank's public website — products, services and news for personal and business customers.",
    link: 'https://ibank.com.kh/',
    image: iBankWeb,
  },
  {
    name: 'Mobile V3',
    year: '2023',
    meta: 'iBank Cambodia · Mobile banking',
    description: "Development and enhancement of the bank's third-generation mobile app.",
  },
  {
    name: 'CIC App',
    year: '2022',
    meta: 'Z1 Flexible Solution · Client project',
    description: 'Features and improvements across the CIC mobile app.',
    link: 'https://play.google.com/store/apps/details?id=com.cambodianinvestorscorporation&hl=en',
    image: cicApp,
  },
];

// Newest first.
export const EXPERIENCE: TimelineItem[] = [
  {
    date: '2023 — Now',
    title: 'Software Developer · iBank Cambodia',
    description:
      'Build, maintain, release and keep improving the iBank KH and iBank KH Business apps — secure everyday banking for retail and business customers, from first feature to store release.',
    link: 'https://ibank.com.kh/',
  },
  {
    date: '2022 — 2023',
    title: 'Mid Senior Officer, Flutter Development · Z1 Flexible Solution',
    description:
      'Led design and development of Flutter apps for client businesses, working closely with design and backend teams.',
  },
  {
    date: '2021 — 2022',
    title: 'Flutter Intern · Z1 Flexible Solution',
    description:
      'Learned Flutter on my own and under mentorship from senior engineers — docs, source code, code reviews and trial and error. Shipped finance, retail and entertainment apps, recognised by my manager along the way.',
  },
];

export const RECOGNITION: TimelineItem[] = [
  {
    date: '2023 — 2026',
    title: 'Personal & Professional Certificates · iBank Cambodia',
    description: 'Internal certifications for professional development and technical excellence.',
    items: [
      'Self-Awareness and Self-Confidence for Personal Growth',
      'Effective Self-Planning and Motivation for Work Productivity',
      'Effective Adaptability Skills in the Workplace',
      'Emotional Intelligence',
      'Goal Setting',
      'Fixed and Growth Mindset',
      'Communication Skills',
      'Time Management',
    ],
    images: CERTIFICATE_IMAGES,
  },
  {
    date: '2022',
    title: 'Internship Trainer · Z1 Flexible Solution',
    description: 'Mentored 8 interns through the program — all 8 completed it.',
  },
];

export const EDUCATION: TimelineItem[] = [
  {
    date: '2019 — 2023',
    title: 'Bachelor of Computer Science · Royal University of Cambodia',
    description: 'Data structures, algorithms, software engineering and mobile app development.',
  },
  {
    date: '2019 — 2023',
    title: 'ADF Elite Scholarship · Asian Development Fund',
    description:
      "Four-year scholarship supporting Cambodian students' studies, leadership and community work.",
    images: ADF_IMAGES,
  },
  {
    date: '2016 — 2019',
    title: 'BacII · Hun Sen Angtasom High School',
  },
];

export const STACK_INTRO = 'Full stack, mobile first — from the screen people tap to the services behind it.';

export const STACK = [
  { group: 'Mobile', items: ['Flutter', 'Dart'] },
  { group: 'Frontend', items: ['React', 'Next Js' , 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
  { group: 'Backend', items: ['Java', 'Node.js', 'REST APIs', 'Firebase'] },
  { group: 'Design & tooling', items: ['Figma', 'Git', 'Vite'] },
  { group: 'AI tools', items: ['Claude', 'Claude Code', 'ChatGPT', 'Gemini'] },
];

export const CONTACT_LINKS = [
  { label: 'Email', href: 'mailto:chhunvirakchhoeung@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/ChhunVirak' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/chhoeung-chhun-virak-7b7a66263' },
  { label: 'Telegram', href: 'https://t.me/VirakChhun' },
  { label: 'Facebook', href: 'https://www.facebook.com/somnang.chan.52' },
];

// Sections the nav can jump to, in page order.
export const SECTION_LINKS = [
  { label: 'Work', id: 'work' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
];
