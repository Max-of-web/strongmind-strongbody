
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

type Pkg = { titleKey: string; priceKey: string; periodKey: string };

const PackagesTeaserSection = () => {
  const { t } = useTranslation();
  const raw = t('homepage.packagesTeaser.packages', { returnObjects: true });
  const packages: Pkg[] = Array.isArray(raw) ? (raw as Pkg[]) : [];

  return (
    <section className="section-padding bg-elegant-charcoal">
      <div className="container-width">
        <div className="text-center mb-10 scroll-fade-in">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
            {t('homepage.packagesTeaser.sectionTitle')}
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {packages.map((p, i) => (
            <Link
              key={i}
              to="/coaching#packages-section"
              className="scroll-fade-in rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-theme-tangerine/50 hover:bg-white/[0.06] transition group"
            >
              <p className="text-base md:text-lg font-semibold text-white mb-2 leading-snug">
                {t(p.titleKey)}
              </p>
              <p className="text-theme-tangerine font-bold text-lg">
                {t(p.priceKey)}
                <span className="text-white/60 text-sm font-normal ml-1">
                  {t(p.periodKey)}
                </span>
              </p>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/coaching#packages-section"
            className="inline-flex items-center gap-2 text-theme-tangerine font-semibold hover:underline"
          >
            {t('homepage.packagesTeaser.ctaText')}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PackagesTeaserSection;
