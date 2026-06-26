
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';

const OutcomesSection = () => {
  const { t } = useTranslation();
  const raw = t('homepage.outcomes.items', { returnObjects: true });
  const items: string[] = Array.isArray(raw) ? (raw as string[]) : [];

  return (
    <section className="section-padding bg-elegant-charcoal">
      <div className="container-width">
        <div className="text-center mb-10 scroll-fade-in">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
            {t('homepage.outcomes.sectionTitle')}
          </h2>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {items.map((item, i) => (
            <li key={i} className="scroll-fade-in flex items-start gap-3 rounded-lg bg-white/[0.04] p-4">
              <Check size={22} className="text-theme-tangerine shrink-0 mt-0.5" />
              <span className="text-white/90">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OutcomesSection;
