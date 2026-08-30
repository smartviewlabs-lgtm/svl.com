export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  tag: string;
  badge?: string;
  popular?: boolean;
}

export interface PunjabLocation {
  city: string;
  district: string;
  tagline: string;
  address: string;
  phone: string;
  landmark: string;
  servicesAvailable: string[];
  coverageRadius: string;
  badge?: string;
  popularHub?: boolean;
}

export interface CareerOpportunity {
  id: string;
  title: string;
  type: 'Internship' | 'Full-Time' | 'Trainee' | 'Part-Time';
  category: '360° Photography' | 'Social Media & Ads' | 'Web Development' | 'SEO & Content' | 'Business Development';
  targetAudience: 'Students' | 'Fresh Graduates' | 'Experienced' | 'All Welcomed';
  location: string;
  stipendOrSalary: string;
  duration?: string;
  description: string;
  responsibilities: string[];
  perks: string[];
  requirements: string[];
  openings: number;
}

export interface CaseStudy {
  id: string;
  businessName: string;
  city: string;
  category: string;
  image: string;
  results: {
    viewsGrowth: string;
    footfallIncrease: string;
    rankingJump: string;
  };
  quote: string;
  clientName: string;
  clientRole: string;
  servicesUsed: string[];
}

export interface PanoramaScene {
  id: string;
  name: string;
  category: string;
  location: string;
  imageUrl: string;
  description: string;
  hotspots: {
    x: number;
    y: number;
    title: string;
    description: string;
  }[];
}
