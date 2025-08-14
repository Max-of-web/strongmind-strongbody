
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);
  const { t, i18n } = useTranslation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);
    
    const formData = new FormData(e.currentTarget);
    
    // Add hidden metadata
    formData.append('page', window.location.pathname);
    formData.append('lang', i18n.language);
    
    try {
      const response = await fetch('https://getform.io/f/YOUR_FORM_ENDPOINT_HERE', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        // Clear form
        e.currentTarget.reset();
        
        // Show success message
        const successText = i18n.language === 'lt' 
          ? "✅ Paraška išsiųsta. Susisieksiu netrukus."
          : "✅ Application sent. I'll get back to you shortly.";
        setStatusMessage({ type: 'success', text: successText });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
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
      <div className="bg-elegant-charcoal bg-opacity-40 p-6 md:p-8 rounded-lg border border-elegant-light border-opacity-10">
        <h3 className="text-2xl font-semibold mb-6">
          {t('applicationForm.title')}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot field for spam protection */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            style={{ position: 'absolute', left: '-9999px', visibility: 'hidden' }}
          />
          
          <div>
            <label htmlFor="vardas" className="block mb-2">
              {t('applicationForm.name')}
            </label>
            <input
              type="text"
              id="vardas"
              name="vardas"
              required
              className="form-input"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2">
              {t('applicationForm.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="form-input"
            />
          </div>
          
          <div>
            <label htmlFor="tikslas" className="block mb-2">
              {t('applicationForm.goal')}
            </label>
            <textarea
              id="tikslas"
              name="tikslas"
              required
              rows={3}
              placeholder={t('applicationForm.goalPlaceholder')}
              className="form-input"
            />
          </div>
          
          <div>
            <label htmlFor="issukiai" className="block mb-2">
              {t('applicationForm.challenge')}
            </label>
            <textarea
              id="issukiai"
              name="issukiai"
              required
              rows={3}
              placeholder={t('applicationForm.challengePlaceholder')}
              className="form-input"
            />
          </div>
          
          <div className="flex items-start">
            <input
              type="checkbox"
              id="commit"
              name="commit"
              value="yes"
              required
              className="mt-1 mr-3"
            />
            <label htmlFor="commit">
              {t('applicationForm.change')}
            </label>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`cta-button-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isSubmitting ? t('applicationForm.submitting') : t('applicationForm.submit')}
          </button>
          
          {statusMessage && (
            <div className={`text-sm mt-3 ${statusMessage.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>
              {statusMessage.text}
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default ApplicationForm;
