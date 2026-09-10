import type { ContactInfo, SocialLink } from '../types/contact.types';

export const CONTACT_INFO: ContactInfo = {
  email: "johnfatbuildingandplanning@gmail.com",
  phone: "+234 (0) 813 536 2193", // Replace with your actual official line
  location: "Ekiti, Nigeria" // Update with exact office address
};

export const SERVICE_OPTIONS = [
  "Construction Management & Supervision",
  "Architectural & Spatial Design",
  "Land & Site Surveying Services",
  "Full Integrated Build Project"
];

export const FOOTER_CONTACT = {
  phoneDisplay: '+234 (0) 813 536 2193',
  phoneRaw: '+2348135362193',
};

export const SOCIAL_LINKS: SocialLink[] = [
  // { 
  //   platform: 'Facebook', 
  //   url: 'https://facebook.com/johnfatengineering', 
  //   iconPath: '/facebook.svg' 
  // },
  { 
    platform: 'WhatsApp', 
    url: 'https://wa.me/2348135362193', 
    iconPath: '/whatsapp.svg' 
  },
  // { 
  //   platform: 'Instagram', 
  //   url: 'https://instagram.com/johnfatengineering', 
  //   iconPath: '/instagram.svg' 
  // },
{ 
    platform: 'Phone', 
    url: 'sms:+2348135362193', 
    iconPath: '/phone.svg' // Updated icon path to match the platform
}
  // { 
  //   platform: 'X', 
  //   url: 'https://x.com/johnfateng', 
  //   iconPath: '/twitter.svg' 
  // },
];