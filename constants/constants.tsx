import React from 'react';
import { Course, Testimonial, StatItem, Benefit, NavLink, FAQItem } from '../types';

// SVG Icons (simple examples)
const CodeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const DataIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10m16-10v10M4 7c0-1.886 0-2.828.586-3.414C5.172 3 6.114 3 8 3h8c1.886 0 2.828 0 3.414.586C19.999 4.172 20 5.114 20 7M4 7h16m0 10c0 1.886 0 2.828-.586 3.414C18.828 21 17.886 21 16 21H8c-1.886 0-2.828 0-3.414-.586C4.001 19.828 4 18.886 4 17m0 0H3m18 0h-1" />
    </svg>
);

const ShieldIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const DesktopIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const PaletteIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732zM12 21a9 9 0 110-18 9 9 0 010 18z" />
    </svg>
);


const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const LightBulbIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 017.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

const BriefcaseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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