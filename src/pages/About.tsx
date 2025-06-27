
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  GraduationCap,
  BookOpen,
  Briefcase,
  ChevronRight,
  Quote,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';
import FeatureCard from '../components/FeatureCard';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    document.querySelectorAll('.scroll-fade-in').forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-elegant-charcoal pt-32">
          <div className="container-width">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="lg:w-1/3 scroll-fade-in">
                <div className="rounded-full overflow-hidden w-80 h-80 mx-auto border-4 border-theme-tangerine shadow-2xl">
                  <img
                    src="/lovable-uploads/ff6b5571-dd3d-4852-b785-1fee300184fe.png"
                    alt="Paulius Lipskis"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-2/3 scroll-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Apie Paulių Lipskį
                </h1>
                <p className="text-xl mb-8 text-gray-300">
                  Fizioterapeutas ir asmeninis treneris, padedantis žmonėms atrasti stiprumą ir pasitikėjimą savo kūnu.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <FeatureCard icon={GraduationCap} title="BSc Fizioterapija" description="" isBadge isSmall />
                  <FeatureCard icon={Award} title="NASM Sertifikatas" description="" isBadge isSmall />
                  <FeatureCard icon={BookOpen} title="MSc Tikslusis Maitinimasis" description="" isBadge isSmall />
                  <FeatureCard icon={Briefcase} title="Asmeninis Treneris (OTA)" description="" isBadge isSmall />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My Story */}
        <section className="section-padding bg-elegant-charcoal">
          <div className="container-width">
            <div className="max-w-4xl mx-auto scroll-fade-in">
              <h2 className="section-title text-center mb-12">Mano Istorija</h2>
              <div className="space-y-8 text-lg leading-relaxed">
                <p>
                  Turėdamas išsilavinimą tiek fizioterapijoje, tiek psichologijoje, paskutinį dešimtmetį padėjau žmonėms keisti santykį su savo kūnu. Tikiu treniruotėmis, kurios gerbia jūsų kūno signalus, kartu metant iššūkį jūsų riboms.
                </p>
                <p>
                  Mano kelias į treniruočių pasaulį prasidėjo nuo asmeninių iššūkių su nugaros skausmu ir sporto traumomis. Būtent šie patirimai padėjo man suprasti, kad fizinis stiprumas ir mentalinis atsparumas eina kartu.
                </p>
                <p>
                  Šiandien dirbu Vilniuje, Reformatas sporto klube ir SEB arenoje, teikdamas individualizuotas treniruotes, kurios sprendžia tiek judesių mechaniką, tiek mentalinius fizinės transformacijos aspektus.
                </p>
                <p>
                  Mano tikslas – padėti jums ne tik pasiekti fizinius rezultatus, bet ir išvystyti tvarų, džiugų santykį su judėjimu, kuris tarnaus jums visą gyvenimą.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Motivational Quote Section */}
        <section className="section-padding bg-slate-800">
          <div className="container-width">
            <div className="max-w-4xl mx-auto text-center scroll-fade-in">
              <Quote size={48} className="text-theme-tangerine mx-auto mb-8" />
              <blockquote className="text-2xl md:text-3xl font-medium italic mb-8 text-white">
                "Stiprumas prasideda ne sporto salėje, o nuo sprendimo pradėti. 
                Kiekvienas žingsnis, kiekvienas pasirinkimas formuoja ne tik jūsų kūną, 
                bet ir jūsų charakterį."
              </blockquote>
              <cite className="text-theme-tangerine text-lg font-semibold">
                — Paulius Lipskis
              </cite>
            </div>
          </div>
        </section>

        {/* My Approach */}
        <section className="section-padding bg-elegant-charcoal">
          <div className="container-width">
            <div className="max-w-4xl mx-auto scroll-fade-in">
              <h2 className="section-title text-center mb-12">Mano Metodas</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-theme-tangerine">Holistinis Požiūris</h3>
                  <p>
                    Jungiame fizioterapijos žinias su psichologiniais metodais, kad spręstume ne tik simptomus, 
                    bet ir priežastis.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-theme-tangerine">Individualizacija</h3>
                  <p>
                    Kiekviena programa kuriama atsižvelgiant į jūsų unikalius poreikius, apribojimus ir tikslus.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-theme-tangerine">Ilgalaikis Rezultatas</h3>
                  <p>
                    Orientuojamės į tvarius įpročius ir gyvenimo būdo pokyčius, ne trumpalaikius sprendimus.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-theme-tangerine">Palaikymas</h3>
                  <p>
                    Esu šalia kiekviename žingsnyje – nuo pirmojo susitikimo iki ilgalaikių tikslų pasiekimo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          message="Pasiruošę pradėti savo transformacijos kelionę?"
          buttonText="Užsisakyti Konsultaciją"
          buttonLink="https://calendly.com/lipskis-paulius/asmenine-treniruote"
        />
      </main>
      <Footer />
    </>
  );
};

export default About;
