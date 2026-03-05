// Import all success story images - proper React imports for Vite bundling
import uptokImage from '../../assets/SuccessStories/uptok.webp';
import fourCornersImage from '../../assets/Common/4-corners.webp';
import diagnossImage from '../../assets/Common/diagnoss.svg';
import cyberdiveImage from '../../assets/SuccessStories/cyberdive.svg';
import operatorCabaImage from '../../assets/SuccessStories/operator-caba.svg';
import helmerCaseImage from '../../assets/SuccessStories/helmer-case.webp';
import pbsImage from '../../assets/SuccessStories/pbs.webp';
import kenmoreImage from '../../assets/SuccessStories/kenmore.svg';
import jennairImage from '../../assets/Common/jennair.svg';
import mediskedImage from '../../assets/SuccessStories/medisked.webp';
import rcbsImage from '../../assets/SuccessStories/rcbs.svg';
import halyardImage from '../../assets/Common/halyard.svg';
import craftsmanImage from '../../assets/Common/craftsman.svg';
import kitchenaidImage from '../../assets/Common/kitchenaid.svg';
import meltzerHellrungImage from '../../assets/SuccessStories/meltzer-hellrung.webp';
import collegeAdmissionImage from '../../assets/Common/college-admission.png';
import realreppImage from '../../assets/SuccessStories/realrepp.webp';
import newsLiteracyImage from '../../assets/Common/news-literacy-project.svg';
import pathForwardImage from '../../assets/Common/path-forward-formulator.svg';
import financial4SquareImage from '../../assets/SuccessStories/financial-4-square.svg';
import trackingUnlimitedImage from '../../assets/SuccessStories/tracking-unlimited.svg';
import erpBuddyImage from '../../assets/SuccessStories/erpbuddy.webp';

// All 23 use cases data
export const successStoriesHero = {
  // title: "Success Stories",
  title: "Use Cases",
  // searchPlaceholder: "Search success stories by title, technology, or industry..."
  searchPlaceholder: "Search use cases by title, technology, or industry..."
};

export const successStoriesContent = {
  // noResultsMessage: "No success stories found matching your criteria.",
  noResultsMessage: "No use cases found matching your criteria.",
  keyResultsLabel: "Key Results:"
};

export const successStories = [
  {
    id: 1,
    title: "Upmail: Customer Engagement Platform for Hotel Sales Teams with Integrated Booking Systems",
    description: "Upmail enables hotel sales teams to send branded emails, personalized contracts, and event booking details by integrating with Opera, Meeting Broker, Amadeus, and Salesforce for seamless proposals.",
    image: null,
    industry: "SaaS",
    keyResults: [
      "Streamlined hotel sales communication with branded email templates and personalized proposal generation.",
      "Integrated real-time booking data from Opera, Amadeus, and Salesforce directly into client proposals.",
      "Accelerated response times and improved conversion rates by automating proposal and contract workflows.",
    ],
    technologies: ["Ruby on Rails", "Python", "Elixir", "VueJs", "Heroku", "Sentry"],
    slug: "upmail"
  },
  {
    id: 2,
    title: "FitForever: Personalized Assessment-Based Digital Fitness Platform with Trainer-Led Programs",
    description: "FitForever delivers customized video-based training programs developed with top medical and biomechanics experts, enabling trainers to sell programs and users to track progress via the FIT Score.",
    image: null,
    industry: "Fitness",
    keyResults: [
      "Delivered personalized assessment-based training programs optimized for individual fitness goals and needs.",
      "Enabled trainers to create, manage, and sell programs directly through the platform for revenue growth.",
      "Built a mobile app with proprietary FIT Score tracking and integrated referral system for user growth.",
    ],
    technologies: ["Ruby on Rails", "Python", "VueJs", "Flutter", "AWS", "Datadog", "Rollbar"],
    slug: "fitforever"
  },
  {
    id: 3,
    title: "Xponential Fitness: Multi-Brand Boutique Fitness Franchise Platform with Modular Architecture",
    description: "We built a scalable, configurable platform for Xponential Fitness to manage multiple boutique fitness brands across thousands of franchise locations with centralized operations and brand-specific customizations.",
    image: null,
    industry: "Fitness",
    keyResults: [
      "Designed modular multi-brand architecture with shared core services and brand-specific feature configurations.",
      "Unified reporting, analytics, and membership management across all franchise brands and studio locations.",
      "Enhanced franchisee dashboards with real-time performance tracking and streamlined operational workflows.",
    ],
    technologies: ["Rails", "React", "React Native", "Heroku"],
    slug: "xpo"
  },
  {
    id: 4,
    title: "The NOW Massage: Modern Wellness Platform Migration from WordPress to Scalable Custom Architecture",
    description: "We migrated The NOW Massage from a legacy WordPress system to a modern custom-built architecture, improving performance and scalability while building a unified franchise management dashboard.",
    image: null,
    industry: "Wellness",
    keyResults: [
      "Migrated from WordPress to a custom-built architecture, eliminating performance bottlenecks and lag issues.",
      "Built a centralized admin dashboard for managing bookings, staff, and operations across franchise locations.",
      "Implemented enterprise-level scalability with load balancing, caching, and optimized backend processing.",
    ],
    technologies: ["Ruby on Rails", "React", "React Native", "Heroku"],
    slug: "now-massage"
  },
  {
    id: 5,
    title: "Aggero: AI-Powered Video Intelligence Platform for Data-Driven Creative Optimization",
    description: "Aggero's AI analyzes every frame, hook, and audience reaction across TikTok, YouTube, and Instagram to predict video performance and generate actionable creative briefs for marketers.",
    image: null,
    industry: "MarTech",
    keyResults: [
      "Built AI engine that analyzes video elements to identify engagement drivers and performance drainers.",
      "Enabled content performance prediction before publishing, reducing testing cycles from weeks to hours.",
      "Automated creative brief generation with audience intelligence for data-backed campaign strategies.",
    ],
    technologies: ["Ruby on Rails", "NodeJs", "ReactJS", "Heroku"],
    slug: "aggero"
  },
  {
    id: 6,
    title: "Forio: Interactive Simulation Platform for Business Strategy and Decision-Making Training",
    description: "Forio provides an interactive simulation platform that enables organizations to model complex business scenarios, train teams through experiential learning, and make data-driven strategic decisions.",
    image: null,
    industry: "EdTech",
    keyResults: [
      "Built an interactive simulation engine for modeling complex business scenarios and strategic decision-making.",
      "Enabled experiential learning programs used by leading universities and Fortune 500 companies worldwide.",
      "Developed real-time analytics dashboards to track participant performance and learning outcome metrics.",
    ],
    technologies: ["Ruby on Rails", "Python", "React", "D3.js", "AWS", "PostgreSQL"],
    slug: "forio"
  }
];

/* ========================================
   ARCHIVED USE CASE CARDS (commented out)
   ======================================== */
/*
const archivedSuccessStories = [
  {
    id: 1,
    title: "Uptok: Revolutionizing Digital Customer Engagement Through High-Performance Integrated Video Commerce Platforms",
    description: "We partnered with Uptok to integrate advanced video commerce for luxury fashion retail, leading to a twenty percent increase in purchase values by providing personalized guidance for all digital customers daily.",
    image: uptokImage,
    industry: "E-Commerce",
    keyResults: [
      "Achieved thirty percent higher conversion rates by re-humanizing the entire digital shopping experience for all.",
      "Observed twenty percent increase in average order values through curated consultations and professional care.",
      "Increased satisfaction scores by connecting shoppers with experts for personalized and professional support.",
    ],
    technologies: ["React.js", "Node.js", "WebRTC", "Socket.io", "Redux", "AWS Cloud", "TailwindCSS", "PostgreSQL"]
  },
  {
    id: 2,
    title: "SuiteBuddy: Conversational AI for Smarter CRM Sales and Automated Lead Management Within Global Ecosystems",
    description: "Build a seamless mobile experience with conversational AI to update leads in NetSuite, enabling sales teams to manage CRM tasks through chat interactions which increased accuracy by over forty percent now.",
    image: erpBuddyImage,
    industry: "Mobile & AI",
    keyResults: [
      "Streamlined CRM management with automated entry workflows allowing sales teams to update voice records fast.",
      "Enabled natural language interactions via sophisticated NLP models that understand complex sales contexts.",
      "Delivered a robust cross-platform mobile application that integrates directly with complex ERP systems today.",
    ],
    technologies: ["React Native", "Dialogflow", "NLP", "NetSuite", "Node.js", "Postgres", "Express", "Redis"]
  },
  {
    id: 3,
    title: "4Corners: AI-Powered Legal Deposition Summaries and Automated Document Analysis for Modern Law Professionals",
    description: "Transforming the legal industry with an AI-powered Deposition Summarizer that automates the process without compromising on accuracy by leveraging models to extract facts from thousands of legal pages fast.",
    image: fourCornersImage,
    industry: "Legal Tech",
    keyResults: [
      "Reduced turnaround time from several days to hours for legal summaries by automating the extraction phase.",
      "Significantly improved quality and consistency of legal documents using standardized AI-driven check tools.",
      "Enhanced scalability for handling larger volumes of cases without requiring additional paralegal staffers.",
    ],
    technologies: ["Python", "OpenAI", "NLP", "PDF Libs", "AWS Lambda", "Next.js", "FastAPI", "Postgres"]
  },
  {
    id: 4,
    title: "Diagnoss: AI-Powered Plugin for Medical Coding Accuracy and Seamless EHR Integration for Healthcare Providers",
    description: "Empower healthcare practitioners with an innovative AI-powered Chrome extension to fill in ICD and CPT codes within EHR systems, reducing errors by sixty percent and ensuring providers are reimbursed fast.",
    image: diagnossImage,
    industry: "Health Tech",
    keyResults: [
      "Increased coding efficiency for healthcare practitioners by providing real-time suggestions based on data.",
      "Improved clinical accuracy with AI-driven suggestion engines that scan for potential missing record files.",
      "Seamless EHR integration for a frictionless medical workflow that sits right on top of exist software today.",
    ],
    technologies: ["Chrome Ext.", "Python", "ML Models", "AthenaHealth", "SAML SSO", "React", "Flask", "Docker"]
  },
  {
    id: 5,
    title: "Cyberdive: Advanced Child Safety Monitoring Applications and Real-Time Mental Health Support for Families",
    description: "How we helped Cyber Dive create sophisticated monitoring apps that empower parents to monitor online interactions while providing mental health support through a smartphone experience that fosters better care.",
    image: cyberdiveImage,
    industry: "Child Safety",
    keyResults: [
      "Enhanced parental visibility into digital activities without invading privacy using real-time alerts today.",
      "Improved mental health support via integrated check-in systems that encourage children to express feelings.",
      "Increased user engagement and safety across the Aqua One platform by using sophisticated detection tools.",
    ],
    technologies: ["React Native", "Firebase", "WebSockets", "AI/ML", "Node.js", "AWS S3", "Analytics", "Lottie"]
  },
  {
    id: 6,
    title: "CABA Design: Client Meeting Optimization and Integrated CRM Solutions for Architecture and Interior Designers",
    image: operatorCabaImage,
    industry: "Design Tech",
  },
  { id: 7, title: "Uptok Video (duplicate 1)", image: uptokImage, industry: "E-Commerce" },
  { id: 8, title: "Uptok Video (duplicate 2)", image: uptokImage, industry: "E-Commerce" },
  { id: 9, title: "Helmer Legal", image: helmerCaseImage, industry: "Legal Tech" },
  { id: 10, title: "Multi-Brand E-Commerce", image: pbsImage, industry: "E-Commerce" },
  { id: 11, title: "Kenmore", image: kenmoreImage, industry: "E-Commerce" },
  { id: 12, title: "JennAir", image: jennairImage, industry: "Luxury Tech" },
  { id: 13, title: "Medisked", image: mediskedImage, industry: "Health Tech" },
  { id: 14, title: "RCBS MatchMaster", image: rcbsImage, industry: "Precision Tech" },
  { id: 15, title: "Halyard Health", image: halyardImage, industry: "Medical Systems" },
  { id: 16, title: "Craftsman", image: craftsmanImage, industry: "Industrial Tech" },
  { id: 17, title: "KitchenAid", image: kitchenaidImage, industry: "Luxury Retail" },
  { id: 18, title: "Meltzer Hellrung", image: meltzerHellrungImage, industry: "Legal Tech" },
  { id: 19, title: "College Advisor", image: collegeAdmissionImage, industry: "EdTech" },
  { id: 20, title: "RealRepp", image: realreppImage, industry: "HR Tech" },
  { id: 21, title: "NLP", image: newsLiteracyImage, industry: "Nonprofit Tech" },
  { id: 22, title: "PathForward", image: pathForwardImage, industry: "Healthcare" },
  { id: 23, title: "Financial Foursquare", image: financial4SquareImage, industry: "FinTech" },
  { id: 24, title: "Print Refinery", image: trackingUnlimitedImage, industry: "Print Tech" },
];
*/


