import React from 'react';

export interface NavLink {
  href: string;
  label: string;
}

export interface Course {
  id: string;
  title: string;
  description: string; // Short description for the front
  icon?: React.ReactNode;
  duration: string;
  image: string;
  tags: string[];
  // New fields for the back of the card
  detailedDescription?: string; // Optional longer description
  learningOutcomes: string[];
  modulesCovered: string[];
  targetAudience: string;
  prerequisites: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  feedback: string;
  course: string;
  avatar: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ApplicationFormData {
  fullName: string;
  email: string;
  phone?: string;
  dateOfBirth?: string;
  address?: string;
  courseId: string;
  applicationType: string;
  previousInstitution?: string;
  highestQualification?: string;
  statementOfPurpose: string;
  cv?: File | null;
  transcripts?: File | null;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: number;
}