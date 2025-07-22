
import { useState } from 'react';
import { Check, Shield } from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";

const LowerBackGuide = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success(t('emailSubscription.successToast.title'), {
        description: t('emailSubscription.successToast.description')
      });
      setEmail('');
      setIsSubmitting(false);
    }, 800);
  };

  // Get the benefits array from translations with fallback
  let benefits: string[] = [];
  try {
    const benefitsData = t('homepage.lowerBackGuide.benefits', { returnObjects: true });
    benefits = Array.isArray(benefitsData) ? benefitsData : [];
  } catch (error) {
    console.error('Error loading benefits:', error);
    // Fallback benefits
    benefits = [
      'Reduced pain and discomfort through proper movement patterns',
      'Smarter training approach that adapts to your energy levels',
      'Sustainable habits that fit into your lifestyle',
      'Stronger body awareness and connection',
      'Increased confidence in your movement abilities'
    ];
  }

  return (
    <section id="free-guide" className="py-20 bg-slate-100 dark:bg-slate-900">
      <div className="container-width px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          {/* Left column - Guide information */}
          <div className="md:w-1/2 bg-white dark:bg-slate-800 rounded-md shadow-md px-[35px] py-[30px]">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-white">
              {t('homepage.lowerBackGuide.sectionTitle')}
            </h2>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check size={22} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                  <span className="text-slate-700 dark:text-slate-200">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center text-sm mt-10 border-t border-slate-200 dark:border-slate-700 pt-4">
              <Shield size={18} className="mr-2 text-theme-tangerine" />
              <span className="text-slate-600 dark:text-slate-300">{t('homepage.lowerBackGuide.privacyNote')}</span>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="md:w-1/2">
            <div className="h-full flex flex-col bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-white">
                {t('homepage.lowerBackGuide.sectionTitle')}
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-auto">
                <div>
                  <input 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder={t('emailSubscription.placeholder')} 
                    required 
                    className="w-full p-3 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white border border-slate-300 dark:border-slate-600 placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-theme-tangerine focus:border-transparent"
                  />
                </div>
                
                <Button
                  type="submit" 
                  disabled={isSubmitting}
                  variant="cta"
                  className="w-full px-4 py-3 h-auto"
                >
                  {isSubmitting ? 'Siunčiama...' : t('homepage.lowerBackGuide.buttonText')}
                </Button>

                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                  {t('homepage.lowerBackGuide.disclaimer')}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LowerBackGuide;
