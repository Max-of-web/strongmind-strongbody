
import { useTranslation } from 'react-i18next';

type Item = { headline: string; body: string };

const ProblemSolutionSection = () => {
  const { t } = useTranslation();
  const raw = t('homepage.problemSolution.items', { returnObjects: true });
  const items: Item[] = Array.isArray(raw) ? (raw as Item[]) : [];

  return (
    <section className="section-padding bg-elegant-charcoal">
      <div className="container-width">
        <div className="text-center mb-10 scroll-fade-in">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
            {t('homepage.problemSolution.sectionTitle')}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="scroll-fade-in rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:border-theme-tangerine/40 transition"
            >
              <p className="text-sm uppercase tracking-wider text-white/50 mb-2">
                {String(i + 1).padStart(2, '0')}
              </p>
              <p className="text-lg font-semibold text-white mb-3">
                {item.headline}
              </p>
              <p className="text-white/90">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
