
import { useTranslation } from 'react-i18next';
import { ShieldCheck } from 'lucide-react';

const TrustStripSection = () => {
  const { t } = useTranslation();
  const items = t('homepage.trustStrip.items', { returnObjects: true });
  const list = Array.isArray(items) ? (items as string[]) : [];

  return (
    <section className="py-6 bg-elegant-charcoal border-y border-white/10">
      <div className="container-width px-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs md:text-sm text-white/80">
          {list.map((item, i) => (
            <li key={i} className="inline-flex items-center gap-2">
              <ShieldCheck size={16} className="text-theme-tangerine" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustStripSection;
