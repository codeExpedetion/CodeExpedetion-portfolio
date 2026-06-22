// Import all required images and icons
import googleLogo from '../../assets/HomePage/google.webp';
import clutchLogo from '../../assets/HomePage/clutch.webp';
import chexpassLogo from '../../assets/HomePage/chexpass.svg';
import foriioLogo from '../../assets/Common/foriio.png';
import upmailLogo from '../../assets/Common/upmail-bg.png';
import xponentialLogo from '../../assets/HomePage/xponential.png';
import newsLiteracyLogo from '../../assets/Common/news-literacy-project.svg';
import aggeroLogo from '../../assets/Common/aggero-bg-rm.png';
import fitForeverLogo from '../../assets/HomePage/fit-forever.png';
import theNowLogo from '../../assets/Common/thenow.png';
import upmailHomeImg from '../../assets/HomePage/upmail-home-img.jpeg';
import xpoStudio from '../../assets/HomePage/xpo-studio.jpeg';
import retailIllustration from '../../assets/HomePage/Industries1.svg';
import healthcareIllustration from '../../assets/HomePage/Industries2.svg';
import saasIllustration from '../../assets/HomePage/Industries3.svg';
import legalIllustration from '../../assets/HomePage/Industries4.svg';
import cursorLogo from '../../assets/HomePage/cursor.webp';
import claudeLogo from '../../assets/HomePage/claude.webp';
import openaiLogo from '../../assets/HomePage/openai.svg';
import ibmLogo from '../../assets/HomePage/ibm.svg';

export const homeSectionData = {
  // Hero Section Data
  hero: {
    headline: {
      line1: "Scale Faster with",
      line2: "Elite Engineering Talent",
    },
    subtext: "We empower visionary companies to streamline their development lifecycle with cutting-edge AI integration, ensuring rapid delivery without compromising on reliability or performance.",
    primaryCTA: {
      text: "Start Your Journey",
      to: "/contact"
    },
    secondaryCTA: {
      // text: "View Success Stories",
      text: "View Use Cases",
      // to: "/success-stories"
      to: "/use-cases"
    },
    socialProof: {
      title: "Trusted by Industry Leaders",
      reviews: [
        {
          platform: "Clutch",
          logo: clutchLogo,
          rating: "4.9/5",
          count: "13 Reviews",
          stars: 5
        },
        {
          platform: "Google",
          logo: googleLogo,
          rating: "4.7/5",
          count: "38 Reviews",
          stars: 5
        }
      ]
    }
  },

  // Trusted Section Data
  trusted: {
    title: "Trusted by Industry Leaders",
    description: "With decades of combined experience, we empower organizations globally to achieve their full potential through cutting-edge technology and strategic innovation. Our results speak for themselves.",
    ctaText: "Why companies choose CodeExpedition",
    // ctaLink: "/success-stories",
    ctaLink: "/use-cases",
    logos: [
      { src: fitForeverLogo, alt: 'Fit Forever' },
      { src: xponentialLogo, alt: 'Xponential' },
      { src: newsLiteracyLogo, alt: 'News Literacy Project' },
      { src: aggeroLogo, alt: 'Aggero' },
      { src: chexpassLogo, alt: 'Chexpass' },
      { src: theNowLogo, alt: 'The NOW' },
      { src: foriioLogo, alt: 'Foriio' },
      { src: upmailLogo, alt: 'Upmail' }
    ]
  },

  // Expertise Section Data
  expertise: {
    title: "Our Expertise",
    description: "We deliver standout digital experiences and transformative solutions that drive business growth through innovation and precision engineering.",

    // AI & Intelligent Automation Block
    aiAutomation: {
      badge: "AI & Intelligent Automation",
      title: "Intelligent Automation",
      description: "Deploy custom AI architectures that streamline complex workflows, empowering your workforce to achieve more while reducing operational overhead by up to 40%.",
      solutions: [
        {
          title: "Enterprise Agents",
          description: "Custom-trained AI agents integrated directly into your enterprise stack for autonomous workflow orchestration.",
          link: "/services/ai",
          linkText: "Explore Agents",
          badge: "Live Beta",
          variant: "gradient"
        },
        {
          title: "Workflow Engineering",
          description: "Eliminate repetitive manual tasks and liberate your team to focus on high-value strategic initiatives.",
          variant: "default"
        },
        {
          title: "LLM Solutions",
          description: "Secure, domain-specific Large Language Models tailored to your unique data compliance and business needs.",
          variant: "default"
        }
      ],
      primaryCTA: {
        text: "Launch Your AI Strategy",
        to: "/services/ai"
      },
      secondaryCTA: {
        text: "Explore Consulting Services",
        to: "/contact"
      }
    },

    // Secondary Services
    services: [
      {
        // title: "Custom Software Engineering",
        title: "Application Development",
        description: "Build scalable, future-proof applications architectures designed for performance and rapid evolution.",
        tags: ["Web", "Mobile Apps", "Enterprise Software"],
        link: "/services/app-dev",
        linkText: "Learn More"
      },
      {
        title: "Cloud Service",
        description: "Enterprise-grade cloud architectures ensuring security, redundancy, and optimal data performance.",
        tags: ["AWS", "Google Cloud", "Microsoft Azure"],
        link: "/services/cloud",
        linkText: "Learn More"
      },
      {
        title: "On-Demand Talent Augmentation",
        description: "Instantly access a curated network of top-tier engineers and architects to accelerate your roadmap.",
        tags: ["AI Engineers", "Developers", "Cloud Architects"],
        link: "/services/talent",
        linkText: "Learn More"
      }
    ],

    footerCTA: {
      text: "Explore All Services",
      to: "/services"
    }
  },

  // Featured Section Data
  featured: {
    title: "Featured Work",
    description: "Discover how we helped businesses achieve their digital transformation goals.",
    successStories: [
      {
        id: 1,
        title: "UpMail: Transforming Hotel Sales Communication Through Personalized Digital Experiences",
        description: "How we helped UpMail enhance the way hotel sales teams engage prospects by building a scalable platform for personalized proposals, branded communications, and sales automation. The solution streamlined workflows, improved sales consistency across global hotel groups, and provided actionable engagement insights that empowered teams to close more deals faster.",
        image: upmailHomeImg,
        imageAlt: "UpMail Platform",
        badges: [
          { text: "CRM", variant: "secondary" },
          { text: "Marketing Automation", variant: "primary" }
        ],
        technologies: ["React.js", "Ruby on Rails", "WebRTC", "Elixir", "PostgreSQL", "Heroku"],
        // link: "/success-stories",
        link: "/use-cases/upmail",
        // linkText: "View Success Story",
        linkText: "View Use Case",
        layout: "text-left"
      },
      {
        id: 2,
        title: "Xponential: Powering Growth Across a Global Fitness Franchise Ecosystem",
        description: "How we helped Xponential streamline operations and enhance digital experiences across its portfolio of leading fitness and wellness brands. By building scalable technology solutions that supported franchise growth, member engagement, and business intelligence, we enabled a more connected ecosystem serving thousands of studios and fitness enthusiasts worldwide.",
        image: xpoStudio,
        imageAlt: "Xponential Fitness Platform",
        badges: [
          { text: "Health & Wellness", variant: "secondary" }
        ],
        technologies: ["React.js", "Ruby on Rails", "Node.js", "AWS", "PostgreSQL"],
        // link: "/success-stories",
        link: "/use-cases/xpo",
        // linkText: "View Success Story",
        linkText: "View Use Case",
        layout: "image-left"
      }
    ],
    // ctaText: "View All Success Stories",
    ctaText: "View All Use Cases",
    // ctaLink: "/success-stories"
    ctaLink: "/use-cases"
  },

  // Feedback Section Data
  feedback: {
    title: "What Our Clients Say",
    description: "Hear from industry leaders who trust us with their digital transformation",
    testimonials: [
      {
        id: 1,
        name: 'Mike Nu***',
        title: 'CEO',
        company: 'Xponential Fitness',
        quote: 'Partnering with Code Expedition allowed us to accelerate our digital fitness initiatives and deliver a world-class streaming experience to our members. Their expertise in building scalable platforms helped us launch live and on-demand workouts while maintaining a seamless user experience across our fitness brands.'
      },
      {
        id: 2,
        name: 'Raymond H',
        title: 'Co-Founder',
        company: 'LegalAtoms',
        quote: 'Code Expedition helped us transform our vision of accessible legal services into a scalable, user-friendly platform. Their team built seamless workflows for case preparation, document generation, and online filing, making it easier for individuals to navigate complex legal processes. They were a trusted technology partner from concept to execution.'
      },
      {
        id: 3,
        name: 'Gara P***',
        title: 'Co-Founder',
        company: 'The Now',
        quote: 'As our business continued to grow, we needed a platform that could scale with us. Code Expedition led the migration from our legacy WordPress application to a modern full-stack solution, significantly improving performance, reliability, and user experience. Their expertise helped us build a stronger digital foundation for the future.'
      },
      {
        id: 4,
        name: 'Antoine As****',
        title: 'CEO',
        company: 'Upmail Solutions',
        quote: 'As our platform continued to grow, we faced scalability challenges and several critical issues that impacted performance. Code Expedition stepped in to stabilize the application, resolve complex bugs, and modernize key parts of our platform. Their work significantly improved reliability, scalability, and the overall user experience, enabling us to better serve our customers.'
      }
    ]
  },

  // Industries Section Data
  industries: {
    title: "Industries We Serve",
    description: "Tailored solutions for diverse industry needs",
    list: [
      {
        id: 1,
        title: 'Retail & E-commerce',
        illustration: retailIllustration,
        description: 'Intelligent digital experiences that boost client loyalty and optimize business workflows.',
        link: '/industries/retail',
        linkText: 'More'
      },
      {
        id: 2,
        title: 'Healthcare',
        illustration: healthcareIllustration,
        description: 'Robust, regulated systems that transform clinical workflows and elevate patient experiences.',
        link: '/industries/healthcare',
        linkText: 'More'
      },
      {
        id: 3,
        title: 'SaaS',
        illustration: saasIllustration,
        description: 'Build scalable, high-performance SaaS platforms with multi-tenant architecture, secure payments, and advanced analytics.',
        link: '/industries/saas',
        linkText: 'More'
      },
      {
        id: 4,
        title: 'Legal',
        illustration: legalIllustration,
        description: 'Advanced data tools for automated discovery, case analysis, and superior client advocacy.',
        link: '/industries/legal',
        linkText: 'More'
      }
    ],
    ctaText: "View All Industries",
    ctaLink: "/industries"
  },

  // Work Section Data
  work: {
    title: "How We Work",
    description: "Our AI-enhanced methodology delivers solutions with greater speed and superior quality compared to conventional development approaches",
    badge: "Vibe Coding + AI Acceleration",

    process: [
      {
        id: 1,
        title: "Discovery & Strategy",
        description: "We start by thoroughly understanding your business objectives:",
        points: [
          "AI-powered requirements analysis",
          "Strategic roadmap development",
          "Optimal technology stack selection"
        ]
      },
      {
        id: 2,
        title: "AI-Powered Development",
        description: "Our team harnesses advanced AI capabilities to build faster and better:",
        points: [
          "Vibe Coding with AI pair programming",
          "Automated testing and optimization",
          "50% faster delivery with AI tools"
        ]
      },
      {
        id: 3,
        title: "Continuous Excellence",
        description: "We ensure ongoing success with AI-powered tools:",
        points: [
          "AI-powered monitoring and analytics",
          "Predictive maintenance and updates",
          "Continuous optimization with AI insights"
        ]
      }
    ],

    vibeCode: {
      badge: "AI-Assisted Development",
      title: "Our Developers Vibe Code",
      description: "Combining elite talent with AI tools for efficient, high-quality delivery",
      subtitle: "Leveraging cutting-edge AI tools at every step",
      tools: [
        { name: "Cursor", logo: cursorLogo, alt: "Cursor AI" },
        { name: "Claude", logo: claudeLogo, alt: "Claude AI" },
        { name: "ChatGPT", logo: openaiLogo, alt: "ChatGPT" },
        { name: "IBM Orchestrate", logo: ibmLogo, alt: "IBM Orchestrate", highlight: true }
      ],
      stats: {
        multiplier: "3x",
        title: "Developer Productivity",
        description: "Our AI-powered development process accelerates delivery while maintaining high quality standards"
      }
    }
  },

  // Track Section Data
  track: {
    title: "Our Track Record",
    description: "Delivering excellence across hundreds of projects",
    stats: [
      {
        id: 1,
        value: "50+",
        title: "Projects Delivered",
        description: "Across various industries"
      },
      {
        id: 2,
        value: "95%",
        title: "Client Satisfaction",
        description: "Based on client feedback"
      },
      {
        id: 3,
        value: "8+",
        title: "Years Experience",
        description: "Of digital excellence"
      }
    ]
  }
};
