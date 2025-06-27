
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Calendar,
  Clock,
  Target,
  Heart,
  Brain,
  CheckCircle,
  Star,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';

const Programs = () => {
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

  const programs = [
    {
      icon: Target,
      title: "Pirmoji Sesija",
      price: "€60",
      duration: "90 min",
      summary: "Išsami konsultacija ir pradinis įvertinimas, sukuriant individualų planą jūsų tikslams pasiekti.",
      features: ["Fizinio stovio įvertinimas", "Tikslų nustatymas", "Pirma treniruotė", "Individuali programa"],
      recommended: false,
    },
    {
      icon: Calendar,
      title: "Mėnesinis Paketas",
      price: "€200",
      duration: "4 sesijos",
      summary: "Reguliarios treniruotės su nuolatiniu programos tobulinimu ir WhatsApp palaikymu.",
      features: ["4 treniruotės per mėnesį", "WhatsApp palaikymas", "Programos koregavimai", "Progreso stebėjimas"],
      recommended: false,
    },
    {
      icon: Star,
      title: "Transformacijos Paketas",
      price: "€360",
      duration: "8 sesijų",
      summary: "Intensyvus paketas rimtiems pokyčiams su pilnu palaikymu ir papildomomis paslaugomis.",
      features: ["8 treniruotės per mėnesį", "Prioritetinis palaikymas", "Mitybos gairės", "Įpročių koučingas"],
      recommended: true,
    },
    {
      icon: Users,
      title: "Poros Treniruotės",
      price: "€80",
      duration: "60 min",
      summary: "Treniruokitės kartu su partneriu ar draugu specialiai pritaikytoje programoje.",
      features: ["Treniruotė dviese", "Individualizuoti pratimai", "Motyvacijos palaikymas", "Bendradarbiavimo skatinimas"],
      recommended: false,
    },
    {
      icon: Heart,
      title: "Reabilitacijos Programa",
      price: "€70",
      duration: "75 min",
      summary: "Specializuotos treniruotės po traumų ar šrodinių skausmų gydomajam poveikiui.",
      features: ["Medicinos išsilavinimas", "Saugūs pratimai", "Skausmo mažinimas", "Judėjimo kokybė"],
      recommended: false,
    },
    {
      icon: Brain,
      title: "Mąstymo + Kūno Programa",
      price: "€90",
      duration: "90 min",
      summary: "Unikali programa, jungianti fizines treniruotes su psichologiniu koučingu.",
      features: ["Fizinės treniruotės", "Mąstymo koučingas", "Streso valdymas", "Pasitikėjimo stiprinimas"],
      recommended: false,
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-elegant-charcoal pt-32">
          <div className="container-width text-center">
            <div className="max-w-3xl mx-auto scroll-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Treniruočių Programos
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Pasirinkite programą, kuri geriausiai atitinka jūsų poreikius ir tikslus. 
                Kiekviena programa pritaikyta individualiai.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="section-padding bg-elegant-charcoal">
          <div className="container-width">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className={`scroll-fade-in relative bg-slate-800 rounded-lg p-8 border-2 transition-all duration-300 hover:transform hover:scale-105 ${
                    program.recommended 
                      ? 'border-theme-tangerine shadow-lg shadow-theme-tangerine/20' 
                      : 'border-slate-700 hover:border-slate-600'
                  }`}
                >
                  {program.recommended && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-theme-tangerine text-white px-4 py-1 rounded-full text-sm font-semibold">
                        REKOMENDUOJAMA
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <program.icon size={48} className="text-theme-tangerine mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-3xl font-bold text-theme-tangerine">{program.price}</span>
                      <span className="text-gray-400">/ {program.duration}</span>
                    </div>
                    <p className="text-gray-300">{program.summary}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle size={20} className="text-theme-tangerine shrink-0 mt-0.5 mr-3" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://calendly.com/lipskis-paulius/asmenine-treniruote"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3 px-6 rounded-md font-semibold transition-all duration-300 ${
                      program.recommended
                        ? 'bg-theme-tangerine text-white hover:bg-theme-lighttangerine'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Užsisakyti
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="section-padding bg-slate-800">
          <div className="container-width">
            <div className="max-w-4xl mx-auto text-center scroll-fade-in">
              <h2 className="section-title mb-8">Papildoma Informacija</h2>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-semibold text-theme-tangerine mb-4">Treniruočių Vietos</h3>
                  <ul className="space-y-2">
                    <li>• Reformatas Gym, Vilnius</li>
                    <li>• SEB Arena, Vilnius</li>
                    <li>• Online konsultacijos (pagal poreikį)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-theme-tangerine mb-4">Kas Įeina</h3>
                  <ul className="space-y-2">
                    <li>• Individuali programa</li>
                    <li>• WhatsApp palaikymas</li>
                    <li>• Progreso stebėjimas</li>
                    <li>• Lankstas tvarkaraštis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-elegant-charcoal">
          <div className="container-width">
            <div className="max-w-3xl mx-auto scroll-fade-in">
              <h2 className="section-title text-center mb-12">Dažni Klausimai</h2>
              <div className="space-y-6">
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="font-semibold text-theme-tangerine mb-2">Kaip vyksta pirmoji sesija?</h3>
                  <p className="text-gray-300">
                    Pirmoji sesija apima išsamų pokalbį apie jūsų tikslus, sveikatos istoriją ir fizinio stovio įvertinimą. 
                    Taip pat atliekame praktines užduotis ir sukuriame individualų planą.
                  </p>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="font-semibold text-theme-tangerine mb-2">Ar tinka pradedantiesiems?</h3>
                  <p className="text-gray-300">
                    Absoliučiai! Programos pritaikomos visiems lygmenims. Dėmesys skiriamas saugumui ir pamažu progresui.
                  </p>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="font-semibold text-theme-tangerine mb-2">Kaip dažnai reikėtų treniruotis?</h3>
                  <p className="text-gray-300">
                    Priklauso nuo jūsų tikslų ir galimybių. Rekomenduojama 2-3 kartus per savaitę stabiliam progresui.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          message="Pasiruošę pradėti savo fitness kelionę?"
          buttonText="Užsisakyti Pirmąją Sesiją"
          buttonLink="https://calendly.com/lipskis-paulius/asmenine-treniruote"
        />
      </main>
      <Footer />
    </>
  );
};

export default Programs;
