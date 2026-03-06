import { ShoppingCart, Stethoscope, GraduationCap, Scale, Building2, Plane, Calendar, Clapperboard, TrendingUp, Truck, Factory, Smartphone, CreditCard, LayoutDashboard, Activity, UserCheck, Shield, Zap, Search, Bot, Users, UserPlus, Wallet, Clock, Target, Cloud, Database, Cpu, Link2, Code2 } from 'lucide-react';

export const allIndustriesHero = {
    heading: "Industries We Serve",
    description: "We deliver tailored software solutions across diverse industries, helping businesses innovate and stay ahead in their respective markets.",
    learnMoreText: "Learn more"
};

export const industriesData = {
    retail: {
        heroHeading: "Our Commerce & Retail Solutions",
        heroDescription: "Empower your retail business with innovative technology solutions designed to enhance customer experiences and drive growth.",
        icon: ShoppingCart,
        cards: [
            {
                icon: ShoppingCart,
                title: "E-Commerce Platforms",
                description: "Build scalable online stores with seamless shopping experiences, secure payment gateways, and real-time inventory tracking for modern retail operations."
            },
            {
                icon: TrendingUp,
                title: "Customer Analytics",
                description: "Leverage data-driven insights to understand customer behavior, optimize pricing strategies, and personalize shopping experiences for increased conversions."
            },
            {
                icon: Smartphone,
                title: "Mobile Commerce",
                description: "Create engaging mobile shopping apps with intuitive interfaces, push notifications, and one-click checkout to capture the growing mobile market."
            },
            {
                icon: Factory,
                title: "Inventory Management",
                description: "Streamline stock control with automated inventory systems, real-time tracking, and predictive analytics to reduce costs and prevent stockouts."
            }
        ]
    },
    healthcare: {
        heroHeading: "Healthcare Solutions",
        heroDescription: "Transform healthcare delivery with secure, compliant technology solutions that improve patient outcomes and operational efficiency.",
        icon: Stethoscope,
        cards: [
            {
                icon: Stethoscope,
                title: "Electronic Health Records",
                description: "Implement comprehensive EHR systems that centralize patient data, ensure HIPAA compliance, and enable seamless information sharing across healthcare providers."
            },
            {
                icon: Smartphone,
                title: "Telemedicine Platforms",
                description: "Build secure video consultation platforms that connect patients with healthcare providers remotely, improving access to care and reducing wait times."
            },
            {
                icon: TrendingUp,
                title: "Patient Management",
                description: "Optimize patient scheduling, appointment reminders, and follow-up care with intelligent management systems that enhance patient satisfaction."
            },
            {
                icon: Factory,
                title: "Medical Billing Systems",
                description: "Automate billing processes, insurance claims, and payment tracking to reduce errors and accelerate revenue cycle management."
            }
        ]
    },
    education: {
        // heroHeading: "Our Educational Solutions",
        heroHeading: "Our IT Solutions",
        // heroDescription: "Revolutionize learning experiences with innovative educational technology that engages students and empowers educators.",
        heroDescription: "We design and deliver innovative technology solutions that help businesses streamline operations, improve performance, and scale with confidence. From custom software development to intelligent digital products, we turn ideas into powerful digital experiences.",
        // icon: GraduationCap,
        icon: LayoutDashboard,
        cards: [
            {
                icon: LayoutDashboard,
                // title: "Custom Software Development",
                title: "Custom Software Development",
                // description: "Build scalable, high-performance web and mobile applications tailored to your unique business requirements."
                description: "We build secure, scalable, and high-performance software tailored to your business needs. From web and mobile applications to enterprise systems, our solutions are designed to solve real problems and drive measurable growth."
            },
            {
                icon: Zap,
                // title: "Digital Transformation",
                title: "Digital Product Development",
                // description: "Modernize your operations with cloud-native architectures, legacy system updates, and digital-first strategies."
                description: "Transform your business ideas into market-ready digital products. We handle everything from concept validation and UI/UX design to development, testing, and deployment ensuring your product is built for success."
            },
            {
                icon: Activity,
                // title: "Business Data Analytics",
                title: "Cloud & DevOps Solutions",
                // description: "Unlock actionable insights from your data with advanced reporting, predictive modeling, and intelligent dashboards."
                description: "Optimize your infrastructure with modern cloud architecture and DevOps practices. We help businesses migrate, automate, and scale efficiently while improving system reliability and security."
            },
            {
                icon: Shield,
                // title: "Strategic IT Consulting",
                title: "Data Analytics & Business Intelligence",
                // description: "Align your technology roadmap with your business goals through expert strategy, architecture, and technology assessments."
                description: "Protect your digital assets with advanced security strategies. We implement proactive security measures, risk assessments, and monitoring systems to safeguard your business from evolving cyber threats."
            }
        ]
    },
    legal: {
        heroHeading: "Our Legal Technology Solutions",
        heroDescription: "Modernize legal practices with advanced technology solutions that streamline workflows and enhance client service delivery.",
        icon: Scale,
        cards: [
            {
                icon: Scale,
                title: "Case Management Systems",
                description: "Organize and track legal cases efficiently with comprehensive systems that manage documents, deadlines, and client communications seamlessly."
            },
            {
                icon: Factory,
                title: "Document Automation",
                description: "Automate legal document creation, review, and approval processes to reduce manual work and minimize errors in legal documentation."
            },
            {
                icon: TrendingUp,
                title: "Legal Research Tools",
                description: "Access powerful research platforms with AI-powered search capabilities to find relevant case law and legal precedents quickly."
            },
            {
                icon: Smartphone,
                title: "Client Portal Solutions",
                description: "Provide clients with secure access to case information, documents, and communication channels for improved transparency and satisfaction."
            }
        ]
    },
    finance: {
        heroHeading: "Fintech Solutions",
        heroDescription: "Accelerate financial innovation with secure, scalable, and AI-driven fintech solutions. From digital banking and payment processing to fraud prevention and blockchain integration, we empower fintech startups and enterprises to stay ahead. Our solutions help financial services companies navigate evolving technologies, shifting customer expectations, and complex regulatory landscapes.",
        icon: TrendingUp,
        cards: [
            {
                icon: TrendingUp,
                title: "Digital Banking & Payments",
                description: "Develop secure, feature-rich banking apps, mobile wallets, and seamless payment gateways."
            },
            {
                icon: Smartphone,
                title: "Insurance Management",
                description: "Build comprehensive insurance platforms for policy management, claims processing, and customer service automation."
            },
            {
                icon: Zap,
                title: "Open Banking & API Integrations",
                description: "Enable seamless financial data sharing and connectivity with secure open banking APIs."
            },
            {
                icon: Shield,
                title: "AI-Powered Risk & Fraud Detection",
                description: "Leverage AI and machine learning to detect fraud, assess risks, and enhance financial security."
            }
        ]
    },
    /*
    realEstate: {
        heroHeading: "Our Real Estate Solutions",
        heroDescription: "Transform property management and real estate operations with cutting-edge digital solutions that enhance efficiency and client satisfaction.",
        icon: Building2,
        cards: [
            {
                icon: Building2,
                title: "Property Management Systems",
                description: "Streamline property listings, tenant management, and maintenance tracking with comprehensive real estate management platforms."
            },
            {
                icon: Smartphone,
                title: "Virtual Property Tours",
                description: "Create immersive 3D virtual tours and augmented reality experiences that showcase properties to potential buyers remotely."
            },
            {
                icon: TrendingUp,
                title: "Market Analytics",
                description: "Access real-time market data, property valuations, and investment insights to make informed real estate decisions."
            },
            {
                icon: Factory,
                title: "Transaction Management",
                description: "Automate contract management, document signing, and closing processes for faster, more efficient real estate transactions."
            }
        ]
    },
    */
    hospitality: {
        // heroHeading: "Our Hospitality Solutions",
        heroHeading: "Engineering Scalable Digital Solutions",
        // heroDescription: "Elevate guest experiences and optimize operations with innovative hospitality technology that drives satisfaction and revenue growth.",
        heroDescription: "We design and develop enterprise-grade software systems that help businesses innovate, automate operations, and scale with confidence.",
        // icon: Plane,
        icon: Cpu,
        cards: [
            {
                icon: Code2,
                // title: "Booking & Reservation Systems",
                title: "Custom Software Development",
                // description: "Build seamless booking platforms with real-time availability, dynamic pricing, and integrated payment processing for hotels and travel."
                description: "End-to-end development of scalable web, mobile, and enterprise applications tailored to your business requirements."
            },
            {
                icon: Bot,
                // title: "Guest Experience Apps",
                title: "AI & Data Solutions",
                // description: "Create mobile apps for contactless check-in, room service, concierge services, and personalized guest experiences."
                description: "Intelligent systems powered by machine learning, predictive analytics, and data-driven automation."
            },
            {
                icon: Cloud,
                // title: "Revenue Management",
                title: "Cloud & DevOps Engineering",
                // description: "Optimize pricing strategies and maximize revenue with AI-powered analytics and demand forecasting tools."
                description: "Cloud-native architectures, CI/CD pipelines, containerization, and infrastructure automation for high-performance systems."
            },
            {
                icon: Link2,
                // title: "Operations Management",
                title: "Enterprise System Integration",
                // description: "Streamline housekeeping, maintenance, and staff coordination with integrated management systems for efficient operations."
                description: "API integrations, CRM/ERP connectivity, payment systems, and third-party platform synchronization."
            }
        ]
    },
    /*
    events: {
        heroHeading: "Our Event Management Solutions",
        heroDescription: "Streamline event planning and execution with comprehensive platforms that deliver seamless experiences for organizers and attendees.",
        icon: Calendar,
        cards: [
            {
                icon: Calendar,
                title: "Event Planning Tools",
                description: "Organize events efficiently with comprehensive planning tools for scheduling, vendor management, and timeline coordination."
            },
            {
                icon: Smartphone,
                title: "Ticketing & Registration",
                description: "Create seamless ticketing systems with online registration, payment processing, and attendee management capabilities."
            },
            {
                icon: TrendingUp,
                title: "Event Analytics",
                description: "Track attendance, engagement metrics, and ROI with detailed analytics to measure event success and improve future planning."
            },
            {
                icon: Factory,
                title: "Virtual Event Platforms",
                description: "Build hybrid and virtual event solutions with live streaming, interactive sessions, and networking features for global reach."
            }
        ]
    },
    media: {
        heroHeading: "Our Media Solutions",
        heroDescription: "Create engaging digital experiences that captivate audiences and maximize content value through innovative media platforms.",
        icon: Clapperboard,
        cards: [
            {
                icon: Clapperboard,
                title: "Content Management Systems",
                description: "Manage and distribute digital content efficiently with scalable CMS platforms for media publishing and streaming services."
            },
            {
                icon: Smartphone,
                title: "Streaming Platforms",
                description: "Build high-performance video and audio streaming platforms with adaptive bitrate, DRM, and multi-device support."
            },
            {
                icon: TrendingUp,
                title: "Audience Analytics",
                description: "Understand viewer behavior and preferences with advanced analytics to optimize content strategy and engagement."
            },
            {
                icon: Factory,
                title: "Content Monetization",
                description: "Implement subscription models, pay-per-view, and advertising solutions to maximize revenue from digital content."
            }
        ]
    },
    logistics: {
        heroHeading: "Our Logistics Solutions",
        heroDescription: "Optimize supply chain operations with intelligent systems that enhance visibility, reduce costs, and improve delivery performance.",
        icon: Truck,
        cards: [
            {
                icon: Truck,
                title: "Fleet Management",
                description: "Track vehicles, optimize routes, and manage driver performance with comprehensive fleet management solutions."
            },
            {
                icon: Factory,
                title: "Warehouse Management",
                description: "Streamline inventory storage, picking, packing, and shipping operations with intelligent warehouse management systems."
            },
            {
                icon: TrendingUp,
                title: "Supply Chain Analytics",
                description: "Gain visibility into supply chain operations with real-time tracking, predictive analytics, and performance monitoring."
            },
            {
                icon: Smartphone,
                title: "Last-Mile Delivery",
                description: "Optimize final delivery with route planning, real-time tracking, and customer communication for superior service."
            }
        ]
    },
    manufacturing: {
        heroHeading: "Our Manufacturing Solutions",
        heroDescription: "Drive operational excellence with smart manufacturing solutions that increase productivity, quality, and competitiveness.",
        icon: Factory,
        cards: [
            {
                icon: Factory,
                title: "Production Planning",
                description: "Optimize manufacturing schedules, resource allocation, and workflow management with intelligent production planning systems."
            },
            {
                icon: TrendingUp,
                title: "Quality Control Systems",
                description: "Ensure product quality with automated inspection, defect tracking, and compliance management solutions."
            },
            {
                icon: Smartphone,
                title: "IoT & Smart Manufacturing",
                description: "Connect machines and equipment with IoT sensors for real-time monitoring, predictive maintenance, and operational insights."
            },
            {
                icon: Scale,
                title: "ERP Integration",
                description: "Unify manufacturing operations with comprehensive ERP systems that integrate production, inventory, and financial management."
            }
        ]
    },
    telecom: {
        heroHeading: "Our Telecommunications Solutions",
        heroDescription: "Enable next-generation connectivity with innovative telecom solutions that enhance network performance and customer satisfaction.",
        icon: Smartphone,
        cards: [
            {
                icon: Smartphone,
                title: "Network Management",
                description: "Monitor and optimize network performance with advanced management systems for reliable telecommunications infrastructure."
            },
            {
                icon: TrendingUp,
                title: "Customer Service Platforms",
                description: "Enhance customer support with omnichannel platforms, self-service portals, and AI-powered chatbots for telecom services."
            },
            {
                icon: Factory,
                title: "Billing & Subscription",
                description: "Automate billing, subscription management, and revenue assurance with flexible telecom billing solutions."
            },
            {
                icon: Scale,
                title: "5G & IoT Solutions",
                description: "Build next-generation applications leveraging 5G networks and IoT connectivity for innovative telecom services."
            }
        ]
    },
    */
    saas: {
        heroHeading: "Our SaaS Software Development Solutions",
        heroDescription: "Build scalable, high-performance SaaS platforms that deliver exceptional value to your users and drive sustainable business growth.",
        icon: LayoutDashboard,
        cards: [
            {
                icon: UserCheck,
                title: "Secure User Authentication",
                description: "Protect your platform with advanced authentication systems and role-based access control. Our solutions ensure users only access what’s relevant, keeping your SaaS application secure and compliant."
            },
            {
                icon: LayoutDashboard,
                title: "Custom Dashboards",
                description: "Enable smarter decision-making with interactive dashboards. We provide real-time statistics, visualizations, and insights that help you and your clients monitor performance and drive business growth."
            },
            {
                icon: CreditCard,
                title: "Payment Management",
                description: "Streamline revenue collection with automated subscription models, recurring billing, and invoicing. We integrate seamless payment gateways such as Stripe, along with custom solutions, for reliable and hassle-free transactions."
            },
            {
                icon: Building2,
                title: "Multi-Tenant Architecture",
                description: "Build scalable SaaS platforms that serve multiple clients simultaneously. Our multi-tenant architecture ensures secure, isolated environments while maintaining flexibility and efficiency across tenants."
            },
            {
                icon: Zap,
                title: "Integrations",
                description: "Enhance functionality by connecting your SaaS platform with cloud services, CRMs, ERPs, and other business tools. Our integrations optimize workflows, streamline operations, and improve overall system efficiency."
            },
            {
                icon: Shield,
                title: "Data Security",
                description: "Keep your data protected with industry-standard encryption, secure APIs, and compliance with data regulations. Our security-focused approach safeguards sensitive information while maintaining system integrity."
            },
            {
                icon: TrendingUp,
                title: "Performance Enhancements",
                description: "Future-proof your SaaS application with optimized architecture. We implement load balancing, auto-scaling, and other performance strategies to ensure high availability, speed, and scalability."
            },
            {
                icon: Activity,
                title: "Analytics & Reporting",
                description: "Transform data into actionable insights with advanced analytics. Our solutions provide real-time tracking, revenue analysis, churn monitoring, and customizable reports to drive informed business decisions."
            },
            {
                icon: Search,
                title: "Audit Logs & Activity Tracking",
                description: "Maintain accountability and transparency with detailed audit logs. Track user actions, system changes, and security events to support compliance and provide operational visibility."
            },
            {
                icon: Bot,
                title: "AI & Automation Capabilities",
                description: "Integrate intelligent features such as predictive analytics, smart recommendations, and automated workflows. Our AI-powered tools enhance functionality, optimize processes, and give your SaaS platform a competitive edge."
            }
        ]
    },
    hrms: {
        heroHeading: "Our HR Software Development Solutions",
        heroDescription: "Build smart, scalable HR platforms that streamline workforce management, enhance employee engagement, and drive organizational growth.",
        icon: Users,
        cards: [
            {
                icon: Users,
                title: "Core HR & Employee Management",
                description: "Maintain a centralized employee database with complete employee profiles, job history, attendance records, and compensation details."
            },
            {
                icon: UserPlus,
                title: "Employee Onboarding & Offboarding",
                description: "Streamline hiring with digital documents, automated checklists, and clearance workflows for compliance."
            },
            {
                icon: Wallet,
                title: "Payroll & Compensation Management",
                description: "Automate payroll calculations, tax deductions, reimbursements, and benefits while minimizing errors."
            },
            {
                icon: Clock,
                title: "Attendance & Leave Management",
                description: "Digital or biometric connections to track working hours, shifts, and online leave requests with accuracy."
            },
            {
                icon: Target,
                title: "Performance Management",
                description: "Set goals, conduct reviews, and manage appraisals effectively with KPI tracking and development plans."
            },
            {
                icon: GraduationCap,
                title: "Training & Development",
                description: "Integrate learning modules to track training, certifications, and skill development with personalized paths."
            },
            {
                icon: Shield,
                title: "Compliance & Document Management",
                description: "Safely keep document pertaining to compliance, contracts, and regulations with automated reminders."
            }
        ]
    }
};


export const industries = [
    {
        id: 1,
        title: "Commerce & Retail",
        icon: industriesData.retail.icon,
        href: "/industries/retail",
        description: "Transform your retail business with cutting-edge e-commerce solutions, inventory management systems, and customer experience platforms."
    },
    {
        id: 2,
        title: "Healthcare",
        icon: industriesData.healthcare.icon,
        href: "/industries/healthcare",
        description: "Develop secure, compliant healthcare solutions that improve patient care, streamline operations, and enhance medical service delivery."
    },
    {
        id: 3,
        // title: "EdTech",
        title: "IT Solutions",
        icon: industriesData.education.icon,
        href: "/industries/education",
        // description: "Create engaging learning platforms and educational management systems that revolutionize the way knowledge is delivered and managed."
        description: "Transform education with digital learning platforms and innovative educational technology that empowers students and educators."
    },
    {
        id: 4,
        title: "LegalTech",
        icon: industriesData.legal.icon,
        href: "/industries/legal",
        description: "Streamline legal processes with advanced case management systems and document automation solutions."
    },
    {
        id: 5,
        title: "Fintech Solutions",
        icon: industriesData.finance.icon,
        href: "/industries/finance",
        description: "Accelerate financial innovation with secure, scalable, and AI-driven fintech solutions that empower startups and enterprises to stay ahead."
    },
    // {
    //     id: 6,
    //     title: "Real Estate",
    //     icon: industriesData.realEstate.icon,
    //     href: "/industries/real-estate",
    //     description: "Modernize property management and real estate operations with innovative digital solutions."
    // },
    {
        id: 7,
        // title: "Hospitality & Travel",
        title: "Digital Engineering",
        icon: industriesData.hospitality.icon,
        href: "/industries/hospitality",
        // description: "Enhance guest experiences and streamline operations with innovative hospitality management solutions."
        description: "Design and develop enterprise-grade software systems that help businesses innovate, automate, and scale with confidence."
    },
    {
        id: 8,
        title: "SaaS",
        icon: industriesData.saas.icon,
        href: "/industries/saas",
        description: "Build scalable, high-performance SaaS platforms with multi-tenant architecture, secure payments, and advanced analytics."
    },
    {
        id: 9,
        title: "HRMS",
        icon: industriesData.hrms.icon,
        href: "/industries/hrms",
        description: "Develop smart, scalable HR platforms that streamline workforce management and enhance employee engagement."
    },
    // {
    //     id: 8,
    //     title: "Event Management",
    //     icon: industriesData.events.icon,
    //     href: "/industries/events",
    //     description: "Simplify event planning and execution with comprehensive event management platforms."
    // },
    // {
    //     id: 9,
    //     title: "Entertainment & Media",
    //     icon: industriesData.media.icon,
    //     href: "/industries/media",
    //     description: "Build engaging platforms that connect audiences with content through innovative media solutions."
    // },
    // {
    //     id: 10,
    //     title: "Logistics & Supply Chain",
    //     icon: industriesData.logistics.icon,
    //     href: "/industries/logistics",
    //     description: "Optimize the movement and delivery of goods with advanced transportation management systems."
    // },
    // {
    //     id: 11,
    //     title: "Manufacturing",
    //     icon: industriesData.manufacturing.icon,
    //     href: "/industries/manufacturing",
    //     description: "Improve efficiency with ERP systems and production management solutions for modern manufacturing."
    // },
    // {
    //     id: 12,
    //     title: "Telecommunications",
    //     icon: industriesData.telecom.icon,
    //     href: "/industries/telecom",
    //     description: "Create solutions that enhance connectivity and communication for telecom service providers."
    // },
];
