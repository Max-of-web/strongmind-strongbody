
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

const EmailSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYouDialog, setShowThankYouDialog] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Insert into Supabase
      const { error } = await supabase
        .from('email_subscriptions')
        .insert([{ email }]);
      
      if (error) throw error;
      
      toast.success(t('emailSubscription.successToast.title'), {
        description: t('emailSubscription.successToast.description')
      });

      setEmail('');
      setShowThankYouDialog(true);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast.error(t('emailSubscription.errorToast.title'), {
        description: error.message || t('emailSubscription.errorToast.description')
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto">
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">
          {t('emailSubscription.title')}
        </h3>
        <p className="mb-6 text-foreground">
          {t('emailSubscription.description')}
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('emailSubscription.placeholder')}
            required
            className="form-input"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`cta-button-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? t('emailSubscription.sending') : t('emailSubscription.button')}
          </button>
        </form>
      </div>

      <Dialog open={showThankYouDialog} onOpenChange={setShowThankYouDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">{t('emailSubscription.thankYou.title')}</DialogTitle>
            <DialogDescription>
              {t('emailSubscription.thankYou.description')}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <p>{t('emailSubscription.thankYou.connect')}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="https://wa.me/37067951040" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 text-white font-semibold px-4 py-3 rounded-md hover:bg-green-700 transition-colors"
              >
                <MessageSquare size={18} />
                <span>{t('emailSubscription.thankYou.whatsApp')}</span>
              </a>
              <a 
                href="https://calendly.com/lipskis-paulius/asmenine-treniruote" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-theme-navy dark:bg-theme-lightnavy text-white font-semibold px-4 py-3 rounded-md hover:bg-opacity-90 transition-colors"
              >
                <Calendar size={18} />
                <span>{t('emailSubscription.thankYou.bookCall')}</span>
              </a>
            </div>
          </div>
          <DialogFooter>
            <button 
              onClick={() => setShowThankYouDialog(false)} 
              className="w-full sm:w-auto text-foreground bg-muted hover:bg-muted/80 px-4 py-2 rounded-md transition-colors"
            >
              {t('emailSubscription.thankYou.close')}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EmailSubscription;
