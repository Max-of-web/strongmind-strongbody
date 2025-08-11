
import { Check, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { toast } from "sonner";

const LowerBackGuide = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');

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
            <p className="mb-6 text-slate-700 dark:text-slate-200 text-lg">
              {t('homepage.lowerBackGuide.intro')}
            </p>
            
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
            <div className="flex flex-col bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-md p-4">
              <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white">
                {t('homepage.lowerBackGuide.sectionTitle')}
              </h3>
              
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                {t('homepage.lowerBackGuide.intro')}
              </p>

              <form 
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  
                  try {
                    const formData = new FormData();
                    formData.append('email', email);
                    
                    const response = await fetch('https://getform.io/f/bxozjona', {
                      method: 'POST',
                      body: formData,
                    });
                    
                    if (response.ok) {
                      toast.success(t('homepage.lowerBackGuide.successMessage') || 'Mes išsiuntėme jums gidą. Sėkmė! Patikrinkite savo el. paštą.');
                      setEmail('');
                    } else {
                      throw new Error('Form submission failed');
                    }
                  } catch (error) {
                    console.error('Form submission error:', error);
                    toast.error(t('homepage.lowerBackGuide.errorMessage') || 'Klaida išsiunčiant. Bandykite dar kartą.');
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
                className="flex flex-col space-y-3"
              >
                {/* Hidden Honeypot input to prevent spam */}
                <input 
                  type="hidden" 
                  name="_gotcha" 
                  style={{ display: 'none !important' } as React.CSSProperties}
                />
                
                <div>
                  <input 
                    type="email" 
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('emailSubscription.placeholder')} 
                    required 
                    disabled={isSubmitting}
                    className="w-full p-2 text-sm rounded-md bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white border border-slate-300 dark:border-slate-600 placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-theme-tangerine focus:border-transparent disabled:opacity-50"
                  />
                </div>
                
                <Button
                  type="submit" 
                  variant="cta"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 text-sm h-auto"
                >
                  {isSubmitting ? (t('homepage.lowerBackGuide.sendingText') || 'Siunčiama...') : t('homepage.lowerBackGuide.buttonText')}
                </Button>

                <p className="text-xs text-slate-600 dark:text-slate-400">
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
