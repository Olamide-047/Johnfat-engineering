export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  scope: string[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  year: string;
  category: 'Architecture' | 'Surveying' | 'Supervision' | 'Full Integrated Project' | 'Setting Out';
  description?: string;
  imageUrl?: string;
  images?: string[]; // Array of image URLs for gallery/carousel
  videoUrl?: string; // Optional HTML5 video URL (.mp4 / .webm)
}

export interface StatCard {
  title: string;
  value: string;
  description: string;
}

export interface AboutHero {
  headline: string;
  subtext: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface StoryData {
  overview: string;
  milestones: Milestone[];
}

export interface MissionVisionData {
  mission: string;
  vision: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
}

export interface CredentialsData {
  licenses: string[];
  awardsAndSafety: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  role: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}