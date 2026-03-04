import type { ReactNode } from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface Experience {
  icon: ReactNode | string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Stat {
  value: string;
  label: string;
  sublabel: string;
}

export interface TourStep {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface IncludedItem {
  text: string;
}

export interface PillarItem {
  icon: string;
  title: string;
  description: string;
}

export interface DistancePoint {
  icon: string;
  text: string;
}

export interface ReviewItem {
  text: string;
  stars: number;
}
