
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Save, RefreshCcw } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Import the original translation files for reference
import enTranslation from '@/i18n/locales/en';
import ltTranslation from '@/i18n/locales/lt';

type TranslationType = {
  [key: string]: any;
};

type AdminLanguageEditorProps = {
  language: 'en' | 'lt';
};

const AdminLanguageEditor = ({ language }: AdminLanguageEditorProps) => {
  const { i18n } = useTranslation();
  const { toast } = useToast();
  const originalTranslation = language === 'en' ? enTranslation : ltTranslation;
  
  // Load stored translations from localStorage or use original
  const [translations, setTranslations] = useState<TranslationType>(() => {
    const stored = localStorage.getItem(`custom_translations_${language}`);
    return stored ? JSON.parse(stored) : { ...originalTranslation };
  });

  // Save translations to localStorage when they change
  useEffect(() => {
    localStorage.setItem(`custom_translations_${language}`, JSON.stringify(translations));
  }, [translations, language]);

  // Function to handle changes in translation values
  const handleTranslationChange = (path: string[], value: string) => {
    const newTranslations = { ...translations };
    let current = newTranslations;
    
    // Navigate to the nested object where the change should happen
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]];
    }
    
    // Update the value
    current[path[path.length - 1]] = value;
    setTranslations(newTranslations);
  };

  // Function to apply changes to the app
  const applyChanges = () => {
    // Update the translations in i18n
    i18n.addResourceBundle(language, 'translation', translations, true, true);
    
    toast({
      title: "Changes Applied",
      description: `The ${language === 'en' ? 'English' : 'Lithuanian'} translations have been updated`,
      variant: "default",
    });
  };

  // Function to reset translations to original
  const resetTranslations = () => {
    setTranslations({ ...originalTranslation });
    i18n.addResourceBundle(language, 'translation', originalTranslation, true, true);
    
    toast({
      title: "Translations Reset",
      description: `The ${language === 'en' ? 'English' : 'Lithuanian'} translations have been reset to default`,
      variant: "default",
    });
  };

  // Recursive function to render translation fields
  const renderTranslationFields = (obj: any, path: string[] = []) => {
    return Object.entries(obj).map(([key, value]) => {
      const currentPath = [...path, key];
      const pathString = currentPath.join('.');
      
      if (typeof value === 'object' && value !== null) {
        return (
          <AccordionItem key={pathString} value={pathString}>
            <AccordionTrigger className="hover:bg-muted/50 px-3 rounded-md">
              {key}
            </AccordionTrigger>
            <AccordionContent className="pl-4 space-y-2">
              {renderTranslationFields(value, currentPath)}
            </AccordionContent>
          </AccordionItem>
        );
      } else {
        // Fix: Properly check the type of value before using length property
        const isLongText = typeof value === 'string' && value.length > 50;
        
        return (
          <div key={pathString} className="p-2 border-b border-muted">
            <div className="flex items-center space-x-2">
              <div className="w-1/3 text-sm font-medium text-muted-foreground">{key}:</div>
              <div className="w-2/3">
                {isLongText ? (
                  <Textarea 
                    value={value as string} 
                    onChange={(e) => handleTranslationChange(currentPath, e.target.value)}
                    className="min-h-[80px] text-sm"
                  />
                ) : (
                  <Input 
                    value={value as string} 
                    onChange={(e) => handleTranslationChange(currentPath, e.target.value)}
                    className="text-sm"
                  />
                )}
              </div>
            </div>
          </div>
        );
      }
    });
  };

  // Categories of translations
  const contentCategories = {
    header: translations.header || {},
    footer: translations.footer || {},
    homepage: translations.homepage || {},
    coaching: translations.coaching || {},
    cta: translations.cta || {},
    forms: translations.forms || {},
    common: translations.common || {}
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-2 justify-end mb-4">
        <Button 
          onClick={resetTranslations}
          variant="outline" 
          className="flex items-center gap-1"
        >
          <RefreshCcw size={16} />
          Reset to Original
        </Button>
        <Button 
          onClick={applyChanges}
          className="bg-theme-navy dark:bg-theme-lightnavy hover:bg-theme-marine dark:hover:bg-theme-lightmarine flex items-center gap-1"
        >
          <Save size={16} />
          Apply Changes
        </Button>
      </div>
      
      <Tabs defaultValue="all">
        <TabsList className="w-full mb-4 grid grid-cols-4 md:grid-cols-7">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="header">Header</TabsTrigger>
          <TabsTrigger value="homepage">Homepage</TabsTrigger>
          <TabsTrigger value="coaching">Coaching</TabsTrigger>
          <TabsTrigger value="cta">CTA</TabsTrigger>
          <TabsTrigger value="forms">Forms</TabsTrigger>
          <TabsTrigger value="common">Common</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="border rounded-md">
          <Accordion type="multiple" className="w-full">
            {renderTranslationFields(translations)}
          </Accordion>
        </TabsContent>
        
        {Object.entries(contentCategories).map(([category, content]) => (
          <TabsContent key={category} value={category} className="border rounded-md">
            <Accordion type="multiple" className="w-full">
              {renderTranslationFields(content, [category])}
            </Accordion>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default AdminLanguageEditor;
