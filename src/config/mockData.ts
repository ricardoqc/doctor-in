import { PhoneCall, ClipboardCheck, Stethoscope, Timer, Languages, MapPin, ShieldCheck } from 'lucide-react';
import { Article } from '@/features/articles/types';

export const CITIES = [
  'Lima', 'Bogotá', 'Santiago', 'Buenos Aires', 'Quito',
  'Cusco', 'Medellín', 'Cartagena', 'Río de Janeiro', 'São Paulo',
  'Montevideo', 'La Paz', 'Asunción'
];

export const TRUST_BAR_ITEMS = [
  { icon: Timer, title: '24/7 Emergency', sub: 'Always available' },
  { icon: Languages, title: 'Multilingual Care', sub: 'English, Spanish & more' },
  { icon: MapPin, title: 'At Your Location', sub: 'Hotel, Airbnb or home' },
  { icon: ShieldCheck, title: 'Certified Specialists', sub: 'Licensed & insured' },
];

export const SERVICES = [
  {
    icon: PhoneCall,
    title: 'Emergency Care',
    desc: 'Immediate medical response across Latin America. Doctor dispatched to your location within 30 min.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    id: 'emergency-care'
  },
  {
    icon: ClipboardCheck,
    title: 'Book an Appointment',
    desc: 'Schedule a visit with a specialist in English, French or German. Available same day.',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
    id: 'book-appointment',
    dark: true
  },
  {
    icon: Stethoscope,
    title: 'Specialist Consultations',
    desc: 'Cardiology, dermatology, pediatrics, and more. International-standard care in your language.',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    id: 'specialist-consultations'
  },
  {
    icon: ClipboardCheck,
    title: 'Prescriptions & Labs',
    desc: 'Receive your prescription digitally. Coordinated with labs and pharmacies near you.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    id: 'prescriptions-labs'
  }
];

export const DOCTORS = [
  {
    name: 'Dr. Maria Gonzalez',
    specialty: 'Pediatrics',
    info: 'English • Spanish • 15 yrs exp.',
    image: '/images/specialist_doctor_1_1778509475757.png'
  },
  {
    name: 'Dr. Ricardo Silva',
    specialty: 'General Medicine',
    info: 'English • Portuguese • 12 yrs exp.',
    image: '/images/specialist_doctor_2_1778509492948.png'
  },
  {
    name: 'Dr. Elena Rossi',
    specialty: 'Internal Medicine',
    info: 'English • Italian • 10 yrs exp.',
    image: '/images/specialist_doctor_3_1778509508897.png'
  },
  {
    name: 'Dr. Javier Mendez',
    specialty: 'Emergency Care',
    info: 'English • Spanish • 18 yrs exp.',
    image: '/images/hero_doctor_peru_1778509460076.png'
  }
];

export const TESTIMONIALS = [
  {
    text: "I had a terrible altitude sickness during my trip through Latin America and didn't know what to do. Doctor In sent a doctor to my hotel within 20 minutes. He spoke perfect English and made me feel safe.",
    author: "James Wilson",
    location: "International Traveler",
    rating: 5
  },
  {
    text: "As an expat living in Latin America, I needed a specialist who could communicate clearly. Doctor In connected me with the right professional and the experience was outstanding.",
    author: "Emma Schneider",
    location: "Expat in Latam",
    rating: 5
  },
  {
    text: "My daughter had a fever in the middle of our family vacation. The pediatrician arrived quickly, was incredibly kind, and gave us complete peace of mind anywhere we were.",
    author: "Li Wei",
    location: "Traveling Family",
    rating: 5
  }
];

export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'How to Deal with Altitude Sickness in Latam',
    category: 'Travel Health',
    excerpt: "A complete guide on recognizing and treating 'soroche' across high-altitude destinations in Latin America.",
    image: '/images/blog_travel_health_1778509526333.png',
    date: 'May 10, 2026',
    slug: 'altitude-sickness-guide'
  },
  {
    id: '2',
    title: 'Staying Safe in the Amazon: Vaccination Guide',
    category: 'Safety',
    excerpt: 'Essential health precautions and mandatory vaccinations for travelers exploring the Amazon basin.',
    image: '/images/blog_travel_health_1778509526333.png',
    date: 'May 8, 2026',
    slug: 'amazon-vaccination-guide'
  },
  {
    id: '3',
    title: 'Finding English Speaking Doctors in Major Cities',
    category: 'Resources',
    excerpt: 'How to access international-standard medical care in your language while traveling through Latin America.',
    image: '/images/blog_travel_health_1778509526333.png',
    date: 'May 5, 2026',
    slug: 'finding-english-doctors'
  }
];

export const ABOUT_TEAM = [
  { name: 'Dr. Maria Gonzalez', specialty: 'Pediatrics', experience: '15 years of experience', image: '/images/specialist_doctor_1_1778509475757.png' },
  { name: 'Dr. Ricardo Silva', specialty: 'General Medicine', experience: '12 years of experience', image: '/images/specialist_doctor_2_1778509492948.png' },
  { name: 'Dr. Elena Rossi', specialty: 'Internal Medicine', experience: '10 years of experience', image: '/images/specialist_doctor_3_1778509508897.png' },
  { name: 'Dr. Javier Mendez', specialty: 'Emergency Care', experience: '18 years of experience', image: '/images/hero_doctor_peru_1778509460076.png' },
];

export const ABOUT_VALUES = [
  { 
    icon: Languages, 
    title: 'No Language Barriers', 
    desc: 'All our doctors are fluent in English, and many speak French, German, and Portuguese.',
    color: 'text-accent',
    bgColor: 'bg-accent/20'
  },
  { 
    icon: Timer, 
    title: '24/7 Availability', 
    desc: 'Medical emergencies don\'t have a schedule. We are available round the clock, 365 days a year.',
    color: 'text-primary',
    bgColor: 'bg-primary/20'
  },
  { 
    icon: ShieldCheck, 
    title: 'Certified Excellence', 
    desc: 'Only board-certified specialists with rigorous background checks make it to our network.',
    color: 'text-secondary',
    bgColor: 'bg-secondary/20'
  },
];

