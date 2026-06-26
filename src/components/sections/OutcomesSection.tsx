import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';

const OutcomesSection = () => {
  const { t } = useTranslation();
  const raw = t('homepage.outcomes.items', { returnObjects: true });
  const items: string[] = Array.isArray(raw) ? (raw as string[]) : [];

  return (
    <section className="section-padding bg-elegant-charcoal">
      <div className="container-width">
        <div className="text-center mb-12 scroll-fade-in">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
            {t('homepage.outcomes.sectionTitle')}
          </h2>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {items.map((item, i) => (
            <li
              key={i}
              className="scroll-fade-in group flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 transition-all duration-300 hover:border-theme-tangerine/30 hover:bg-white/[0.05] hover:shadow-[0_8px_30px_-12px_rgba(234,179,8,0.15)] hover:-translate-y-1"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-theme-tangerine/15 text-theme-tangerine ring-1 ring-theme-tangerine/20 transition group-hover:bg-theme-tangerine/25 group-hover:ring-theme-tangerine/40">
                <Check className="h-4 w-4" strokeWidth={3} />
              </span>
              <span className="text-base font-medium text-white/95 leading-relaxed pt-0.5">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OutcomesSection;
