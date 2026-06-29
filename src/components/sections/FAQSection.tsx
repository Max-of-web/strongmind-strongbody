import { useTranslation } from 'react-i18next';
import { Plus } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type Item = { q: string; a: string };

interface FAQSectionProps {
  titleKey?: string;
  itemsKey?: string;
  eyebrow?: string;
}

const FAQSection = ({
  titleKey = 'homepage.faq.sectionTitle',
  itemsKey = 'homepage.faq.items',
  eyebrow = 'FAQ',
}: FAQSectionProps) => {
  const { t } = useTranslation();
  const raw = t(itemsKey, { returnObjects: true });
  const items: Item[] = Array.isArray(raw) ? (raw as Item[]) : [];

  return (
    <section className="section-padding bg-elegant-charcoal relative overflow-hidden">
      {/* Decorative tangerine glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, hsl(var(--theme-tangerine) / 0.08), transparent 55%)',
        }}
      />

      <div className="container-width max-w-3xl relative">
        <div className="text-center mb-12 scroll-fade-in">
          <p className="text-theme-tangerine text-xs font-bold tracking-[0.25em] uppercase mb-3">
            {eyebrow}
          </p>
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
            {t(titleKey)}
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {items.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="group border border-white/10 rounded-xl bg-white/[0.03] backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-theme-tangerine/40 hover:bg-white/[0.05] data-[state=open]:border-theme-tangerine/50 data-[state=open]:bg-white/[0.05]"
            >
              <AccordionTrigger
                className="px-5 md:px-6 py-5 text-left text-base md:text-lg font-semibold text-white hover:no-underline hover:text-theme-tangerine data-[state=open]:text-theme-tangerine transition-colors [&>svg]:hidden gap-4"
              >
                <span className="flex-1">{item.q}</span>
                <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-theme-tangerine/40 text-theme-tangerine transition-transform duration-300 group-data-[state=open]:rotate-45">
                  <Plus size={16} strokeWidth={2.5} />
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-5 md:px-6 pb-5 pt-0 text-white/70 leading-relaxed text-[15px]">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
