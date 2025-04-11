
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Save, RefreshCcw, Loader2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase } from '@/integrations/supabase/client';

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
  const [translations, setTranslations] = useState<TranslationType>({ ...originalTranslation });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  // Load translations from Supabase on component mount
  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        // First try to fetch from Supabase
        const { data, error } = await supabase
          .from('translations')
          .select('key, value')
          .eq('language', language)
          .eq('namespace', 'translation');

        if (error) {
          console.error('Error fetching translations:', error);
          toast({
            title: "Error Loading Translations",
            description: "Could not load custom translations. Using defaults.",
            variant: "destructive",
          });
          setTranslations({ ...originalTranslation });
        } else if (data && data.length > 0) {
          // Transform the flat list of translations into a nested object
          const customTranslations = { ...originalTranslation };
          
          data.forEach((item) => {
            const pathParts = item.key.split('.');
            let current = customTranslations;
            
            // Navigate to the nested object
            for (let i = 0; i < pathParts.length - 1; i++) {
              if (!current[pathParts[i]]) {
                current[pathParts[i]] = {};
              }
              current = current[pathParts[i]];
            }
            
            // Set the value
            current[pathParts[pathParts.length - 1]] = item.value;
          });
          
          setTranslations(customTranslations);
        } else {
          // If no custom translations found, use original
          setTranslations({ ...originalTranslation });
        }
      } catch (error) {
        console.error('Error in loadTranslations:', error);
        setTranslations({ ...originalTranslation });
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, [language, originalTranslation, toast]);

  // Function to flatten the nested translations object into key-value pairs
  const flattenTranslations = (obj: any, prefix = ''): { key: string; value: string }[] => {
    let result: { key: string; value: string }[] = [];
    
    for (const key in obj) {
      const value = obj[key];
      const newKey = prefix ? `${prefix}.${key}` : key;
      
      if (typeof value === 'object' && value !== null) {
        result = [...result, ...flattenTranslations(value, newKey)];
      } else {
        result.push({ key: newKey, value });
      }
    }
    
    return result;
  };

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

  // Function to save changes to Supabase
  const saveChangesToSupabase = async () => {
    setIsSaving(true);
    try {
      const flatTranslations = flattenTranslations(translations);
      
      // For each flattened translation, upsert it to Supabase
      const promises = flatTranslations.map(({ key, value }) => 
        supabase
          .from('translations')
          .upsert({
            language,
            namespace: 'translation',
            key,
            value
          }, {
            onConflict: 'language,namespace,key'
          })
      );
      
      await Promise.all(promises);
      
      // Update the translations in i18n
      i18n.addResourceBundle(language, 'translation', translations, true, true);
      
      toast({
        title: "Changes Saved",
        description: `The ${language === 'en' ? 'English' : 'Lithuanian'} translations have been updated and saved to database`,
        variant: "default",
      });
    } catch (error) {
      console.error('Error saving translations:', error);
      toast({
        title: "Error Saving Translations",
        description: "There was a problem saving your translations.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  // Function to reset translations to original
  const resetTranslations = async () => {
    setIsSaving(true);
    try {
      // Delete all custom translations for this language
      await supabase
        .from('translations')
        .delete()
        .eq('language', language);
      
      // Reset to original translations
      setTranslations({ ...originalTranslation });
      
      // Update the translations in i18n
      i18n.addResourceBundle(language, 'translation', originalTranslation, true, true);
      
      toast({
        title: "Translations Reset",
        description: `The ${language === 'en' ? 'English' : 'Lithuanian'} translations have been reset to default`,
        variant: "default",
      });
    } catch (error) {
      console.error('Error resetting translations:', error);
      toast({
        title: "Error Resetting Translations",
        description: "There was a problem resetting your translations.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
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

  // Get all top-level keys from the translation object for tabs
  const mainSections = Object.keys(translations);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-theme-navy dark:text-theme-lightnavy" />
        <span className="ml-2">Loading translations...</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex space-x-2 justify-end mb-4">
        <Button 
          onClick={resetTranslations}
          variant="outline" 
          className="flex items-center gap-1"
          disabled={isSaving}
        >
          {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCcw size={16} />}
          Reset to Original
        </Button>
        <Button 
          onClick={saveChangesToSupabase}
          className="bg-theme-navy dark:bg-theme-lightnavy hover:bg-theme-marine dark:hover:bg-theme-lightmarine flex items-center gap-1"
          disabled={isSaving}
        >
          {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save size={16} />}
          Save Changes
        </Button>
      </div>
      
      <Tabs defaultValue="all">
        <TabsList className="w-full mb-4 grid grid-cols-3 md:grid-cols-7">
          <TabsTrigger value="all">All</TabsTrigger>
          {mainSections.map(section => (
            <TabsTrigger key={section} value={section}>{section.charAt(0).toUpperCase() + section.slice(1)}</TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value="all" className="border rounded-md">
          <Accordion type="multiple" className="w-full">
            {renderTranslationFields(translations)}
          </Accordion>
        </TabsContent>
        
        {mainSections.map(section => (
          <TabsContent key={section} value={section} className="border rounded-md">
            <Accordion type="multiple" className="w-full">
              {renderTranslationFields(translations[section], [section])}
            </Accordion>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default AdminLanguageEditor;
