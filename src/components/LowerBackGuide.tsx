import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { toast } from './ui/use-toast';
import { Check } from 'lucide-react';
const LowerBackGuide: React.FC = () => {
  const {
    t
  } = useTranslation();
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const benefits = t('homepage.lowerBackGuide.benefits', {
    returnObjects: true
  }) as string[] || ['Išmokite taisyklingai tempti nugarą', 'Atlikite tempimo pratimus saugiai', 'Sumažinkite skausmą per 10 minučių', 'Pagerinkite laikyseną', 'Stiprinkite nugaros raumenis', 'Išvenkite ateities traumų'];
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!email.trim()) {
      toast({
        title: "Klaida",
        description: "Prašome įvesti el. pašto adresą",
        variant: "destructive"
      });
      return;
    }
    if (!validateEmail(email)) {
      toast({
        title: "Klaida",
        description: "Prašome įvesti galiojantį el. pašto adresą",
        variant: "destructive"
      });
      return;
    }
    if (!consent) {
      toast({
        title: "Klaida",
        description: "Prašome sutikti su naujienlaiškio gavimu",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      // Submit to MailerLite via hidden iframe (to avoid CORS issues)
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.name = 'ml_submit_frame';
      document.body.appendChild(iframe);
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://assets.mailerlite.com/jsonp/1654024/forms/162021803147921327/subscribe';
      form.target = 'ml_submit_frame';
      const emailInput = document.createElement('input');
      emailInput.type = 'hidden';
      emailInput.name = 'fields[email]';
      emailInput.value = email;
      form.appendChild(emailInput);
      const consentInput = document.createElement('input');
      consentInput.type = 'hidden';
      consentInput.name = 'fields[newsletter_consent]';
      consentInput.value = '1';
      form.appendChild(consentInput);
      document.body.appendChild(form);
      form.submit();

      // Clean up
      setTimeout(() => {
        document.body.removeChild(iframe);
        document.body.removeChild(form);
      }, 1000);

      // Show immediate success
      setIsSubmitted(true);
      toast({
        title: "Sėkmė!",
        description: "Gidas išsiųstas į jūsų el. paštą",
        variant: "default"
      });
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Klaida",
        description: "Įvyko klaida. Bandykite dar kartą.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="free-guide" className="py-20 bg-slate-100 dark:bg-slate-900">
      <div className="container-width px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          <div className="md:w-1/2 bg-white dark:bg-slate-800 rounded-md shadow-md px-[35px] py-[30px]">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-white">
              {t('homepage.lowerBackGuide.sectionTitle')}
            </h2>
            
            {/* Beautiful Summary */}
            <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 rounded-xl border-l-4 border-blue-500">
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-200"
                 dangerouslySetInnerHTML={{
                   __html: t('homepage.lowerBackGuide.intro')
                     .replace(/80% of people/, '<span class="font-bold text-2xl text-blue-600 dark:text-blue-400">80%</span> of people')
                     .replace(/80 % žmonių/, '<span class="font-bold text-2xl text-blue-600 dark:text-blue-400">80 %</span> žmonių')
                     .replace(/7 simple steps/, '<span class="font-semibold text-indigo-600 dark:text-indigo-400">7 simple steps</span>')
                     .replace(/7 paprasti žingsniai/, '<span class="font-semibold text-indigo-600 dark:text-indigo-400">7 paprasti žingsniai</span>')
                 }}
              />
            </div>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => <li key={index} className="flex items-start">
                  <Check size={22} className="shrink-0 mt-1 mr-3 text-zinc-950" />
                  <span className="text-slate-700 dark:text-slate-200">{benefit}</span>
                </li>)}
            </ul>
          </div>

          <div className="md:w-1/2 w-full mt-6 md:mt-0">
            <div className="flex flex-col bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg p-6 gap-4 max-w-[380px] w-full mx-auto md:mx-0">
              {!isSubmitted ? <form onSubmit={handleSubmit} className="space-y-4">
                  <h4 className="text-xl font-bold text-center text-slate-800 dark:text-white mb-4">
                    Įrašyk el. paštą ir gidas netrukus atkeliaus
                  </h4>
                  
                  <div>
                    <Input type="email" placeholder="El. paštas" value={email} onChange={e => setEmail(e.target.value)} className="w-full text-black dark:text-white" required />
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Checkbox id="consent" checked={consent} onCheckedChange={checked => setConsent(checked as boolean)} className="mt-1" required />
                    <label htmlFor="consent" className="text-sm text-slate-700 dark:text-slate-200 cursor-pointer leading-relaxed">
                      Sutinku gauti naujienlaiškius apie sveikatą ir fizinį aktyvumą.
                    </label>
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? 'Siunčiama...' : 'Atsisiųsti nemokamą gidą'}
                  </Button>
                </form> : <div className="text-center py-8">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Puiku!</h3>
                  <p className="text-slate-600 dark:text-slate-300">Gidas išsiųstas į jūsų el. paštą. Patikrinkite gautus laiškus.</p>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default LowerBackGuide;