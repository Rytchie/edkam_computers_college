Edkam Computers Training College Website
Project Overview
This is a modern, responsive website for Edkam Computers Training College. It's designed to showcase the college’s programs, provide institutional info, enable student applications, and offer a mock student portal. The site is built using React, TypeScript, and Tailwind CSS, with index.html as the entry point and index.tsx bootstrapping the React app.

Core Features
Responsive Design — Optimized for desktop, tablet, and mobile devices.

SPA Experience — Hash-based routing enables seamless navigation between pages like Home, Apply, and Student Portal.

Dynamic Sections

Hero Section with call-to-action

Courses overview with interactive flip cards

About Us with statistics and history

Why Choose Us highlights

Testimonials carousel from alumni

Contact section with form and Google Maps embed

Application Page — Full application form for prospective students.

Student Portal (Mock)

Login page with form validation

Placeholder dashboard after login

Consistent UI/UX — Custom theme colors and Tailwind utility classes ensure a unified visual style.

Accessibility — Incorporates ARIA attributes for inclusive user experience.

Technology Stack
Frontend Library: React 19

Language: TypeScript

Styling: Tailwind CSS (configured in index.html with custom themes)

Routing: Hash-based routing in App.tsx

Module Management: ES Modules using importmap (via esm.sh)

Icons: Inline SVGs as React components from constants/constants.tsx

Images: Placeholder images from picsum.photos

Project Structure

.
├── public/
│ └── edkam.png # Favicon
├── components/
│ ├── student_portal/ # Components specific to the Student Portal
│ │ ├── DashboardPlaceholder.tsx
│ │ ├── LoginPage.tsx
│ │ └── StudentPortalPage.tsx
│ ├── AboutUsSection.tsx
│ ├── ApplicationForm.tsx
│ ├── ApplicationPage.tsx
│ ├── Button.tsx # Reusable button component
│ ├── ContactSection.tsx
│ ├── CourseCard.tsx
│ ├── CoursesSection.tsx
│ ├── Footer.tsx
│ ├── HeroSection.tsx
│ ├── Navbar.tsx
│ ├── TestimonialCard.tsx
│ ├── TestimonialsSection.tsx
│ └── WhyChooseUsSection.tsx
├── constants/
│ └── constants.tsx # Holds static data (courses, testimonials, nav links, etc.) and SVG icons
├── App.tsx # Main application component, handles routing and layout
├── index.html # Entry point of the application, includes Tailwind config & importmap
├── index.tsx # React root rendering
├── metadata.json # Project metadata for the Frame environment
└── types.ts # TypeScript type definitions
