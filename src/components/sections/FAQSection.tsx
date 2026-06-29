import { useTranslation } from 'react-i18next';
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
}

const FAQSection = ({
  titleKey = 'homepage.faq.sectionTitle',
  itemsKey = 'homepage.faq.items',
}: FAQSectionProps) => {
  const { t } = useTranslation();
  const raw = t(itemsKey, { returnObjects: true });
  const items: Item[] = Array.isArray(raw) ? (raw as Item[]) : [];

  return (
    <section className="section-padding bg-elegant-charcoal">
      <div className="container-width max-w-3xl">
        <div className="text-center mb-10 scroll-fade-in">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
            {t(titleKey)}
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
              <AccordionTrigger className="text-left text-white hover:text-theme-tangerine">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
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
