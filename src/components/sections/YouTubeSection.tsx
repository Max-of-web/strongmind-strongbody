import { useTranslation } from 'react-i18next';
import { Youtube, Play } from 'lucide-react';

const PLAYLIST_URL = 'https://youtube.com/playlist?list=PL9FEczFkBjTeQt3GXlvoKfNygvTiZ-qkb';

// Curated public videos from the playlist
const VIDEOS = [
  { id: 'HLXoiRo6Gt8', title: 'Workout 1' },
  { id: 'k7rjrqNNxuI', title: 'Workout 2' },
  { id: '8uBRPxEpwy0', title: 'Workout 3' },
];

const YouTubeSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-theme-navy dark:bg-theme-darknavy">
      <div className="container-width">
        <div className="text-center mb-10 scroll-fade-in">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2 text-white">
            {t('coaching.youtube.sectionTitle')}
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mt-4">
            {t('coaching.youtube.subtitle')}
          </p>
        </div>

        {/* Mobile: horizontal swipeable strip */}
        <div className="md:hidden -mx-4 px-4 overflow-x-auto scroll-fade-in [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 snap-x snap-mandatory pb-2">
            {VIDEOS.map((v) => (
              <a
                key={v.id}
                href={`https://www.youtube.com/watch?v=${v.id}&list=PL9FEczFkBjTeQt3GXlvoKfNygvTiZ-qkb`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex-shrink-0 w-[78%] snap-start overflow-hidden rounded-2xl border border-theme-tangerine/30 shadow-lg transition-all duration-300 active:scale-[0.98]"
                aria-label={v.title}
              >
                <img
                  src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                  alt={v.title}
                  loading="lazy"
                  className="w-full h-44 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-theme-tangerine/90 flex items-center justify-center shadow-xl">
                    <Play size={26} className="text-white ml-1" fill="currentColor" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Desktop: 3-col grid */}
        <div className="hidden md:grid grid-cols-3 gap-5 max-w-5xl mx-auto scroll-fade-in">
          {VIDEOS.map((v) => (
            <a
              key={v.id}
              href={`https://www.youtube.com/watch?v=${v.id}&list=PL9FEczFkBjTeQt3GXlvoKfNygvTiZ-qkb`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl border border-theme-tangerine/30 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              aria-label={v.title}
            >
              <img
                src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                alt={v.title}
                loading="lazy"
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-theme-tangerine/90 flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                  <Play size={26} className="text-white ml-1" fill="currentColor" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10 scroll-fade-in">
          <a
            href={PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-amber-600 to-yellow-500 rounded-lg shadow-lg hover:from-amber-700 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 min-h-[44px]"
          >
            <Youtube size={20} />
            {t('coaching.youtube.buttonText')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
