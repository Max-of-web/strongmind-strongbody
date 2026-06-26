import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

const PackagesTeaserSection = () => {
  const { t } = useTranslation();

  const primaryCard = t('homepage.packagesTeaser.primaryCard', { returnObjects: true }) as {
    badge: string;
    title: string;
    subtitle: string;
    featuresLabel: string;
    features: string[];
    closing: string;
    buttonText: string;
  };

  const secondaryCard = t('homepage.packagesTeaser.secondaryCard', { returnObjects: true }) as {
    title: string;
    subtitle: string;
    featuresLabel: string;
    features: string[];
    closing: string;
    buttonText: string;
  };

  const features = (items: string[]) =>
    items.map((item, i) => (
      <li key={i} className="flex items-start gap-3 text-white/90">
        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-theme-tangerine" />
        <span>{item}</span>
      </li>
    ));

  return (
    <section className="section-padding bg-elegant-charcoal">
      <div className="container-width">
        <div className="text-center mb-6 scroll-fade-in">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
            {t('homepage.packagesTeaser.sectionTitle')}
          </h2>
        </div>

        <p className="text-center text-white/80 max-w-3xl mx-auto mb-12 scroll-fade-in leading-relaxed">
          {t('homepage.packagesTeaser.intro')}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Primary card — Rebuild Method */}
          <div className="scroll-fade-in relative rounded-2xl border-2 border-theme-tangerine/40 bg-white/[0.04] p-6 md:p-8 backdrop-blur-sm">
            <span className="absolute -top-3 left-6 inline-block rounded-full bg-theme-tangerine px-3 py-1 text-xs font-bold text-black tracking-wide">
              {primaryCard.badge}
            </span>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-2 mb-2">
              {primaryCard.title}
            </h3>
            <p className="text-white/90 font-semibold mb-4 leading-snug">
              {primaryCard.subtitle}
            </p>

            <p className="text-sm font-semibold text-theme-tangerine uppercase tracking-wider mb-3">
              {primaryCard.featuresLabel}
            </p>
            <ul className="space-y-2 mb-5">
              {features(primaryCard.features)}
            </ul>

            <p className="italic text-white/70 text-sm mb-6 border-l-2 border-theme-tangerine/30 pl-4">
              {primaryCard.closing}
            </p>

            <Link
              to="/coaching#contact-section"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-600 to-yellow-500 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:from-amber-700 hover:to-yellow-600 hover:-translate-y-0.5"
            >
              {primaryCard.buttonText}
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Secondary card — Online */}
          <div className="scroll-fade-in rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 hover:border-theme-tangerine/30 hover:bg-white/[0.05] transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              {secondaryCard.title}
            </h3>
            <p className="text-white/90 font-semibold mb-4 leading-snug">
              {secondaryCard.subtitle}
            </p>

            <p className="text-sm font-semibold text-theme-tangerine uppercase tracking-wider mb-3">
              {secondaryCard.featuresLabel}
            </p>
            <ul className="space-y-2 mb-5">
              {features(secondaryCard.features)}
            </ul>

            <p className="italic text-white/70 text-sm mb-6 border-l-2 border-white/10 pl-4">
              {secondaryCard.closing}
            </p>

            <Link
              to="/coaching#contact-section"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-theme-tangerine/60 px-6 py-3 text-sm font-bold text-theme-tangerine transition-all duration-300 hover:bg-theme-tangerine hover:text-black"
            >
              {secondaryCard.buttonText}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="text-center scroll-fade-in">
          <Link
            to="/coaching#packages-section"
            className="inline-flex items-center gap-2 text-white/60 font-medium hover:text-theme-tangerine transition-colors text-sm"
          >
            {t('homepage.packagesTeaser.viewAllLink')}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PackagesTeaserSection;
