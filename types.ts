
import React from 'react';

export interface NavLink {
  href: string;
  label: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  duration: string;
  image: string;
  tags: string[];
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
