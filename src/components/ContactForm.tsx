import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const { t, i18n } = useTranslation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Add hidden metadata
    formData.append('page', 'contact-form');
    formData.append('lang', i18n.language);
    
    try {
      const response = await fetch('https://getform.io/f/your-form-id', {
        method: 'POST',
        body: formData
      });
      
      if (!response.ok) throw new Error('Network response was not ok');
      
      // Clear form on success
      form.reset();
      
      // Show success message
      const successText = i18n.language === 'lt' 
        ? "✅ Paraška išsiųsta. Susisieksiu netrukus."
        : "✅ Application sent. I'll get back to you shortly.";
      setStatusMessage({ type: 'success', text: successText });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Show error message
      const errorText = i18n.language === 'lt'
        ? "⚠️ Nepavyko išsiųsti. Bandyk dar kartą."
        : "⚠️ Send failed. Please try again.";
      setStatusMessage({ type: 'error', text: errorText });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-elegant-charcoal bg-opacity-40 p-6 md:p-8 rounded-lg border border-elegant-light border-opacity-10 w-full max-w-2xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">
          {t('contact.form.title')}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot field - hidden from users */}
          <input
            type="text"
            name="website"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />
          
          <div>
            <label htmlFor="vardas" className="block mb-2">
              {t('contact.form.name')} *
            </label>
            <input
              type="text"
              id="vardas"
              name="vardas"
              required
              placeholder={t('contact.form.namePlaceholder')}
              className="form-input"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2">
              {t('contact.form.email')} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder={t('contact.form.emailPlaceholder')}
              className="form-input"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-2">
              {t('contact.form.phone')}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder={t('contact.form.phonePlaceholder')}
              className="form-input"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2">
              {t('contact.form.message')}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder={t('contact.form.messagePlaceholder')}
              className="form-input"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`cta-button-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t('contact.form.submitting')}
              </span>
            ) : (
              t('contact.form.submit')
            )}
          </button>
          
          {statusMessage && (
            <div className={`text-sm mt-2 ${statusMessage.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {statusMessage.text}
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default ContactForm;