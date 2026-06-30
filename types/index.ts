export type Locale = 'en' | 'ar';

export type DivisionSlug = 'foods' | 'trade' | 'farmer';

export interface Division {
  slug: DivisionSlug;
  name: string;
  nameAr: string;
  tagline: string;
  taglineAr: string;
  description: string;
  descriptionAr: string;
  features: string[];
  featuresAr: string[];
  image: string;
  icon: string;
  color: string;
}

export interface Product {
  id: string;
  name: string;
  nameAr: string;
  slug: string;
  category: string;
  categoryAr: string;
  description: string;
  descriptionAr: string;
  image: string;
  gallery: string[];
  specifications: { label: string; value: string }[];
  packaging: string;
  packagingAr: string;
  origin: string;
  originAr: string;
  availability: string;
  availabilityAr: string;
  exportMarkets: string[];
  division: DivisionSlug;
}

export interface BlogPost {
  slug: string;
  title: string;
  titleAr: string;
  excerpt: string;
  excerptAr: string;
  content: string;
  contentAr: string;
  image: string;
  author: string;
  authorAr: string;
  date: string;
  readingTime: number;
  category: string;
  categoryAr: string;
  tags: string[];
  featured?: boolean;
}

export interface TimelineEvent {
  year: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
}

export interface Certificate {
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  image: string;
}

export interface NavItem {
  label: string;
  labelAr: string;
  href: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  labelAr: string;
}
