export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  category: 'residential' | 'commercial' | 'historical' | 'modern';
  images: string[];
  videoUrl?: string;
  features: string[];
  area: number;
  price: number;
  featured: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  propertyInterest?: string;
  projectType: 'film' | 'photography' | 'commercial' | 'other';
}

export interface FilterOptions {
  category: string;
  location: string;
  priceRange: [number, number];
  features: string[];
}