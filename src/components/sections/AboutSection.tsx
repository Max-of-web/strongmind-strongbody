
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();
  const bio = t('homepage.about.bio', { returnObjects: true });
  const bioArray = Array.isArray(bio) ? (bio as string[]) : [];

  return (
    <section id="about" className="section-padding bg-elegant-charcoal">
      <div className="container-width">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="md:w-1/3 scroll-fade-in">
            <div className="rounded-full overflow-hidden w-56 h-56 mx-auto md:mx-0 border-4 border-theme-navy">
              <img
                src="/lovable-uploads/6b62735b-caa1-4c49-8a96-b52c2dd5af3b.png"
                alt="Paulius Lipskis - Professional Portrait"
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>
          </div>
          <div className="md:w-2/3 scroll-fade-in">
            <h2 className="section-title">{t('homepage.about.sectionTitle')}</h2>
            {bioArray.map((p, i) => (
              <p key={i} className="mb-4 text-white/90">{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
