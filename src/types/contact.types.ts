export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceType: string;
  details: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconPath: string; // Resolves to public/ folder (e.g., "/icons/facebook.svg")
}