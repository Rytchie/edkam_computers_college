
import React from 'react';
import { Course, Testimonial, StatItem, Benefit, NavLink } from '../types';

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
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export const COURSES_DATA: Course[] = [
  {
    id: 'webdev',
    title: 'Full-Stack Web Development',
    description: 'Master front-end and back-end technologies to build complete web applications. Covers React, Node.js, Express, MongoDB and more.',
    icon: <CodeIcon className="w-12 h-12 text-brand-accent-blue mb-4" />,
    duration: '6 Months',
    image: 'https://picsum.photos/seed/webdev/400/250',
    tags: ['React', 'Node.js', 'JavaScript', 'Full-Stack']
  },
  {
    id: 'datasci',
    title: 'Data Science & Machine Learning',
    description: 'Dive into data analysis, visualization, and machine learning algorithms. Learn Python, Pandas, Scikit-learn, and TensorFlow.',
    icon: <DataIcon className="w-12 h-12 text-brand-accent-purple mb-4" />,
    duration: '8 Months',
    image: 'https://picsum.photos/seed/datasci/400/250',
    tags: ['Python', 'AI/ML', 'Statistics', 'Big Data']
  },
  {
    id: 'cybersec',
    title: 'Cybersecurity Analyst Pro',
    description: 'Protect digital assets with cutting-edge cybersecurity skills. Explore network security, ethical hacking, and incident response.',
    icon: <ShieldIcon className="w-12 h-12 text-green-400 mb-4" />,
    duration: '7 Months',
    image: 'https://picsum.photos/seed/cybersec/400/250',
    tags: ['Security', 'Networking', 'Ethical Hacking']
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Rytchie M.',
    feedback: 'The Full-Stack course was incredibly comprehensive and the instructors were top-notch. I landed my dream job just weeks after graduating!',
    course: 'Full-Stack Web Development',
    avatar: 'https://picsum.photos/seed/sarah/100/100',
  },
  {
    id: 't2',
    name: 'Pshens K.',
    feedback: "Edkam's Data Science program transformed my career. The hands-on projects were invaluable. Highly recommend!",
    course: 'Data Science & Machine Learning',
    avatar: 'https://picsum.photos/seed/michael/100/100',
  },
  {
    id: 't3',
    name: 'Dennis K.',
    feedback: 'I always wanted to get into cybersecurity, and Edkam made it possible. The learning environment is supportive and challenging.',
    course: 'Cybersecurity Analyst Pro',
    avatar: 'https://picsum.photos/seed/linda/100/100',
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
