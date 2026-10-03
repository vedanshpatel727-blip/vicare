// ═══════════════════════════════════════════════════════════════════════
// VICARE AESTHETIQUE — CENTRALIZED CONTENT CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════
// Edit this file to update the entire website.
// No need to touch individual components.
// ═══════════════════════════════════════════════════════════════════════

// ── Types ─────────────────────────────────────────────────────────────

export interface SiteInfo {
  name: string;
  tagline: string;
  location: string;
}

export interface ContactInfo {
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  mapsUrl: string;
  address: string;
  email: string;
}

export interface SocialLinks {
  instagram: string;
  instagramHandle: string;
  whatsapp: string;
  maps: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroContent {
  label: string;
  title: string;
  subtitle: string;
  trustIndicator: string;
  primaryCta: string;
  secondaryCta: string;
  image: string;
  imageAlt: string;
}

export interface DoctorInfo {
  name: string;
  qualification: string;
  specialization: string;
  experience: string;
  bio: string;
  image: string;
  imageAlt: string;
  memberships: string[];
  expertise: string[];
}

export interface ServiceCategory {
  id: string;
  label: string;
  description: string;
  icon: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  description: string;
}

export interface ResultCard {
  id: string;
  label: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  treatment: string;
  rating: number;
}

export interface StatItem {
  value: string;
  label: string;
  isPlaceholder: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  imageAlt: string;
}

export interface ContactDetail {
  label: string;
  value: string;
  hours: { day: string; time: string }[];
}

export interface TrustItem {
  value: string;
  label: string;
}

export interface FeaturedTreatment {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  treatmentId: string;
}

export type TreatmentCategoryKey =
  | 'skin'
  | 'facials'
  | 'hair'
  | 'aesthetics'
  | 'laser'
  | 'wellness'
  | 'permanent-makeup'
  | 'other';

export interface TreatmentCategoryDef {
  key: TreatmentCategoryKey;
  label: string;
}

export interface Treatment {
  id: string;
  name: string;
  category: TreatmentCategoryKey;
  overview: string;
  concerns: string[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export interface WhyVicareItem {
  title: string;
  description: string;
}

export interface SeoMeta {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

// ── Site Info ─────────────────────────────────────────────────────────

export const siteInfo: SiteInfo = {
  name: 'ViCare Aesthetique',
  tagline: 'Medical Aesthetics & Wellness with a luxury touch',
  location: 'Ahmedabad, Gujarat',
};

// ── Contact ───────────────────────────────────────────────────────────

export const contact: ContactInfo = {
  phone: '+919058383905',
  phoneDisplay: '+91 90583 83905',
  whatsapp: '919058383905',
  whatsappDisplay: '+91 90583 83905',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=ViCare+Skin+Clinic+Karnavati+Infinity+Living+Bhat+Ahmedabad+Gujarat+382428',
  address: 'Karnavati Infinity Living, 19, 107, near Indian Oil Petrol Pump, Bhat, Ahmedabad, Gujarat 382428',
  email: '[clinic email address]',
};

export const clinicHours = [
  { day: 'Monday – Friday', time: '10:00 AM – 7:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 6:00 PM' },
  { day: 'Sunday', time: 'By Appointment' },
];

export const googleMapsEmbedUrl = 'https://www.google.com/maps?q=ViCare+Skin+Clinic+Karnavati+Infinity+Living+Bhat+Ahmedabad+Gujarat+382428&output=embed';

export const results: ResultCard[] = [
  { id: 'res-1', label: 'Acne Scar Treatment', description: 'Progress over a structured treatment plan. Results vary by individual.', image: 'https://images.pexels.com/photos/8589763/pexels-photo-8589763.jpeg?auto=compress&cs=tinysrgb&w=800', imageAlt: 'Before and after acne treatment result card' },
  { id: 'res-2', label: 'Pigmentation Management', description: 'Targeted approach for even skin tone. Individual results may vary.', image: 'https://images.pexels.com/photos/9442296/pexels-photo-9442296.jpeg?auto=compress&cs=tinysrgb&w=800', imageAlt: 'Before and after pigmentation treatment result card' },
  { id: 'res-3', label: 'Facial Aesthetics', description: 'Natural-looking facial contour enhancement. Results vary by individual.', image: 'https://images.pexels.com/photos/34734905/pexels-photo-34734905.jpeg?auto=compress&cs=tinysrgb&w=800', imageAlt: 'Before and after facial aesthetics treatment result card' },
  { id: 'res-4', label: 'Hydrafacial & Skin Glow', description: 'Hydration and glow after facial treatment. Individual results may vary.', image: 'https://images.pexels.com/photos/9335961/pexels-photo-9335961.jpeg?auto=compress&cs=tinysrgb&w=800', imageAlt: 'Before and after hydrafacial treatment result card' },
];

export const testimonials: Testimonial[] = [
  { id: 't1', name: '[Patient Name]', location: 'Ahmedabad', text: '[Replace with verified patient feedback. This is editable placeholder content. Describe the patient experience, treatment received, and satisfaction level.]', treatment: 'Hydrafacial', rating: 5 },
  { id: 't2', name: '[Patient Name]', location: 'Ahmedabad', text: '[Replace with verified patient feedback. This is editable placeholder content. Describe the patient experience, treatment received, and satisfaction level.]', treatment: 'Acne Treatment', rating: 5 },
  { id: 't3', name: '[Patient Name]', location: 'Ahmedabad', text: '[Replace with verified patient feedback. This is editable placeholder content. Describe the patient experience, treatment received, and satisfaction level.]', treatment: 'Laser Hair Removal', rating: 5 },
  { id: 't4', name: '[Patient Name]', location: 'Ahmedabad', text: '[Replace with verified patient feedback. This is editable placeholder content. Describe the patient experience, treatment received, and satisfaction level.]', treatment: 'Pigmentation Solutions', rating: 5 },
];

export const faqs: FaqItem[] = [
  { question: 'How do I book an appointment?', answer: 'You can book an appointment by clicking any "Book Appointment" button on this page, which will open a WhatsApp chat with our clinic. You can also call us directly. Our team will confirm a suitable time with you.' },
  { question: 'What happens during a consultation?', answer: 'Your consultation includes a discussion of your concerns and goals, a skin or aesthetic assessment, and a recommendation for suitable treatment options. The process is thorough and pressure-free.' },
  { question: 'How long does a consultation take?', answer: 'An initial consultation typically takes 20 to 30 minutes, depending on the complexity of your concerns and the number of questions you have.' },
  { question: 'Are treatment plans personalized?', answer: 'Yes. Every treatment plan is designed around your individual skin type, concerns, and goals. There is no one-size-fits-all approach at ViCare Aesthetique.' },
  { question: 'How do I know if a treatment is suitable for me?', answer: 'Suitability is assessed during your consultation. The doctor will evaluate your skin condition, medical history, and goals before recommending any treatment. Not all treatments are suitable for everyone.' },
  { question: 'What is the follow-up process after treatment?', answer: 'Follow-up appointments are scheduled based on your treatment plan. The doctor will advise on aftercare, timeline, and any sessions required to support your results.' },
];

export const blogPosts: BlogPost[] = [
  { id: 'b1', category: 'Skincare Routine', title: 'How to Build a Skincare Routine That Works for You', excerpt: 'A simple guide to understanding your skin type and building an effective daily routine with the right products and habits.', date: '2026-09-15', image: 'https://images.pexels.com/photos/1502219/pexels-photo-1502219.jpeg?auto=compress&cs=tinysrgb&w=800', imageAlt: 'Skincare products arranged for a daily routine' },
  { id: 'b2', category: 'Acne', title: 'Understanding Acne & Acne Scars', excerpt: 'What causes acne, the difference between active breakouts and scarring, and the treatment options available at a clinic level.', date: '2026-09-10', image: 'https://images.pexels.com/photos/5588005/pexels-photo-5588005.jpeg?auto=compress&cs=tinysrgb&w=800', imageAlt: 'Close-up of skin with acne concerns' },
  { id: 'b3', category: 'Pigmentation', title: 'Common Causes of Pigmentation', excerpt: 'From sun exposure to hormonal changes, learn what contributes to uneven skin tone and what treatment approaches can help.', date: '2026-09-05', image: 'https://images.pexels.com/photos/4920507/pexels-photo-4920507.jpeg?auto=compress&cs=tinysrgb&w=800', imageAlt: 'Woman applying skincare for pigmentation concerns' },
  { id: 'b4', category: 'Aesthetic Treatments', title: 'What to Know Before an Aesthetic Treatment', excerpt: 'How to prepare for your first aesthetic appointment, what to expect during the process, and key aftercare tips.', date: '2026-08-28', image: 'https://images.pexels.com/photos/7581072/pexels-photo-7581072.jpeg?auto=compress&cs=tinysrgb&w=800', imageAlt: 'Aesthetic facial treatment at a clinic' },
  { id: 'b5', category: 'Skincare Tips', title: 'Skincare Tips for Different Skin Types', excerpt: 'Oily, dry, combination or sensitive — understand what your skin type means and how to care for it correctly.', date: '2026-08-20', image: 'https://images.pexels.com/photos/12969358/pexels-photo-12969358.jpeg?auto=compress&cs=tinysrgb&w=800', imageAlt: 'Beauty products for different skin types' },
  { id: 'b6', category: 'Facial Aesthetics', title: 'Natural-Looking Results: The ViCare Approach', excerpt: 'Our philosophy on aesthetic treatments that enhance rather than alter, and why a conservative approach often delivers the best outcomes.', date: '2026-08-12', image: 'https://images.pexels.com/photos/12115040/pexels-photo-12115040.jpeg?auto=compress&cs=tinysrgb&w=800', imageAlt: 'Facial treatment at a spa' },
];

// ── Social ────────────────────────────────────────────────────────────

export const social: SocialLinks = {
  instagram: 'https://www.instagram.com/vicare_in/',
  instagramHandle: '@vicare_in',
  whatsapp: 'https://wa.me/919058383905',
  maps: 'https://www.google.com/maps/search/?api=1&query=ViCare+Skin+Clinic+Karnavati+Infinity+Living+Bhat+Ahmedabad+Gujarat+382428',
};

// ── Navigation ────────────────────────────────────────────────────────

export const navigation: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Results', href: '#results' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

// ── Hero ──────────────────────────────────────────────────────────────

export const hero: HeroContent = {
  label: 'VICARE AESTHETIQUE',
  title: 'Advanced Aesthetics.\nThoughtfully Personal.',
  subtitle:
    'Medical aesthetics, skin, hair and wellness treatments with a luxury touch.',
  trustIndicator: 'Personalized Care  |  Advanced Treatments  |  Expert Guidance',
  primaryCta: 'Book an Appointment',
  secondaryCta: 'Explore Treatments',
  image:
    'https://images.pexels.com/photos/6899542/pexels-photo-6899542.jpeg?auto=compress&cs=tinysrgb&w=1600',
  imageAlt: 'Interior of ViCare Aesthetique treatment room with refined spa decor',
};

// ── Trust Bar ─────────────────────────────────────────────────────────

export const stats: StatItem[] = [
  { value: '[XXX]+', label: 'Patients Consulted', isPlaceholder: true },
  { value: '[XX]+', label: 'Treatments Offered', isPlaceholder: true },
  { value: '[X]+', label: 'Years of Experience', isPlaceholder: true },
  { value: '[XX]%', label: 'Patient Satisfaction', isPlaceholder: true },
];

// ── About ─────────────────────────────────────────────────────────────

export const about = {
  headline: 'Where Expertise Meets Aesthetic Care.',
  copy: 'ViCare Aesthetique is a medical aesthetics and skin-care clinic in Ahmedabad offering a comprehensive range of advanced treatments for skin, hair, facial aesthetics and wellness. Our approach is built on personalized treatment plans, patient-first care, and a commitment to natural-looking results delivered in a safe, hygienic environment.',
  points: [
    'Personalized treatment plans designed around your individual skin and aesthetic goals.',
    'A patient-first philosophy with thorough consultations and honest guidance.',
    'Focus on natural-looking results using clinically appropriate techniques.',
    'Strict hygiene and safety protocols across every treatment and procedure.',
  ],
  cta: 'Learn More',
  image:
    'https://images.pexels.com/photos/10521230/pexels-photo-10521230.jpeg?auto=compress&cs=tinysrgb&w=1200',
  imageAlt: 'Contemporary aesthetic clinic treatment room at ViCare Aesthetique',
};

// ── Doctor / Expert ───────────────────────────────────────────────────

export const doctor: DoctorInfo = {
  name: '[Doctor Name]',
  qualification: '[Qualification — e.g. MD Dermatology]',
  specialization: 'Aesthetic Dermatology & Skin Care',
  experience: '[X] Years',
  bio: '[Replace with the doctor\'s professional biography. Describe their background, training, and approach to aesthetic care. This is editable placeholder content.]',
  image:
    'https://images.pexels.com/photos/32428850/pexels-photo-32428850.jpeg?auto=compress&cs=tinysrgb&w=800',
  imageAlt: 'Aesthetic dermatology specialist at ViCare Aesthetique',
  memberships: [
    '[Professional Membership / Certification 1]',
    '[Professional Membership / Certification 2]',
    '[Professional Membership / Certification 3]',
  ],
  expertise: [
    'Aesthetic Dermatology',
    'Acne & Acne Scar Treatment',
    'Pigmentation Management',
    'Anti-Aging Solutions',
    'Laser Treatments',
    'Facial Aesthetics',
  ],
};

// ── Service Categories (for Services Overview section) ───────────────

export const serviceCategories: ServiceCategory[] = [
  { id: 'skin', label: 'Skin Treatments', description: 'Comprehensive skin care for texture, tone, and clarity concerns.', icon: 'Sparkles' },
  { id: 'hair', label: 'Hair Treatments', description: 'Solutions for hair health, thinning, and restoration.', icon: 'Wind' },
  { id: 'aesthetics', label: 'Facial Aesthetics', description: 'Injectables and contouring for natural facial enhancement.', icon: 'Crown' },
  { id: 'anti-aging', label: 'Anti-Aging', description: 'Treatments to address fine lines, wrinkles and skin laxity.', icon: 'Clock' },
  { id: 'acne-scars', label: 'Acne & Acne Scars', description: 'Targeted treatments for active acne and scar revision.', icon: 'Droplet' },
  { id: 'pigmentation', label: 'Pigmentation', description: 'Approaches for melasma, dark spots and uneven skin tone.', icon: 'Sun' },
  { id: 'laser', label: 'Laser / Advanced', description: 'Advanced laser therapy for resurfacing, pigmentation and tattoo removal.', icon: 'Zap' },
];

// ── Featured Services per category (for Services Overview cards) ─────

export const serviceItems: ServiceItem[] = [
  { id: 'svc-skin-rejuvenation', category: 'skin', name: 'Skin Rejuvenation', description: 'Treatments to refresh dull skin and improve overall texture and radiance.' },
  { id: 'svc-skin-tightening', category: 'skin', name: 'Skin Tightening', description: 'Non-surgical tightening treatments to support firmer-looking skin.' },
  { id: 'svc-hair-prp', category: 'hair', name: 'Hair PRP', description: 'Platelet-rich plasma therapy to support hair health and growth.' },
  { id: 'svc-hair-transplant', category: 'hair', name: 'Hair Restoration', description: 'Advanced hair restoration options for thinning and hair loss areas.' },
  { id: 'svc-dermal-fillers', category: 'aesthetics', name: 'Dermal Fillers', description: 'Injectable treatment to restore volume and natural facial contour.' },
  { id: 'svc-lip-fillers', category: 'aesthetics', name: 'Lip Enhancement', description: 'Subtle lip definition and volume enhancement for balanced results.' },
  { id: 'svc-botox', category: 'anti-aging', name: 'Botox', description: 'Aesthetic injectable to soften the appearance of fine lines and wrinkles.' },
  { id: 'svc-prof-aging', category: 'anti-aging', name: 'Profhilo', description: 'Bio-remodelling injectable for skin laxity and deep hydration.' },
  { id: 'svc-acne-treatment', category: 'acne-scars', name: 'Acne Treatment', description: 'Clinical protocols for active acne, breakouts and oil control.' },
  { id: 'svc-scar-remodel', category: 'acne-scars', name: 'Scar Remodeling', description: 'Microneedling and resurfacing to improve the appearance of acne scars.' },
  { id: 'svc-pigmentation', category: 'pigmentation', name: 'Pigmentation Solutions', description: 'Targeted treatments for dark spots, melasma and uneven skin tone.' },
  { id: 'svc-melasma', category: 'pigmentation', name: 'Melasma Management', description: 'A structured approach to reduce the appearance of melasma patches.' },
  { id: 'svc-laser-hair', category: 'laser', name: 'Laser Hair Removal', description: 'Laser treatment for long-term reduction of unwanted hair.' },
  { id: 'svc-pico-laser', category: 'laser', name: 'Pico Laser', description: 'Picosecond laser for pigmentation, acne scars and skin rejuvenation.' },
];

// ── Featured Treatments ──────────────────────────────────────────────

export const featuredTreatments: FeaturedTreatment[] = [
  {
    name: 'Lip Fillers',
    description: 'Aesthetic treatment to enhance lip shape, definition and volume.',
    image:
      'https://images.pexels.com/photos/7446679/pexels-photo-7446679.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Lip filler aesthetic treatment at ViCare Aesthetique',
    treatmentId: 'lip-fillers',
  },
  {
    name: 'Hydrafacial',
    description: 'Multi-step facial treatment for deep cleansing and skin hydration.',
    image:
      'https://images.pexels.com/photos/37229301/pexels-photo-37229301.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Hydrafacial treatment at ViCare Aesthetique',
    treatmentId: 'hydrafacial',
  },
  {
    name: 'Laser Treatments',
    description: 'Advanced laser therapy for skin rejuvenation and hair removal.',
    image:
      'https://images.pexels.com/photos/4586728/pexels-photo-4586728.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Laser skin treatment at ViCare Aesthetique',
    treatmentId: 'laser-hair-removal',
  },
  {
    name: 'Hair PRP',
    description: 'Platelet-rich plasma therapy to support hair health and growth.',
    image:
      'https://images.pexels.com/photos/28994388/pexels-photo-28994388.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Hair PRP treatment at ViCare Aesthetique',
    treatmentId: 'hair-prp',
  },
  {
    name: 'IV Glow Drips',
    description: 'Wellness drips designed to support skin glow and vitality.',
    image:
      'https://images.pexels.com/photos/6436272/pexels-photo-6436272.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'IV glow drip wellness treatment at ViCare Aesthetique',
    treatmentId: 'iv-glow-drips',
  },
  {
    name: 'Permanent Makeup',
    description: 'Long-lasting makeup techniques for brows, lips and definition.',
    image:
      'https://images.pexels.com/photos/16057715/pexels-photo-16057715.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Permanent makeup eyebrow treatment at ViCare Aesthetique',
    treatmentId: 'permanent-makeup',
  },
];

// ── Treatment Categories ──────────────────────────────────────────────

export const treatmentCategories: TreatmentCategoryDef[] = [
  { key: 'skin', label: 'Skin' },
  { key: 'facials', label: 'Facials' },
  { key: 'hair', label: 'Hair' },
  { key: 'aesthetics', label: 'Aesthetics' },
  { key: 'laser', label: 'Laser' },
  { key: 'wellness', label: 'Wellness' },
  { key: 'permanent-makeup', label: 'Permanent Makeup' },
  { key: 'other', label: 'Other' },
];

// ── Treatments ────────────────────────────────────────────────────────
// Add a new object here and it automatically appears on the website.

export const treatments: Treatment[] = [
  // SKIN
  { id: 'anti-aging-solutions', name: 'Anti-aging Solutions', category: 'skin', overview: 'Treatments designed to address visible signs of ageing and support skin vitality.', concerns: ['Fine lines', 'Wrinkles', 'Skin laxity'] },
  { id: 'deep-peelings', name: 'Deep Peelings', category: 'skin', overview: 'Chemical peel treatments targeting deeper skin concerns and texture.', concerns: ['Texture', 'Pigmentation', 'Acne scars'] },
  { id: 'pigmentation-solutions', name: 'Pigmentation Solutions', category: 'skin', overview: 'Targeted treatments to address uneven skin tone and pigmentation.', concerns: ['Pigmentation', 'Dark spots', 'Uneven tone'] },
  { id: 'skin-tightening', name: 'Skin Tightening', category: 'skin', overview: 'Non-surgical tightening treatments to support firmer-looking skin.', concerns: ['Skin laxity', 'Sagging'] },
  { id: 'acne-treatment', name: 'Acne Treatment', category: 'skin', overview: 'Clinical treatments designed to address active acne and prevent breakouts.', concerns: ['Acne', 'Breakouts', 'Oily skin'] },
  { id: 'microneedling-skin', name: 'Microneedling', category: 'skin', overview: 'Collagen-induction therapy to improve skin texture and appearance.', concerns: ['Texture', 'Scarring', 'Pores'] },
  { id: 'laser-skin-rejuvenation', name: 'Laser Skin Rejuvenation', category: 'skin', overview: 'Laser treatment to refresh and revitalise skin appearance.', concerns: ['Dullness', 'Texture', 'Tone'] },
  { id: 'q-switch-laser-skin', name: 'Q-Switch Laser', category: 'skin', overview: 'Precision laser treatment for pigmentation and skin clarity.', concerns: ['Pigmentation', 'Tattoo ink', 'Dark spots'] },
  { id: 'melasma-removal', name: 'Melasma Removal', category: 'skin', overview: 'Targeted approach to reduce the appearance of melasma patches.', concerns: ['Melasma', 'Pigmentation'] },
  { id: 'psoriasis-treatment', name: 'Psoriasis Treatment', category: 'skin', overview: 'Management and treatment options for psoriasis-related skin concerns.', concerns: ['Psoriasis', 'Inflammation'] },
  { id: 'scar-remodeling', name: 'Scar Remodeling', category: 'skin', overview: 'Treatments to improve the appearance and texture of scars.', concerns: ['Scarring', 'Texture'] },
  { id: 'laser-resurfacing-skin', name: 'Laser Resurfacing', category: 'skin', overview: 'Laser resurfacing to improve skin texture and tone.', concerns: ['Texture', 'Scarring', 'Tone'] },
  { id: 'tan-removal', name: 'Tan Removal Treatments', category: 'skin', overview: 'Treatments designed to reduce the appearance of tanning and sun damage.', concerns: ['Tan', 'Sun damage'] },
  { id: 'wart-removal', name: 'Wart Removal', category: 'skin', overview: 'Clinical removal of warts using appropriate techniques.', concerns: ['Warts'] },
  { id: 'mole-removal', name: 'Mole Removal', category: 'skin', overview: 'Safe clinical removal of moles with assessment.', concerns: ['Moles'] },
  { id: 'dark-circle-removal', name: 'Dark Circle Removal', category: 'skin', overview: 'Treatments targeting the appearance of under-eye dark circles.', concerns: ['Dark circles', 'Under-eye'] },

  // FACIALS
  { id: 'hydrafacial', name: 'Hydrafacial', category: 'facials', overview: 'Multi-step facial combining cleansing, exfoliation and hydration.', concerns: ['Dullness', 'Dehydration', 'Pores'] },
  { id: 'hydraglow-facial', name: 'Hydraglow Facial', category: 'facials', overview: 'Hydrating facial designed to enhance skin glow and radiance.', concerns: ['Dullness', 'Dehydration'] },
  { id: 'korean-facial', name: 'Korean Facial', category: 'facials', overview: 'Korean-inspired facial focusing on glass-skin results and hydration.', concerns: ['Dullness', 'Dehydration', 'Texture'] },
  { id: 'medicated-facials', name: 'Medicated Facials', category: 'facials', overview: 'Clinical facials using medical-grade products for targeted concerns.', concerns: ['Acne', 'Sensitive skin'] },
  { id: 'carbon-facial', name: 'Carbon Facial', category: 'facials', overview: 'Laser-assisted carbon facial for oil control and skin refinement.', concerns: ['Oily skin', 'Pores', 'Texture'] },
  { id: 'hollywood-facial', name: 'Hollywood Facial', category: 'facials', overview: 'Red-carpet inspired facial for an instant refreshed glow.', concerns: ['Dullness', 'Special events'] },
  { id: 'microneedling-facial', name: 'Microneedling', category: 'facials', overview: 'Collagen-induction therapy as part of a facial protocol.', concerns: ['Texture', 'Scarring', 'Pores'] },
  { id: 'vampire-facial', name: 'Vampire Facial', category: 'facials', overview: 'PRP-based facial treatment to support skin rejuvenation.', concerns: ['Ageing', 'Dullness', 'Texture'] },
  { id: 'salicylic-peel', name: 'Salicylic Peel', category: 'facials', overview: 'BHA chemical peel targeting acne and oil-related concerns.', concerns: ['Acne', 'Oily skin', 'Pores'] },
  { id: 'yellow-peel', name: 'Yellow Peel', category: 'facials', overview: 'Retinol-based peel for skin brightening and renewal.', concerns: ['Pigmentation', 'Dullness'] },
  { id: 'oxygeno-facial', name: 'Oxygeno Facial', category: 'facials', overview: 'Oxygen-infusion facial for skin revitalisation and hydration.', concerns: ['Dullness', 'Dehydration'] },

  // HAIR
  { id: 'hair-transplants', name: 'Hair Transplants', category: 'hair', overview: 'Surgical hair restoration procedure for areas of hair loss.', concerns: ['Hair loss', 'Baldness', 'Thinning'] },
  { id: 'hair-prp', name: 'Hair PRP', category: 'hair', overview: 'Platelet-rich plasma therapy to support hair health and growth.', concerns: ['Hair thinning', 'Hair loss'] },
  { id: 'exosomes', name: 'Exosomes', category: 'hair', overview: 'Advanced therapy using exosomes to support hair and skin health.', concerns: ['Hair loss', 'Skin rejuvenation'] },
  { id: 'mesotherapy', name: 'Mesotherapy', category: 'hair', overview: 'Micro-injection therapy delivering nutrients to support hair health.', concerns: ['Hair thinning', 'Hair loss'] },
  { id: 'laser-hair-removal-hair', name: 'Laser Hair Removal', category: 'hair', overview: 'Laser treatment for long-term reduction of unwanted hair.', concerns: ['Unwanted hair'] },

  // AESTHETICS
  { id: 'botox', name: 'Botox', category: 'aesthetics', overview: 'Aesthetic injectable treatment to reduce the appearance of fine lines and wrinkles.', concerns: ['Wrinkles', 'Fine lines'] },
  { id: 'dermal-fillers', name: 'Dermal Fillers', category: 'aesthetics', overview: 'Injectable treatment to restore volume and contour.', concerns: ['Volume loss', 'Contouring'] },
  { id: 'face-fillers', name: 'Face Fillers', category: 'aesthetics', overview: 'Filler treatment to enhance facial definition and structure.', concerns: ['Volume loss', 'Facial contouring'] },
  { id: 'lip-fillers', name: 'Lip Fillers', category: 'aesthetics', overview: 'An aesthetic treatment designed to enhance lip shape, definition and volume. Treatment suitability should be assessed during consultation.', concerns: ['Lip volume', 'Lip definition'] },
  { id: 'skin-boosters', name: 'Skin Boosters', category: 'aesthetics', overview: 'Injectable hydration treatment to improve skin quality and glow.', concerns: ['Dehydration', 'Dullness'] },
  { id: 'profhilo', name: 'Profhilo', category: 'aesthetics', overview: 'Bio-remodelling injectable for skin laxity and hydration.', concerns: ['Skin laxity', 'Ageing'] },
  { id: 'skinvive', name: 'Skinvive', category: 'aesthetics', overview: 'Skin quality booster injection for smoothness and hydration.', concerns: ['Dehydration', 'Texture'] },
  { id: 'skinvital', name: 'Skinvital', category: 'aesthetics', overview: 'Vitality-focused injectable treatment for skin rejuvenation.', concerns: ['Dullness', 'Ageing'] },
  { id: 'sculptra', name: 'Sculptra', category: 'aesthetics', overview: 'Collagen-stimulating injectable for gradual volume restoration.', concerns: ['Volume loss', 'Contouring'] },
  { id: 'mesobotox', name: 'Mesobotox', category: 'aesthetics', overview: 'Micro-injections of botox for a refined, natural-looking result.', concerns: ['Fine lines', 'Pores', 'Texture'] },
  { id: 'thread-lift', name: 'Thread Lift', category: 'aesthetics', overview: 'Non-surgical lifting treatment using dissolvable threads.', concerns: ['Skin laxity', 'Sagging'] },
  { id: 'neck-lifting', name: 'Neck Lifting', category: 'aesthetics', overview: 'Aesthetic treatment targeting the appearance of the neck area.', concerns: ['Neck lines', 'Sagging'] },
  { id: 'anti-aging-aesthetics', name: 'Anti Aging', category: 'aesthetics', overview: 'Comprehensive aesthetic approach to visible signs of ageing.', concerns: ['Wrinkles', 'Volume loss', 'Laxity'] },
  { id: 'wrinkle-removal', name: 'Wrinkle Removal Treatment', category: 'aesthetics', overview: 'Targeted treatment to reduce the appearance of wrinkles.', concerns: ['Wrinkles', 'Fine lines'] },

  // LASER
  { id: 'laser-hair-removal', name: 'Laser Hair Removal', category: 'laser', overview: 'Laser treatment for long-term reduction of unwanted hair.', concerns: ['Unwanted hair'] },
  { id: 'laser-skin-therapy', name: 'Laser Skin Therapy', category: 'laser', overview: 'Laser treatment targeting various skin concerns.', concerns: ['Pigmentation', 'Texture', 'Tone'] },
  { id: 'pico-laser', name: 'Pico Laser Treatment', category: 'laser', overview: 'Picosecond laser for pigmentation, acne scars and skin rejuvenation.', concerns: ['Pigmentation', 'Scarring', 'Tone'] },
  { id: 'q-switch-laser', name: 'Q-Switch Laser', category: 'laser', overview: 'Precision laser for pigmentation and tattoo removal.', concerns: ['Pigmentation', 'Tattoo ink'] },
  { id: 'tattoo-removal', name: 'Tattoo Removal', category: 'laser', overview: 'Laser treatment to reduce the appearance of tattoos.', concerns: ['Tattoo removal'] },
  { id: 'colour-tattoo-removal', name: 'Colour Tattoo Removal', category: 'laser', overview: 'Specialised laser treatment for coloured tattoo ink.', concerns: ['Coloured tattoos'] },
  { id: 'laser-resurfacing', name: 'Laser Resurfacing', category: 'laser', overview: 'Laser resurfacing to improve skin texture and tone.', concerns: ['Texture', 'Scarring', 'Tone'] },

  // WELLNESS
  { id: 'iv-glow-drips', name: 'IV Glow Drips', category: 'wellness', overview: 'Wellness drips designed to support skin glow and vitality.', concerns: ['Dullness', 'Low energy', 'Wellness'] },
  { id: 'glutathione-drips', name: 'Glutathione Drips', category: 'wellness', overview: 'Antioxidant IV drip supporting skin brightening and wellness.', concerns: ['Pigmentation', 'Dullness'] },
  { id: 'weight-loss', name: 'Weight Loss', category: 'wellness', overview: 'Wellness programmes supporting healthy weight management.', concerns: ['Weight management'] },
  { id: 'lymphatic-drainage', name: 'Lymphatic Drainage', category: 'wellness', overview: 'Therapy to support lymphatic flow and reduce fluid retention.', concerns: ['Fluid retention', 'Wellness'] },

  // PERMANENT MAKEUP
  { id: 'permanent-makeup', name: 'Permanent Makeup', category: 'permanent-makeup', overview: 'Long-lasting makeup techniques for brows, lips and definition.', concerns: ['Brows', 'Lips', 'Definition'] },
  { id: 'microblading', name: 'Microblading', category: 'permanent-makeup', overview: 'Semi-permanent brow technique for natural-looking definition.', concerns: ['Brows', 'Brow definition'] },
  { id: 'lip-tinting', name: 'Lip Tinting', category: 'permanent-makeup', overview: 'Semi-permanent lip colour for a natural tinted look.', concerns: ['Lip colour', 'Lip definition'] },
  { id: 'ombre-eyebrows', name: 'Ombre Eyebrows', category: 'permanent-makeup', overview: 'Soft-shaded permanent brow technique for a defined finish.', concerns: ['Brows', 'Brow definition'] },
  { id: 'permanent-blush', name: 'Permanent Blush', category: 'permanent-makeup', overview: 'Semi-permanent blush for a natural flushed appearance.', concerns: ['Cheek colour'] },

  // OTHER
  { id: 'face-gymming', name: 'Face Gymming', category: 'other', overview: 'Facial muscle stimulation treatment for toning and definition.', concerns: ['Facial toning', 'Muscle definition'] },
];

// ── Gallery ───────────────────────────────────────────────────────────

export const gallery: GalleryImage[] = [
  { src: 'https://images.pexels.com/photos/6899542/pexels-photo-6899542.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Elegant treatment room interior at ViCare Aesthetique', category: 'Clinic' },
  { src: 'https://images.pexels.com/photos/37229301/pexels-photo-37229301.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Facial treatment in progress at ViCare Aesthetique', category: 'Treatments' },
  { src: 'https://images.pexels.com/photos/11024139/pexels-photo-11024139.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Modern aesthetic clinic room with equipment', category: 'Clinic' },
  { src: 'https://images.pexels.com/photos/4586728/pexels-photo-4586728.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Laser facial treatment at ViCare Aesthetique', category: 'Treatments' },
  { src: 'https://images.pexels.com/photos/10658350/pexels-photo-10658350.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Elegant beauty portrait with clear skin', category: 'Beauty' },
  { src: 'https://images.pexels.com/photos/7446679/pexels-photo-7446679.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Lip filler aesthetic treatment', category: 'Treatments' },
  { src: 'https://images.pexels.com/photos/11024140/pexels-photo-11024140.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Serene spa treatment room with laser equipment', category: 'Clinic' },
  { src: 'https://images.pexels.com/photos/37240340/pexels-photo-37240340.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Relaxing facial massage at ViCare Aesthetique', category: 'Treatments' },
  { src: 'https://images.pexels.com/photos/14933926/pexels-photo-14933926.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Elegant makeup portrait with clear skin', category: 'Beauty' },
  { src: 'https://images.pexels.com/photos/16057715/pexels-photo-16057715.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Permanent makeup eyebrow procedure', category: 'Treatments' },
  { src: 'https://images.pexels.com/photos/263201/pexels-photo-263201.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Minimalist clinic room interior', category: 'Clinic' },
  { src: 'https://images.pexels.com/photos/32755082/pexels-photo-32755082.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Fresh clean skin beauty portrait', category: 'Beauty' },
];

// ── Social / Instagram Section ────────────────────────────────────────

export const socialSection = {
  headline: 'Follow ViCare Aesthetique',
  handle: '@vicare_in',
  copy: 'Discover our latest treatments, clinic moments and aesthetic work.',
  cta: 'Follow on Instagram',
  url: 'https://www.instagram.com/vicare_in/',
};

// ── Why ViCare ────────────────────────────────────────────────────────

export const whyVicare: WhyVicareItem[] = [
  { title: 'Personalized Treatment Plans', description: 'Every plan is tailored to your individual skin, hair and aesthetic goals.' },
  { title: 'Experienced Guidance', description: 'Professional assessment and honest recommendations at every step.' },
  { title: 'Modern Treatment Approach', description: 'A broad range of advanced aesthetic and dermatology treatments.' },
  { title: 'Patient-Focused Care', description: 'Thorough consultations with your comfort and concerns at the centre.' },
  { title: 'Hygiene & Safety', description: 'Strict protocols maintained across all treatments and procedures.' },
  { title: 'Transparent Consultation', description: 'Clear expectations, honest advice, and no pressure to commit.' },
];

// ── Clinic Experience ─────────────────────────────────────────────────

export const clinicExperience = {
  headline: 'A Space Designed Around Your Comfort.',
  copy: 'A refined environment where advanced aesthetic care meets a calm, welcoming experience.',
  cta: 'View Gallery',
  image:
    'https://images.pexels.com/photos/11024140/pexels-photo-11024140.jpeg?auto=compress&cs=tinysrgb&w=1600',
  imageAlt: 'Serene treatment room at ViCare Aesthetique',
};

// ── Consultation CTA ──────────────────────────────────────────────────

export const consultationCta = {
  headline: 'Ready to Begin Your Journey?',
  copy: 'Connect with ViCare Aesthetique on WhatsApp to book your consultation.',
  cta: 'Book Consultation on WhatsApp',
};

// ── Footer ────────────────────────────────────────────────────────────

export const footer = {
  disclaimer:
    'Treatment suitability varies by individual. Consultation with a qualified professional is recommended before undergoing any treatment. Results shown are illustrative and not guaranteed.',
  quickLinksLabel: 'Quick Links',
  treatmentsLabel: 'Treatments',
  aboutLabel: 'About',
  contactLabel: 'Contact',
  legalLabel: 'Legal',
  copyright: '© 2026 ViCare Aesthetique. All rights reserved.',
};

export const footerLinks = {
  treatments: [
    { label: 'Skin Treatments', href: '#treatments' },
    { label: 'Hair Treatments', href: '#treatments' },
    { label: 'Facial Aesthetics', href: '#treatments' },
    { label: 'Laser Treatments', href: '#treatments' },
  ],
  about: [
    { label: 'About ViCare', href: '#about' },
    { label: 'Our Expert', href: '#doctor' },
    { label: 'Why Choose Us', href: '#why-vicare' },
    { label: 'Gallery', href: '#gallery' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

// ── SEO ───────────────────────────────────────────────────────────────

export const seo: SeoMeta = {
  title: 'ViCare Aesthetique | Medical Aesthetics & Wellness in Ahmedabad',
  description:
    'ViCare Aesthetique offers aesthetic, skin, hair, laser, facial, permanent makeup and wellness treatments in Ahmedabad.',
  ogTitle: 'ViCare Aesthetique | Medical Aesthetics & Wellness',
  ogDescription:
    'Medical aesthetics, skin, hair and wellness treatments with a luxury touch in Ahmedabad.',
  ogImage:
    'https://images.pexels.com/photos/6899542/pexels-photo-6899542.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

// ── Helper: WhatsApp link ─────────────────────────────────────────────

const defaultBookingMessage = 'Hi, I would like to book a consultation at ViCare Aesthetique. Please share the available appointment slots.';

export function getWhatsAppLink(message?: string): string {
  const text = encodeURIComponent(message || defaultBookingMessage);
  return `https://wa.me/${contact.whatsapp}?text=${text}`;
}

export function getTelLink(): string {
  return `tel:${contact.phone.replace(/\s/g, '')}`;
}
