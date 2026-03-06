import { Lightbulb, Layout, Database, Shield, ShoppingCart, Stethoscope, GraduationCap, Scale, Map, Zap, BookOpen, ArrowRight, LayoutDashboard } from 'lucide-react';

export const footerData = {
  services: {
    title: "Services",
    items: [
      { title: "AI Services", href: "/services/ai", icon: Lightbulb },
      { title: "Application Development", href: "/services/app-dev", icon: Layout },
      { title: "Cloud Service", href: "/services/cloud", icon: Database },
      { title: "Security & Compliance", href: "/services/compliance", icon: Shield },
    ],
    footerLink: { text: "Explore all Services", href: "/services", icon: ArrowRight }
  },
  industries: {
    title: "Industries",
    items: [
      { title: "Commerce & Retail", href: "/industries/retail", icon: ShoppingCart },
      {
        title: "Healthcare",
        href: "/industries/healthcare",
        icon: Stethoscope
      },
      // { title: "EdTech", href: "/industries/education", icon: GraduationCap },
      { title: "IT Solutions", href: "/industries/education", icon: LayoutDashboard },
      { title: "LegalTech", href: "/industries/legal", icon: Scale },
    ],
    footerLink: { text: "View all Industries", href: "/industries", icon: ArrowRight }
  },
  insights: {
    title: "Insights",
    items: [
      { title: "Transformation Blueprint", href: "/insights/roadmap", icon: Map },
      { title: "AI-Driven Workflows", href: "/insights/ai-assist", icon: Zap },
      { title: "Engineering Standards", href: "/insights/best-practices", icon: BookOpen },
      { title: "Tech Radar", href: "/insights/technologies", icon: Layout },
    ],
    footerLink: { text: "Browse all insights", href: "/insights", icon: ArrowRight }
  },
  company: {
    title: "Company",
    items: [
      { title: "About", href: "/about" },
      // { title: "Success Stories", href: "/success-stories" },
      { title: "Use Cases", href: "/use-cases" },
      { title: "Careers", href: "/careers" },
      { title: "Contact", href: "/contact" },
    ]
  },
  companyDescription: "Empowering global enterprises with innovative, secure digital solutions that combine AI and deep technical expertise to deliver real results and long-term value through scalable, future-ready technology.",
  copyright: "CodeExpedition",
  legalLinks: [
    { title: "Terms of Service", href: "/contact" },
    { title: "Privacy Policy", href: "/contact" },
    { title: "Cookie Policy", href: "/contact" }
  ]
};
