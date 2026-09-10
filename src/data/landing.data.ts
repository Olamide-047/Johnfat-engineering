import type {
  ServiceItem,
  ProjectItem,
  StatCard,
  TestimonialItem,
  FaqItem,
  AboutHero,
  StoryData,
  MissionVisionData,
  TeamMember,
  CredentialsData,
} from "../types/landing.types";

export const HERO_DATA = {
  subtitle:
    "Successful projects rely on deep foundations, precise land surveying, and uncompromised site supervision.",
  primaryCta: "Book a call",
  secondaryCta: "View our projects",
  backgroundImage: "/engr.jpg",
  previewImage: "/hero.jpg",
};

export const ABOUT_STATS: StatCard[] = [
  {
    title: "Typical project budget",
    value: "$47,500 — $4.25M+",
    description:
      "Not sure yet? We help establish realistic budgets during early planning.",
  },
  {
    title: "Where we operate",
    value: "Primary areas",
    description:
      "Serving nationwide infrastructure with selected specialized projects outside.",
  },
  {
    title: "Typical timeline",
    value: "6 Weeks — 18 Months",
    description:
      "Small refurbishments move faster. Commercial builds take longer.",
  },
];

export const ABOUT_HERO: AboutHero = {
  headline:
    "Shaping sustainable environments and building a better future through precision engineering.",
  subtext:
    "We turn early-stage ideas into organized construction projects with realistic timelines, visible progress, and direct site communication.",
};

export const OUR_STORY: StoryData = {
  overview:
    "Founded in 2020, JOHN-FAT BUILDING ENGINEERING AND PLANNING LTD was established to bridge the disconnect between architectural design, structural design, land surveying, and active site supervision. What began as a dedicated three-person engineering and planning consultancy has expanded into a full-service construction and planning management firm overseeing complex commercial and residential developments.",
  milestones: [
    {
      year: "2020",
      title: "Firm Established",
      description:
        "Launched initial architectural and strutural design consultancy services.",
    },
    {
      year: "2022",
      title: "Integrated Oversight",
      description:
        "Expanded operations to offer end-to-end full planning, site survey, site supervision and became a chartered engineering firm.",
    },
    {
      year: "2025",
      title: "50+ Projects Completed",
      description:
        "Reached milestone deliverability across urban residential & commercial sectors.",
    },
  ],
};

export const MISSION_VISION: MissionVisionData = {
  mission:
    "To deliver uncompromising structural integrity through smart planning, architectural design, strict safety protocols, and environmentally conscious green building techniques.",
  vision:
    "To set the industry benchmark for controlled, delay-free planning and construction management where safety, quality, and client transparency guide every brick laid.",
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Engr. Ekundayo J.F",
    role: "Managing Director / Lead Structural Engineer & Site Supervisor (ND, HND, B.Eng, M.Eng, Phd in View)",
    bio: "Over 6 years overseeing heavy structural engineering, planning, site logistics, and architectural alignment.",
    photoUrl: "/cleanup.jpg",
  },
  {
    id: "2",
    name: "Arc. Akinniyi Akinyemi",
    role: "Head of Architectural Design",
    bio: "Specializes in urban space planning, energy-efficient building envelopes, and modern residential aesthetics.",
    photoUrl: "/images/team/sarah.jpg",
  },
  {
    id: "3",
    name: "Tpl. Kolawole (F.Nitp)",
    role: "Chief Planning Consultant",
    bio: "Expert in GIS mapping, boundary surveying, and real-time site safety compliance.",
    photoUrl: "/images/team/david.jpg",
  },
];

export const CREDENTIALS: CredentialsData = {
  licenses: [
    "COREN Certified Structural Engineering Firm",
    "NSE Member",
    "Cetificate in Autocad Dafting",
  ],
  awardsAndSafety: [
    "Zero OSHA Safety Violations Across 500k+ Work Hours",
    "Regional Green Building Innovation Recognition",
    "100% On-Time Completion Safety Benchmark",
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "construction-management",
    title: "Construction Management & Supervision",
    description:
      "Organized oversight keeps schedules moving, trades aligned, and site decisions clearly managed.",
    image: "/services/supervision.jpg",
    scope: [
      "Full project timeline coordination",
      "Daily on-site progress oversight",
      "Thorough Supervision",
      "Setting out & CAD mapping",
      "Budget tracking and reporting",
      "Issue resolution before delays",
    ],
  },
  {
    id: "architectural-design",
    title: "Architectural & Spatial Design",
    description:
      "One coordinated team manages planning, approvals, execution, and delivery from beginning onward.",
    image: "/services/Architect.jpg",
    scope: [
      "One team from start to finish",
      "Faster design decision process",
      "Coordinated planning and execution",
      "Reduced communication gaps",
      "Clearer project accountability",
    ],
  },
  {
    id: "land-surveying",
    title: "Land & Site Surveying Services",
    description:
      "Site preparation, equipment access, and controlled logistics prevent project disruption.",
    image: "/surveyor/survey-1.jpg",
    scope: [
      "Topographical & boundary surveys",
      "Equipment delivery coordination",
      "Safe access preparation",
      "Site utility arrangements",
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "1",
    number: "01",
    title: "Filling Station & Retail Complex",
    year: "2025",
    category: "Architecture",
    description:
      "Architectural design and site layout for a modern retail fuel station, featuring a multi-pump canopy design, integrated mini-mart facility, and optimized traffic circulation.",
    imageUrl: "/BovasOye/bovasoye-1.jpg",
    images: [
      "/BovasOye/bovasoye-1.jpg",
      "/BovasOye/bovasoye-2.jpg",
      "/BovasOye/bovasoye-4.jpg",
      "/BovasOye/bovasoye-5.jpg",
      "/BovasOye/bovasoye-6.jpg",
      "/BovasOye/bovasoye-7.jpg",
      "/BovasOye/bovasoye-8.jpg",
    ],
  },
  {
    id: "2",
    number: "02",
    title: "Hotel & Resort",
    year: "2024",
    category: "Architecture",
    description:
      "Architectural layout and exterior spatial design for an expansive single-story resort complex, featuring modern brick-and-slate facade details and integrated parking access.",
    imageUrl: "/IseHotel/isehotel-1.jpg",
    images: [
      "/IseHotel/isehotel-1.jpg",
      "/IseHotel/isehotel-2.jpg",
      "/IseHotel/isehotel-3.jpg",
      "/IseHotel/isehotel-4.jpg",
      "/IseHotel/isehotel-5.jpg",
      "/IseHotel/isehotel-6.jpg",
      "/IseHotel/isehotel-7.jpg",
      "/IseHotel/isehotel-8.jpg",
    ],
  },
  {
    id: "3",
    number: "03",
    title: "Outdoor Lounge & Sports Arena",
    year: "2025",
    category: "Architecture", // Updated from 'Surveying' to reflect the architectural design
    description:
      "End-to-end architectural design and master site planning for a multi-use entertainment arena, featuring an open-air lounge, live performance stage, vendor food stalls, and a enclosed mini football pitch.",
    imageUrl: "/Lounge/lounge-1.jpg",
    images: [
      "/Lounge/lounge-1.bmp",
      "/Lounge/lounge-2.bmp",
      "/Lounge/lounge-3.bmp",
      "/Lounge/lounge-4.bmp",
      "/Lounge/lounge-5.bmp",
      "/Lounge/lounge-6.bmp",
      "/Lounge/lounge-7.bmp",
      "/Lounge/lounge-8.bmp",
      "/Lounge/lounge-9.bmp",
      "/Lounge/lounge-10.bmp",
      "/Lounge/lounge-11.bmp",
    ],
  },
  {
    id: "4",
    number: "04",
    title: "Building Setting Out",
    year: "2025",
    category: "Setting Out",
    description:
      "Comprehensive and precise site setting-out to establish accurate building coordinates and property limits.",
    imageUrl: "/Survey/survey-1.jpg",
    images: [
      "/Survey/survey-1.jpg",
      "/Survey/survey-2.png",
      "/Survey/survey-3.png",
      "/Survey/survey-4.jpg",
      "/Survey/survey-5.png",
      "/Survey/survey-6.jpg",
      "/Survey/survey-7.jpg",
      "/Survey/survey-8.png",
    ],
  },
  {
    id: "5",
    number: "05",
    title: "Topographic & GNSS Land Survey",
    year: "2025",
    category: "Surveying",
    description:
      "Real-time GNSS satellite surveying, terrain elevation mapping, and georeferenced spatial data logging for site acquisition and development.",
    imageUrl: "/surveyor/survey-1.jpg",
    images: [
      "/surveyor/survey-1.jpg",
      "/surveyor/survey-2.jpg",
      "/surveyor/survey-3.jpg",
      "/surveyor/survey-4.jpg",
      "/surveyor/survey-5.jpg",
    ],
  },
  {
    id: "6",
    number: "06",
    title: "Commercial Storage & Office Hub",
    year: "2024",
    category: "Architecture",
    description:
      "Modern three-story multi-use commercial facility featuring secure storage, upper-level office suites, structural glass curtain walls, and dedicated delivery access.",
    imageUrl: "/Warehouse/warehouse-1.jpg",
    images: [
      "/Warehouse/warehouse-1.jpg",
      "/Warehouse/warehouse-2.jpg",
      "/Warehouse/warehouse-3.jpg",
      "/Warehouse/warehouse-4.jpg",
      "/Warehouse/warehouse-5.jpg",
    ],
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "1",
    quote:
      "Quick Delivery and a well done Job. The team was professional, responsive, and ensured the project was completed on time and within budget.",
    role: "Property Owner",
    rating: 4.8,
  },
  {
    id: "2",
    quote:
      "A very good job well done. I'm impressed with the level of detail and professionalism. The team was communicative and ensured that all aspects of the project were handled efficiently.",
    role: "Property Owner",
    rating: 4.8,
  },
  {
    id: "3",
    quote:
      "A very beautiful wel-done Job. I would recommend this team to anyone looking for quality and professionalism.",
    role: "Property Owner",
    rating: 5.0,
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "1",
    question: "What actually causes delays during builds like these?",
    answer:
      "Most delays come from poor coordination, missing materials, unclear approvals, or trades arriving out of sequence.",
  },
  {
    id: "2",
    question: "Do I need full plans before speaking with your team?",
    answer:
      "No, we assist from the initial land survey and concept phase up through complete site supervision.",
  },
  {
    id: "3",
    question:
      "How do you ensure the construction matches the architectural design?",
    answer:
      "Our site supervision team conducts regular inspections, reviewing work against technical drawings and structural calculations at every critical stage.",
  },
  {
    id: "4",
    question:
      "What is the difference between architectural planning and site supervision?",
    answer:
      "Architectural planning focuses on design, spatial layout, and regulatory approvals, while site supervision ensures physical execution, quality control, and safety on-site.",
  },
  {
    id: "5",
    question:
      "How do you manage unexpected budget overruns during construction?",
    answer:
      "We establish detailed Bills of Quantities (BOQ) during planning and maintain strict material tracking and change-order management throughout the build.",
  },
  {
    id: "6",
    question:
      "Who handles local planning permissions and regulatory approvals?",
    answer:
      "We prepare all necessary architectural and structural documentation and navigate the submission process with relevant planning authorities on your behalf.",
  },
  {
    id: "7",
    question:
      "Can I request changes to the architectural design after construction starts?",
    answer:
      "Yes, but mid-construction changes require a formal variation order to assess their impact on structural integrity, overall budget, and project timeline.",
  },
  {
    id: "8",
    question: "How frequently will I receive updates on site progress?",
    answer:
      "We provide scheduled weekly progress reports complete with site photos, upcoming milestones, and immediate quality assurance findings.",
  },
];
