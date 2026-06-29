import { useTranslation } from 'react-i18next';
import { Activity, Target, Dumbbell, Users, ArrowRight } from 'lucide-react';

const icons = [Activity, Target, Dumbbell, Users];

const PackageSelectorSection = () => {
  const { t } = useTranslation();

  const cards = t('coaching.packageSelector.cards', { returnObjects: true }) as Array<{
    situation: string;
    description: string;
    packageName: string;
    cta: string;
  }>;

  const scrollToPackages = () => {
    document.getElementById('packages-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-theme-navy dark:bg-theme-darknavy">
      <div className="container-width">
        <div className="text-center mb-12 scroll-fade-in">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2 text-white">
            {t('coaching.packageSelector.sectionTitle')}
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mt-4">
            {t('coaching.packageSelector.sectionSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {(cards || []).map((card, index) => {
            const Icon = icons[index] || Activity;
            return (
              <div
                key={index}
                className="scroll-fade-in relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 hover:border-theme-tangerine/40 hover:bg-white/[0.05] transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-theme-tangerine/10 flex items-center justify-center">
                    <Icon size={24} className="text-theme-tangerine" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {card.situation}
                    </h3>
                    <p className="text-theme-tangerine text-sm font-semibold mt-1">
                      {card.packageName}
                    </p>
                  </div>
                </div>

                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  {card.description}
                </p>

                <button
                  onClick={scrollToPackages}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-theme-tangerine hover:text-white transition-colors"
                >
                  {card.cta}
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PackageSelectorSection;
