export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  clientName: string;
  technology: string[];
  link: string;
  results?: {
    bookings?: string;
    revenue?: string;
    engagement?: string;
    leads?: string;
    conversion?: string;
    orders?: string;
    retention?: string;
  };
}

export interface ServicePackage {
  name: string;
  price: string;
  features: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  packages?: ServicePackage[];
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  founded: number;
  location: {
    address: string;
    city: string;
    postcode: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  contact: {
    email: string;
    phone: string;
    social: {
      twitter: string;
      linkedin: string;
      instagram: string;
    };
  };
  mission: string;
  values: Array<{
    title: string;
    description: string;
  }>;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  testimonial: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}