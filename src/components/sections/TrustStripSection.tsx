
import { useTranslation } from 'react-i18next';
import { ShieldCheck } from 'lucide-react';

const TrustStripSection = () => {
  const { t } = useTranslation();
  const items = t('homepage.trustStrip.items', { returnObjects: true });
  const list = Array.isArray(items) ? (items as string[]) : [];

  return (
    <section className="py-4 md:py-6 bg-elegant-charcoal border-y border-white/10">
      <div className="container-width px-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap md:items-center md:justify-center gap-x-6 gap-y-2 md:gap-y-3 text-[12px] md:text-sm text-white/80">
          {list.map((item, i) => (
            <li key={i} className="flex items-start md:items-center gap-2 leading-snug">
              <ShieldCheck size={16} className="text-theme-tangerine shrink-0 mt-0.5 md:mt-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustStripSection;
