
import { useState } from 'react';
import { toast } from 'sonner';
import { Calendar, MessageSquare } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    goal: '',
    challenge: '',
    readyForChange: false
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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Insert into Supabase
      const { error } = await supabase
        .from('coaching_applications')
        .insert([{
          name: formData.name,
          email: formData.email,
          goal: formData.goal,
          challenge: formData.challenge,
          ready_for_change: formData.readyForChange
        }]);
      
      if (error) throw error;
      
      toast.success(t('applicationForm.successToast.title'), {
        description: t('applicationForm.successToast.description')
      });

      setFormData({
        name: '',
        email: '',
        goal: '',
        challenge: '',
        readyForChange: false
      });
      
      setShowThankYouDialog(true);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast.error(t('applicationForm.errorToast.title'), {
        description: error.message || t('applicationForm.errorToast.description')
      });
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
          <div>
            <label htmlFor="name" className="block mb-2">
              {t('applicationForm.name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          
          <div>
            <label htmlFor="goal" className="block mb-2">
              {t('applicationForm.goal')}
            </label>
            <textarea
              id="goal"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              required
              rows={3}
              placeholder={t('applicationForm.goalPlaceholder')}
              className="form-input"
            />
          </div>
          
          <div>
            <label htmlFor="challenge" className="block mb-2">
              {t('applicationForm.challenge')}
            </label>
            <textarea
              id="challenge"
              name="challenge"
              value={formData.challenge}
              onChange={handleChange}
              required
              rows={3}
              placeholder={t('applicationForm.challengePlaceholder')}
              className="form-input"
            />
          </div>
          
          <div className="flex items-start">
            <input
              type="checkbox"
              id="readyForChange"
              name="readyForChange"
              checked={formData.readyForChange}
              onChange={handleCheckboxChange}
              required
              className="mt-1 mr-3"
            />
            <label htmlFor="readyForChange">
              {t('applicationForm.change')}
            </label>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`cta-button-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? t('applicationForm.submitting') : t('applicationForm.submit')}
          </button>
        </form>
      </div>

      <Dialog open={showThankYouDialog} onOpenChange={setShowThankYouDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">{t('applicationForm.thankYou.title')}</DialogTitle>
            <DialogDescription>
              {t('applicationForm.thankYou.description')}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <p>{t('applicationForm.thankYou.connect')}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="https://wa.me/37067951040" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 text-white font-semibold px-4 py-3 rounded-md hover:bg-green-700 transition-colors"
              >
                <MessageSquare size={18} />
                <span>{t('applicationForm.thankYou.whatsApp')}</span>
              </a>
              <a 
                href="https://calendly.com/lipskis-paulius/asmenine-treniruote" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-theme-navy dark:bg-theme-lightnavy text-white font-semibold px-4 py-3 rounded-md hover:bg-opacity-90 transition-colors"
              >
                <Calendar size={18} />
                <span>{t('applicationForm.thankYou.bookCall')}</span>
              </a>
            </div>
          </div>
          <DialogFooter>
            <button 
              onClick={() => setShowThankYouDialog(false)} 
              className="w-full sm:w-auto text-foreground bg-muted hover:bg-muted/80 px-4 py-2 rounded-md transition-colors"
            >
              {t('applicationForm.thankYou.close')}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ApplicationForm;
