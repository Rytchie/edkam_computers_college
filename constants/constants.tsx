import React from 'react';
import { Course, Testimonial, StatItem, Benefit, NavLink, FAQItem } from '../types';

// Helper for className
const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');

// SVG Icons
const CodeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const DataIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10m16-10v10M4 7c0-1.886 0-2.828.586-3.414C5.172 3 6.114 3 8 3h8c1.886 0 2.828 0 3.414.586C19.999 4.172 20 5.114 20 7M4 7h16m0 10c0 1.886 0 2.828-.586 3.414C18.828 21 17.886 21 16 21H8c-1.886 0-2.828 0-3.414-.586C4.001 19.828 4 18.886 4 17m0 0H3m18 0h-1" />
  </svg>
);

const ShieldIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const DesktopIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PaletteIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732zM12 21a9 9 0 110-18 9 9 0 010 18z" />
  </svg>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const LightBulbIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 017.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const BriefcaseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export const AcademicCapIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>
);

export const CalendarDaysIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-3.75h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm2.25-2.25h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
  </svg>
);

export const ChartBarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 019.75 19.875V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

export const BellIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
  </svg>
);

export const UserCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const CogIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5m-15.045-4.122L3.75 7.05m16.5 0l.795.828M4.5 19.5l.75-.75M18.75 18.75l.75.75m-15-15l-.75.75M19.5 4.5l-.75-.75M12 1.5A10.5 10.5 0 001.5 12a10.5 10.5 0 0010.5 10.5A10.5 10.5 0 0022.5 12 10.5 10.5 0 0012 1.5zm0 6a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
  </svg>
);

export const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

export const UploadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
  </svg>
);

export const PencilIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
  </svg>
);

export const ExclamationTriangleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
);

export const BookOpenIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
);

export const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

export const NAV_LINKS: NavLink[] = [
  { href: '#hero', label: 'Home' },
  { href: '#courses', label: 'Courses' },
  { href: '#about', label: 'About Us' },
  { href: '#faq', label: 'FAQ' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
  { href: '#portal', label: 'Student Portal' },
];

export const COURSES_DATA: Course[] = [
  {
    id: 'webdev',
    title: 'Full-Stack Web Development',
    description: 'Master front-end and back-end technologies to build complete web applications.',
    icon: <CodeIcon className="w-12 h-12 text-brand-accent-blue mb-4" />,
    duration: '6 Months',
    image: 'https://picsum.photos/seed/webdev_course/400/250',
    tags: ['React', 'Node.js', 'JavaScript', 'Full-Stack'],
    detailedDescription: 'This comprehensive program covers everything from client-side JavaScript frameworks like React to server-side development with Node.js and Express, along with database management using MongoDB. Ideal for aspiring web developers.',
    learningOutcomes: [
      'Build responsive UIs with React.',
      'Develop robust APIs with Node.js & Express.',
      'Manage databases with MongoDB.',
      'Understand full-stack architecture.',
      'Deploy web applications.'
    ],
    modulesCovered: ['HTML, CSS, JavaScript', 'React & Redux', 'Node.js & Express', 'MongoDB', 'REST APIs', 'Authentication', 'Deployment'],
    targetAudience: 'Beginners and intermediate developers looking to become full-stack proficient.',
    prerequisites: ['Basic computer literacy. Prior programming experience is helpful but not required.']
  },
  {
    id: 'datasci',
    title: 'Data Science & Machine Learning',
    description: 'Dive into data analysis, visualization, and machine learning algorithms.',
    icon: <DataIcon className="w-12 h-12 text-brand-accent-purple mb-4" />,
    duration: '8 Months',
    image: 'https://picsum.photos/seed/datasci_course/400/250',
    tags: ['Python', 'AI/ML', 'Statistics', 'Big Data'],
    detailedDescription: 'Explore the world of data! This course teaches you to extract insights from data using Python, statistical techniques, and machine learning models with libraries like Pandas, Scikit-learn, and TensorFlow.',
    learningOutcomes: [
      'Perform data analysis and visualization using Python.',
      'Implement various machine learning algorithms.',
      'Understand statistical concepts for data science.',
      'Work with large datasets.',
      'Develop predictive models.'
    ],
    modulesCovered: ['Python for Data Science', 'Data Wrangling with Pandas', 'Data Visualization', 'Statistics & Probability', 'Machine Learning Algorithms', 'Deep Learning with TensorFlow/Keras', 'Big Data Fundamentals'],
    targetAudience: 'Aspiring data scientists, analysts, and anyone interested in AI/ML.',
    prerequisites: ['Basic Python programming knowledge recommended. Strong mathematical aptitude is a plus.']
  },
  {
    id: 'cybersec',
    title: 'Cybersecurity Analyst Pro',
    description: 'Protect digital assets with cutting-edge cybersecurity skills.',
    icon: <ShieldIcon className="w-12 h-12 text-green-400 mb-4" />,
    duration: '7 Months',
    image: 'https://picsum.photos/seed/cybersec_course/400/250',
    tags: ['Security', 'Networking', 'Ethical Hacking'],
    detailedDescription: 'Become a cybersecurity professional. This course covers network security, ethical hacking techniques, cryptography, risk management, and incident response to safeguard organizations from cyber threats.',
    learningOutcomes: [
      'Identify and mitigate security vulnerabilities.',
      'Understand network security protocols and tools.',
      'Perform ethical hacking and penetration testing.',
      'Implement security best practices.',
      'Respond to security incidents effectively.'
    ],
    modulesCovered: ['Introduction to Cybersecurity', 'Network Security', 'Ethical Hacking', 'Cryptography', 'Web Application Security', 'Risk Management', 'Incident Response & Forensics'],
    targetAudience: 'Individuals aiming for roles like Security Analyst, Penetration Tester, or IT Security Specialist.',
    prerequisites: ['Understanding of networking concepts and operating systems.']
  },
  {
    id: 'itoffice',
    title: 'Essential IT & Office Productivity',
    description: 'Master essential computer skills and popular office software for everyday productivity.',
    icon: <DesktopIcon className="w-12 h-12 text-blue-400 mb-4" />,
    duration: '3 Months',
    image: 'https://picsum.photos/seed/itoffice_course/400/250',
    tags: ['MS Office', 'Computer Basics', 'Productivity', 'Digital Literacy'],
    detailedDescription: 'This foundational course is designed to equip you with crucial IT literacy and proficiency in widely-used office applications. Perfect for students, job seekers, or anyone looking to enhance their digital skills for personal or professional use.',
    learningOutcomes: [
      'Navigate computer operating systems efficiently.',
      'Create professional documents using Microsoft Word.',
      'Analyze data and create spreadsheets with Microsoft Excel.',
      'Design engaging presentations with Microsoft PowerPoint.',
      'Manage emails and schedules effectively with Microsoft Outlook.',
      'Understand internet browsing, online safety, and cloud storage.'
    ],
    modulesCovered: ['Computer Fundamentals & OS', 'Microsoft Word (Beginner to Advanced)', 'Microsoft Excel (Beginner to Advanced)', 'Microsoft PowerPoint', 'Microsoft Outlook & Email Etiquette', 'Internet & Web Browsing', 'Online Collaboration Tools', 'Basic Troubleshooting'],
    targetAudience: 'Absolute beginners, students, office workers, and anyone looking to improve their core IT and office software skills.',
    prerequisites: ['No prior experience required.']
  },
  {
    id: 'graphicdesign',
    title: 'Graphic Design Fundamentals',
    description: 'Unleash your creativity by learning the core principles and tools of graphic design.',
    icon: <PaletteIcon className="w-12 h-12 text-pink-400 mb-4" />,
    duration: '4 Months',
    image: 'https://picsum.photos/seed/graphicdesign_course/400/250',
    tags: ['Design', 'Visual Arts', 'Branding', 'Creativity'],
    detailedDescription: 'Dive into the exciting field of graphic design. This course introduces fundamental design principles, color theory, typography, layout techniques, and an overview of industry-standard software concepts for creating compelling visual communication.',
    learningOutcomes: [
      'Understand core design principles (balance, contrast, hierarchy, etc.).',
      'Apply color theory effectively in designs.',
      'Master typography basics for impactful text.',
      'Create balanced and visually appealing layouts.',
      'Develop a foundational understanding of branding and visual identity.',
      'Gain familiarity with common graphic design workflows and software concepts (e.g., vector vs. raster, layers).'
    ],
    modulesCovered: ['Introduction to Graphic Design', 'Elements & Principles of Design', 'Color Theory', 'Typography', 'Layout & Composition', 'Introduction to Branding & Logo Design', 'Image Editing Basics', 'Vector Graphics Concepts', 'Portfolio Development Tips'],
    targetAudience: 'Aspiring graphic designers, marketers, content creators, or anyone interested in visual communication.',
    prerequisites: ['Basic computer skills. A passion for creativity is a must!']
  }
];

export const APPLICATION_TYPES: string[] = [
  "New Student Admission",
  "Scholarship Application",
  "Continuing Education Program",
  "Transfer Student Application",
  "Short Course / Workshop Registration",
  "Professional Certificate Program",
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Jane Mwangi',
    feedback: 'The Full-Stack course was incredibly comprehensive and the instructors were top-notch. I landed my dream job just weeks after graduating!',
    course: 'Full-Stack Web Development',
    avatar: 'https://picsum.photos/seed/jane_mwangi_avatar/100/100',
  },
  {
    id: 't2',
    name: 'John Kamau',
    feedback: "Edkam's Data Science program transformed my career. The hands-on projects were invaluable. Highly recommend!",
    course: 'Data Science & Machine Learning',
    avatar: 'https://picsum.photos/seed/john_kamau_avatar/100/100',
  },
  {
    id: 't3',
    name: 'Grace Akinyi',
    feedback: 'I always wanted to get into cybersecurity, and Edkam made it possible. The learning environment is supportive and challenging.',
    course: 'Cybersecurity Analyst Pro',
    avatar: 'https://picsum.photos/seed/grace_akinyi_avatar/100/100',
  },
  {
    id: 't4',
    name: 'Peter Njoroge',
    feedback: 'The practical skills I gained at Edkam were instrumental in launching my tech career. The instructors are truly dedicated.',
    course: 'Full-Stack Web Development',
    avatar: 'https://picsum.photos/seed/peter_njoroge_avatar/100/100',
  },
];

export const STATS_DATA: StatItem[] = [
    { value: '1000+', label: 'Students Graduated' },
    { value: '95%', label: 'Placement Rate' },
    { value: '50+', label: 'Industry Mentors' },
    { value: '10+', label: 'Years of Excellence' },
];

export const BENEFITS_DATA: Benefit[] = [
  {
    id: 'b1',
    title: 'Expert Instructors',
    description: 'Learn from industry veterans with real-world experience and a passion for teaching.',
    icon: <LightBulbIcon className="w-10 h-10 text-brand-accent-purple" />,
  },
  {
    id: 'b2',
    title: 'Hands-On Projects',
    description: 'Build a portfolio of practical projects that showcase your skills to potential employers.',
    icon: <CodeIcon className="w-10 h-10 text-brand-accent-blue" />,
  },
  {
    id: 'b3',
    title: 'Career Support',
    description: 'Receive personalized career coaching, resume workshops, and job placement assistance.',
    icon: <BriefcaseIcon className="w-10 h-10 text-green-400" />,
  },
   {
    id: 'b4',
    title: 'Flexible Learning',
    description: 'Choose from flexible learning options, including online and hybrid classes, to fit your schedule.',
    icon: <CheckIcon className="w-10 h-10 text-yellow-400" />,
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq1',
    question: 'What courses do you offer?',
    answer: 'We offer a range of courses including Full-Stack Web Development, Data Science & Machine Learning, Cybersecurity Analyst Pro, Essential IT & Office Productivity, and Graphic Design Fundamentals. You can find more details on our Courses page by clicking the "Courses" link in the navigation bar.'
  },
  {
    id: 'faq2',
    question: 'How can I apply for a course?',
    answer: 'You can apply online through our website. Click the "Apply Now" button on the Hero section or in the navigation bar which will take you to our application page. Fill out the form with your details and the course you are interested in.'
  },
  {
    id: 'faq3',
    question: 'Where is Edkam Computers Training College located?',
    answer: 'Edkam Computers Training College is located at Maili Kumi, Nakuru, Kenya. For detailed directions and a map, please visit our "Contact" page.'
  },
  {
    id: 'faq4',
    question: 'What are the general admission requirements?',
    answer: 'Admission requirements can vary slightly depending on the course. Generally, basic computer literacy is expected. For some advanced courses, prior knowledge in a related field might be beneficial but is not always mandatory. We encourage you to check the specific prerequisites listed for each course on the "Courses" page or contact our admissions office for clarification.'
  },
  {
    id: 'faq5',
    question: 'Do you offer online classes or flexible learning options?',
    answer: 'Yes, we strive to provide flexible learning options to accommodate our students. This can include online modules, hybrid classes (a mix of online and in-person), and part-time schedules for certain courses. Please check the details for each specific course or contact us to discuss the available learning modes.'
  }
];
