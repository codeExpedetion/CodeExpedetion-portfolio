import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Send, MapPin } from 'lucide-react';
import { contactHero, contactMethods, contactBooking, contactOffices } from '../components/commonSection/contactData';
import GoogleAppointmentEmbed from '../components/commonSection/GoogleAppointmentEmbed';

const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const googleAppointmentUrl = import.meta.env.VITE_GOOGLE_APPOINTMENT_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailjsPublicKey || !emailjsServiceId || !emailjsTemplateId) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      await emailjs.send(
        emailjsServiceId,
        emailjsTemplateId,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          first_name: formData.firstName,
          last_name: formData.lastName,
          from_email: formData.email,
          reply_to: formData.email,
          message: formData.message,
        },
        { publicKey: emailjsPublicKey }
      );

      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setStatus('idle');
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isSubmitting = status === 'loading';

  return (
    <div className="bg-background-main pb-20">
      {/* Header Section */}
      <section className="pt-24 pb-20 bg-background-section border-b border-border-subtle">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black text-brand-primary mb-6 uppercase tracking-tight">
              {contactHero.heading}
            </h1>
            <p className="text-lg md:text-xl text-text-secondary font-medium leading-relaxed max-w-2xl mx-auto">
              {contactHero.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form & Booking Section */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="h-full flex flex-col bg-background-main p-8 lg:p-12 rounded-3xl border border-border-subtle shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                {contactBooking.title}
              </h2>
              <p className="text-text-secondary mb-8">
                {contactBooking.description}
              </p>
              <div className="flex-1 min-h-0">
                <GoogleAppointmentEmbed url={googleAppointmentUrl} />
              </div>
            </div>

            <div className="h-full flex flex-col bg-background-main p-8 lg:p-12 rounded-3xl border border-border-subtle shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                {contactMethods.title}
              </h2>
              <p className="text-text-secondary mb-10">
                {contactMethods.description}
              </p>

              <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-bold text-text-primary uppercase tracking-wider ml-1">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-5 py-4 rounded-xl border border-border-subtle bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-300 disabled:opacity-60"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-bold text-text-primary uppercase tracking-wider ml-1">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-5 py-4 rounded-xl border border-border-subtle bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-300 disabled:opacity-60"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-text-primary uppercase tracking-wider ml-1">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 rounded-xl border border-border-subtle bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-300 disabled:opacity-60"
                    placeholder="john@company.com"
                  />
                </div>
                <div className="flex-1 flex flex-col min-h-0 space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-text-primary uppercase tracking-wider ml-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full flex-1 min-h-[140px] px-5 py-4 rounded-xl border border-border-subtle bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-300 resize-none disabled:opacity-60"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                {status === 'success' && (
                  <p className="text-sm font-medium text-brand-primary bg-brand-primary/10 border border-brand-primary/20 rounded-xl px-4 py-3">
                    Thanks for reaching out! We&apos;ll get back to you within 24 hours.
                  </p>
                )}

                {status === 'error' && (
                  <p className="text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    Something went wrong. Please try again or email us at sales@codeexpedition.com.
                  </p>
                )}

                <div className="mt-auto pt-2">
                  <Button type="submit" variant="primary" className="w-full py-4 text-lg font-bold group" disabled={isSubmitting}>
                    <span className="flex items-center gap-2">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                    </span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* Global Offices Section */}
      <section className="py-16 lg:py-24 bg-background-section border-y border-border-subtle">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-6 tracking-tight">
              {contactOffices.title}
            </h2>
            <p className="text-lg text-text-secondary font-medium">
              {contactOffices.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto justify-items-center">
            {contactOffices.items.map((office, index) => {
              const isDirectChannel = Boolean(office.title);
              const Icon = office.icon || MapPin;

              return (
                <Card key={index} className="flex flex-col h-full w-full max-w-sm group text-center items-center" hoverEffect={true}>
                  <div className="flex flex-col items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-brand-secondaryLight flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-text-primary leading-tight group-hover:text-brand-primary transition-colors duration-300">
                        {isDirectChannel ? office.title : office.city}
                      </h3>
                      {!isDirectChannel && (
                        <p className="text-brand-primary font-bold text-xs uppercase tracking-widest">{office.country}</p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    {(isDirectChannel ? office.details : office.address).map((line, idx) => (
                      <p key={idx} className="text-text-secondary leading-relaxed font-medium">{line}</p>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
