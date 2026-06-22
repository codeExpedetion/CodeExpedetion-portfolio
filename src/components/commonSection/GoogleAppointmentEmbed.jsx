import React, { useCallback, useEffect, useState } from 'react';
import { Calendar, X } from 'lucide-react';
import Button from '../ui/Button';

const INLINE_EMBED_PATTERN = /calendar\.google\.com\/calendar\/appointments\/schedules\//;

const getInlineEmbedUrl = (url) => {
  const trimmed = url?.trim();
  if (!trimmed || !INLINE_EMBED_PATTERN.test(trimmed)) return null;
  return trimmed.includes('?') ? trimmed : `${trimmed}?gv=true`;
};

const openBookingPopup = (url) => {
  const width = Math.min(1000, window.screen.width - 80);
  const height = Math.min(800, window.screen.height - 80);
  const left = window.screenX + (window.outerWidth - width) / 2;
  const top = window.screenY + (window.outerHeight - height) / 2;

  window.open(
    url,
    'codeexpedition-booking',
    `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
  );
};

const GoogleAppointmentEmbed = ({ url }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const bookingUrl = url?.trim();
  const inlineEmbedUrl = getInlineEmbedUrl(bookingUrl);

  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const handleBookClick = () => {
    if (inlineEmbedUrl) {
      setIsModalOpen(true);
      return;
    }

    openBookingPopup(bookingUrl);
  };

  useEffect(() => {
    if (!isModalOpen) return;

    const handleEscape = (event) => {
      if (event.key === 'Escape') closeModal();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen, closeModal]);

  if (!bookingUrl) {
    return (
      <div className="flex items-center justify-center h-full min-h-[400px] rounded-2xl border border-dashed border-border-subtle bg-white px-6 text-center">
        <p className="text-sm text-text-secondary font-medium">
          Add your Google Appointment Schedule URL to{' '}
          <code className="text-brand-primary">VITE_GOOGLE_APPOINTMENT_URL</code> in{' '}
          <code>.env</code> to enable scheduling.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full min-h-[400px] rounded-2xl border border-border-subtle bg-white px-8 text-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-brand-secondaryLight flex items-center justify-center text-brand-primary">
          <Calendar className="w-8 h-8" strokeWidth={2} />
        </div>
        <p className="text-sm text-text-secondary font-medium max-w-sm leading-relaxed">
          Pick a time that works for you and schedule a call with our team.
        </p>
        <Button
          type="button"
          onClick={handleBookClick}
          variant="primary"
          className="px-8 py-4 text-base font-bold"
        >
          Book a meeting
        </Button>
      </div>

      {isModalOpen && inlineEmbedUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Book a meeting"
        >
          <button
            type="button"
            className="absolute inset-0 bg-text-primary/50 backdrop-blur-sm"
            onClick={closeModal}
            aria-label="Close booking modal"
          />
          <div className="relative z-10 w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-border-subtle">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border-subtle">
              <h3 className="text-lg font-bold text-text-primary">Book a meeting</h3>
              <button
                type="button"
                onClick={closeModal}
                className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-background-section transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <iframe
              src={inlineEmbedUrl}
              title="Book a meeting with CodeExpedition"
              className="w-full h-[min(80vh,700px)] border-0"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GoogleAppointmentEmbed;
