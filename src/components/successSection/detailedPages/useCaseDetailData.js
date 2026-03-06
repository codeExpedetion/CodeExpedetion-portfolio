export const useCaseDetailData = {
    upmail: {
        name: "Upmail",
        platform: "Web",
        industry: "SaaS",
        technologies: ["Ruby on Rails", "Python", "Elixir", "VueJs", "Heroku", "Sentry"],
        overview: "Upmail Solutions is a customer engagement platform designed specifically for hotel sales teams. It enables teams to effortlessly connect with clients by sending visually appealing emails, personalized contracts, and detailed event booking information. By centralizing communication and integrating key booking systems, Upmail simplifies the sales workflow and ensures that clients receive accurate, timely, and professional proposals. The platform integrates with major hotel booking and management systems, including Opera, Meeting Broker, Amadeus, and Salesforce, allowing sales teams to embed real-time booking details directly into their emails. This integration reduces manual effort, minimizes errors, and streamlines client communication, making it easier to close deals and enhance customer satisfaction.",
        solution: [
            {
                title: "Seamless Email & Proposal Management",
                description: "Upmail allows hotel sales teams to create and send professional, branded emails and proposals in minutes. Personalized contracts, pricing details, and event information can be easily included, improving client experience and engagement."
            },
            {
                title: "Integrated Booking Systems",
                description: "Upmail connects directly with leading hotel management systems such as Opera, Meeting Broker, Amadeus, and Salesforce. Sales teams can pull real-time booking and availability data and embed it directly into emails, ensuring proposals are accurate and up-to-date."
            },
            {
                title: "Enhanced Client Engagement",
                description: "By centralizing communication and automating proposal generation, Upmail ensures clients receive relevant, personalized information quickly. The platform reduces manual workload, accelerates response times, and improves conversion rates for hotel sales teams."
            },
            {
                title: "Streamlined Workflow & Efficiency",
                description: "Automation and integration eliminate repetitive tasks, enabling sales teams to focus on relationship-building and revenue generation. Upmail transforms complex booking data into actionable, client-ready proposals, helping teams work smarter and more efficiently."
            }
        ],
        keyFeatures: [
            "Customizable Email & Proposal Templates",
            "Built-in E-Signature Tools",
            "Centralized Content Library",
            "Advanced Engagement Tracking & Analytics",
            "Multi-Property & Brand Management",
            "Seamless Integrations",
            "Outlook & Gmail Add-ons"
        ]
    },

    fitforever: {
        name: "FitForever",
        platform: "Web & Mobile",
        industry: "Fitness",
        technologies: ["Ruby on Rails", "Python", "VueJs", "Flutter", "AWS", "Datadog", "Rollbar"],
        overview: "FitForever is a digital fitness platform designed to provide personalized, assessment-based training programs for users of all fitness levels. Developed with input from top U.S. medical and biomechanics experts, the platform enables trainers to deliver specialized workouts, sell training programs, and engage clients effectively. The platform includes a mobile application that allows users to access customized video-based training plans, track progress using proprietary metrics like the FIT Score, and participate in referral programs. It also integrates specialized apps, such as GolfForever, to cater to niche sports and wellness programs.",
        solution: [
            {
                title: "Personalized, Assessment-Based Training Programs",
                description: "FitForever offers customized fitness plans based on user assessments, ensuring exercises target individual strengths, weaknesses, and goals. This approach optimizes performance, mobility, and long-term health."
            },
            {
                title: "Trainer-Led Program Sales & Management",
                description: "Trainers can create, manage, and sell their programs directly through the platform, enabling seamless client engagement and revenue generation."
            },
            {
                title: "Mobile App Access & Engagement",
                description: "Users can access workouts, track metrics, and follow routines on-the-go via the mobile app. Notifications, progress tracking, and reminders ensure consistent engagement and adherence."
            },
            {
                title: "Specialized Niche Programs",
                description: "Through apps like GolfForever, FitForever provides sport-specific training modules, enabling users to improve skills in golf and other focused disciplines."
            },
            {
                title: "Performance Tracking & Analytics",
                description: "Proprietary metrics and progress dashboards allow both trainers and users to monitor performance, adjust programs, and stay motivated throughout their fitness journey."
            },
            {
                title: "Integrated Referral System",
                description: "The platform includes referral features that incentivize user growth, helping trainers expand their client base organically."
            }
        ],
        keyFeatures: [
            "Personalized, Assessment-Based Training Programs",
            "Trainer-Led Program Creation & Sales",
            "Progress Tracking & Performance Analytics",
            "Referral & Incentive System",
            "Video-Based Exercise Demonstrations",
            "Customizable Workout Plans",
            "Reminders for Engagement",
            "Client Management Dashboard for Trainers"
        ]
    },

    xpo: {
        name: "Xponential Fitness",
        platform: "Web + Android + iOS",
        industry: "Fitness / Wellness",
        technologies: ["Rails", "React", "Heroku", "React Native"],
        overview: "Xponential Fitness is a global boutique fitness franchisor that operates a diversified portfolio of specialized wellness brands across categories such as Pilates, barre, yoga, stretching, strength training, and cycling. The company follows a franchise-driven business model, enabling independent studio owners to operate under established brand names while receiving centralized support in marketing, training, technology, and operations. By combining premium in-studio experiences with digital fitness offerings and scalable franchise systems, Xponential Fitness aims to expand internationally and build one of the largest curated networks of boutique fitness and wellness brands worldwide.",
        challenge: "Xponential Fitness was facing the challenge of scaling a rapidly growing, multi-brand franchise ecosystem while maintaining operational consistency and brand identity across thousands of studio locations. With different fitness concepts operating under one parent company, there were complexities around standardizing technology, reporting, membership models, and customer experience across brands and regions. As the company managed multiple distinct brands, new feature requirements often emerged that were unique to specific concepts, requiring tailored implementations without disrupting the shared platform architecture. Balancing rapid expansion, franchisee satisfaction, brand-specific innovation, and centralized control while ensuring sustainable profitability was a key business challenge the organization needed to address.",
        solution: [
            {
                title: "Modular Multi-Brand Architecture",
                description: "We designed a configurable platform that allowed brand-specific features and workflows to be implemented without duplicating core logic. Shared services (payments, reporting, memberships, scheduling) were centralized, while brand-level customizations were handled through configuration and feature flags."
            },
            {
                title: "Standardized Core Systems with Flexible Extensions",
                description: "We unified reporting, analytics, and operational tools across all brands to ensure consistency and data visibility for franchisees, while still allowing each brand to define its own pricing models, class structures, and customer journeys through extensible modules."
            },
            {
                title: "Enhanced Franchisee Experience",
                description: "We introduced improved dashboards, performance tracking, and digital integrations to give franchise owners real-time insights and streamlined operational workflows, enabling them to scale efficiently while maintaining brand standards."
            }
        ],
        keyFeatures: [
            "Seamless Class Booking Experience",
            "Multi-Brand Workout Access",
            "Membership & Subscription Management",
            "Digital Workout Content Access"
        ]
    },

    "now-massage": {
        name: "The NOW Massage",
        platform: "Web + Android + iOS",
        industry: "Wellness",
        technologies: ["Ruby on Rails", "React", "React Native", "Heroku"],
        overview: "The NOW Massage is a modern wellness and self-care brand that offers approachable, high-quality massage therapy in a relaxed boutique setting. Positioned between traditional spas and quick massage chains, it provides customizable treatment options including signature massages and therapeutic enhancements designed to help clients de-stress, restore balance, and improve well-being. With a focus on accessibility, comfort, and a sleek guest experience, The NOW Massage has expanded through franchised locations, making therapeutic bodywork services more convenient and appealing to a wide audience seeking regular self-care.",
        challenge: "The main challenge for The NOW Massage was that the platform was originally built on a WordPress-based architecture, which caused performance and scalability limitations as traffic increased. The system struggled to handle high user load, resulting in slow page responses and overall lagging user experience. Additionally, introducing new business features was difficult because WordPress had limited plugin flexibility, forcing the team to rely on multiple third-party tools for admin management and operational workflows. This fragmented setup made system maintenance complex, slowed feature development, and created challenges in delivering a seamless and modern digital experience for both customers and franchise operators.",
        solution: [
            {
                title: "Scalable Platform Architecture Upgrade",
                description: "Migrated from the legacy WordPress system to a modern custom-built architecture to improve performance, scalability, and reliability."
            },
            {
                title: "Unified Franchise & Operational Management System",
                description: "Developed a centralized admin dashboard to manage bookings, studio operations, staff, and service configurations without relying on multiple third-party tools."
            },
            {
                title: "Performance Optimization for High Traffic Handling",
                description: "Implemented enterprise-level scalability strategies including horizontal scaling with load balancing, distributed request handling, and edge-level caching mechanisms. Optimized backend services and database query execution to reduce latency under peak load."
            },
            {
                title: "Enhanced Modular Backend Design",
                description: "Enhanced the monolithic backend architecture with performance-focused modular design patterns to improve system throughput while keeping deployment and maintenance simpler."
            }
        ],
        keyFeatures: [
            "Modern Online Booking & Appointment Management",
            "Centralized Franchise Operations Dashboard",
            "Membership & Customer Profile Management",
            "High-Performance Scalable Infrastructure"
        ]
    },

    aggero: {
        name: "Aggero",
        platform: "Web",
        industry: "MarTech",
        technologies: ["Ruby on Rails", "NodeJs", "ReactJS", "Heroku"],
        overview: "Aggero is an AI-powered video intelligence platform that helps brands, agencies, and creators understand what makes video content perform effectively. By analyzing every frame, hook, visual/audio element, and audience reaction across platforms like TikTok, YouTube, and Instagram, it turns complex creative data into clear, actionable insights. Aggero identifies what drives engagement and conversions, predicts video success before publishing, and generates structured creative briefs to improve future content. Its mission is to replace guesswork with data-backed decisions, enabling teams to optimize ads, influencer content, and social videos for measurable growth.",
        solution: [
            {
                title: "Understanding What Drives Video Performance",
                description: "Aggero's AI analyzes every video element — from hooks and visuals to audio and audience reactions — to identify which factors boost engagement and conversions and which ones hinder performance. This replaces guesswork with data-backed insight so teams know what to keep, change, or remove."
            },
            {
                title: "Predicting and Optimizing Content Before Publishing",
                description: "Instead of spending weeks testing creatives, Aggero predicts how a video will perform based on patterns learned from millions of analyzed videos. Marketers can catch risks and opportunities early and refine content for better results before launch."
            },
            {
                title: "Generating Actionable Creative Guidance",
                description: "Aggero automatically creates structured creative briefs and strategic recommendations that help teams design higher-performing content. It also provides audience intelligence and feedback signals that inform messaging and campaign direction."
            }
        ],
        keyFeatures: [
            "Competitor & Context Analysis",
            "Performance Drivers & Drainers",
            "Video Predictions & Hook Optimization",
            "Creative Briefs & AI Assistant",
            "Audience Intelligence",
            "Cross-Platform Video Analytics"
        ]
    },

    forio: {
        name: "Forio",
        platform: "Web",
        industry: "EdTech / Simulation",
        technologies: ["Ruby on Rails", "Python", "React", "D3.js", "AWS", "PostgreSQL"],
        overview: "Forio is an interactive simulation platform that enables organizations, universities, and enterprises to model complex business scenarios and train teams through experiential learning. By creating realistic, data-driven simulations, Forio empowers learners to make strategic decisions in risk-free environments, bridging the gap between theoretical knowledge and real-world application. Used by leading business schools and Fortune 500 companies, the platform supports custom simulation authoring, real-time multiplayer experiences, and comprehensive analytics to measure learning outcomes and participant engagement.",
        solution: [
            {
                title: "Custom Simulation Authoring Engine",
                description: "We built a flexible simulation authoring tool that allows educators and trainers to design, configure, and deploy interactive business simulations without requiring deep technical expertise. Scenarios range from supply chain management to market strategy."
            },
            {
                title: "Real-Time Multiplayer Decision Engine",
                description: "The platform supports real-time, multiplayer simulation sessions where participants collaborate and compete, making strategic decisions that dynamically affect shared outcomes and market conditions."
            },
            {
                title: "Data-Driven Learning Analytics",
                description: "Comprehensive analytics dashboards track participant decisions, performance metrics, and learning outcomes, enabling facilitators to assess competency development and provide targeted feedback."
            },
            {
                title: "Scalable Cloud Infrastructure",
                description: "We architected the platform on AWS for high availability and auto-scaling, ensuring smooth performance during large-scale simulation events with hundreds of concurrent participants."
            }
        ],
        keyFeatures: [
            "Interactive Business Simulation Builder",
            "Real-Time Multiplayer Sessions",
            "Learning Outcome Analytics",
            "Custom Scenario Configuration",
            "Facilitator Management Dashboard",
            "Enterprise SSO & LMS Integration"
        ]
    }
};
