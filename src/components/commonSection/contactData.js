import { Phone } from 'lucide-react';

export const contactHero = {
  heading: "Connect with Us",
  description: "Ready to accelerate your digital journey? Our team of engineers and architects are here to help you scale."
};

export const contactMethods = {
  title: "Send Us a Message",
  description: "Fill out the form below and an AI specialist will get back to you within 24 hours."
};

export const contactBooking = {
  title: "Book a Meeting",
  description: "Prefer to talk live? Pick a time on our calendar and meet with our team directly."
};

export const contactOffices = {
  title: "Our Global Network",
  description: "Strategically located hubs to serve our clients worldwide.",
  items: [
    {
      city: "Denver",
      country: "United States",
      address: ["1500 N Grant St #6223", "Denver, Colorado 80203"]
    },
    {
      city: "Lahore",
      country: "Pakistan",
      address: ["5, GCP Society", "Johar Town", "Lahore 54000"]
    },
    {
      icon: Phone,
      title: "Direct Channels",
      details: ["Phone: +1 (720) 414-6596", "Email: sales@codeexpedition.com"]
    },
  ]
};
