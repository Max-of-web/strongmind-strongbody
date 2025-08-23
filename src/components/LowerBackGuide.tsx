
"use client";
import { Check, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LowerBackGuide = () => {
  const { t } = useTranslation();

  let benefits: string[] = [];
  try {
    const data = t('homepage.lowerBackGuide.benefits', { returnObjects: true }) as unknown;
    benefits = Array.isArray(data) ? (data as string[]) : [];
  } catch { benefits = [
    'Reduced pain and discomfort through proper movement patterns',
    'Smarter training approach that adapts to your energy levels',
    'Sustainable habits that fit into your lifestyle',
    'Stronger body awareness and connection',
    'Increased confidence in your movement abilities'
  ]; }

  return (
    <section id="free-guide" className="py-20 bg-slate-100 dark:bg-slate-900">
      <div className="container-width px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          <div className="md:w-1/2 bg-white dark:bg-slate-800 rounded-md shadow-md px-[35px] py-[30px]">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-white">
              {t('homepage.lowerBackGuide.sectionTitle')}
            </h2>
            <ul className="space-y-4 mb-8">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start">
                  <Check size={22} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                  <span className="text-slate-700 dark:text-slate-200">{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center text-sm mt-10 border-t border-slate-200 dark:border-slate-700 pt-4">
              <Shield size={18} className="mr-2 text-theme-tangerine" />
              <span className="text-sm text-slate-600 dark:text-slate-300">{t('homepage.lowerBackGuide.privacyNote')}</span>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="flex flex-col bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-md p-4">
              <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white">
                {t('homepage.lowerBackGuide.sectionTitle')}
              </h3>
              <p className="mb-4 opacity-90 text-slate-700 dark:text-slate-300">
                {t('homepage.lowerBackGuide.intro')}
              </p>

              {/* MailerLite embed target */}
              <div style={{ width:'100%', maxWidth:'560px', margin:'0 auto' }} className="mb-4">
                <div className="ml-embedded" data-form="7Ja66U"></div>
              </div>

              <div className="flex items-center text-sm mt-4 border-t border-slate-200 dark:border-slate-700 pt-4">
                <Shield size={18} className="mr-2 text-theme-tangerine" />
                <span className="text-sm text-slate-600 dark:text-slate-300">{t('homepage.lowerBackGuide.privacyNote')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LowerBackGuide;