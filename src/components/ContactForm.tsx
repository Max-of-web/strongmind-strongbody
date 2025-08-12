import { useState } from 'react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';
import { supabase } from '@/integrations/supabase/client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYouDialog, setShowThankYouDialog] = useState(false);
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Insert into Supabase
      const { error } = await supabase
        .from('contacts')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        }]);
      
      if (error) throw error;
      
      toast.success(t('contact.form.successToast.title'), {
        description: t('contact.form.successToast.description')
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setShowThankYouDialog(true);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast.error(t('contact.form.errorToast.title'), {
        description: error.message || t('contact.form.errorToast.description')
      });
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
          <div>
            <label htmlFor="name" className="block mb-2">
              {t('contact.form.name')} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.phone}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
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
            {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
          </button>
        </form>
      </div>

      <Dialog open={showThankYouDialog} onOpenChange={setShowThankYouDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">{t('contact.form.thankYou.title')}</DialogTitle>
            <DialogDescription>
              {t('contact.form.thankYou.description')}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="bg-theme-navy bg-opacity-20 p-4 rounded-lg border border-theme-navy border-opacity-30">
              <p className="text-white font-medium mb-2">{t('contact.form.thankYou.nextSteps')}</p>
            </div>
          </div>
          <DialogFooter>
            <button 
              onClick={() => setShowThankYouDialog(false)} 
              className="w-full sm:w-auto text-foreground bg-muted hover:bg-muted/80 px-4 py-2 rounded-md transition-colors"
            >
              {t('contact.form.thankYou.close')}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactForm;