
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Bot, BrainCircuit, CheckCircle, Clock, MessageSquare } from 'lucide-react';

const PersonalCoachAI = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-muted/30 py-16 dark:bg-muted/10">
      <div className="container-width">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">{t('coaching.personalCoachAI.sectionTitle')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('coaching.personalCoachAI.intro')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-background shadow-md hover:shadow-lg transition-shadow border-theme-navy/20 dark:border-theme-lightnavy/20">
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-full bg-theme-navy/10 dark:bg-theme-lightnavy/10 flex items-center justify-center mb-2">
                <MessageSquare className="h-6 w-6 text-theme-navy dark:text-theme-lightnavy" />
              </div>
              <CardTitle className="text-xl">24/7 Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {t('coaching.personalCoachAI.features.0')}
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-background shadow-md hover:shadow-lg transition-shadow border-theme-navy/20 dark:border-theme-lightnavy/20">
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-full bg-theme-navy/10 dark:bg-theme-lightnavy/10 flex items-center justify-center mb-2">
                <CheckCircle className="h-6 w-6 text-theme-navy dark:text-theme-lightnavy" />
              </div>
              <CardTitle className="text-xl">Progress Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {t('coaching.personalCoachAI.features.1')}
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-background shadow-md hover:shadow-lg transition-shadow border-theme-navy/20 dark:border-theme-lightnavy/20">
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-full bg-theme-navy/10 dark:bg-theme-lightnavy/10 flex items-center justify-center mb-2">
                <Bot className="h-6 w-6 text-theme-navy dark:text-theme-lightnavy" />
              </div>
              <CardTitle className="text-xl">Form Guidance</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {t('coaching.personalCoachAI.features.2')}
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-background shadow-md hover:shadow-lg transition-shadow border-theme-navy/20 dark:border-theme-lightnavy/20">
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-full bg-theme-navy/10 dark:bg-theme-lightnavy/10 flex items-center justify-center mb-2">
                <Clock className="h-6 w-6 text-theme-navy dark:text-theme-lightnavy" />
              </div>
              <CardTitle className="text-xl">Motivation & Accountability</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {t('coaching.personalCoachAI.features.3')}
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-background shadow-md hover:shadow-lg transition-shadow border-theme-navy/20 dark:border-theme-lightnavy/20">
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-full bg-theme-navy/10 dark:bg-theme-lightnavy/10 flex items-center justify-center mb-2">
                <BrainCircuit className="h-6 w-6 text-theme-navy dark:text-theme-lightnavy" />
              </div>
              <CardTitle className="text-xl">Custom Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {t('coaching.personalCoachAI.features.4')}
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-muted p-4 rounded-lg max-w-xl mx-auto">
            <AlertCircle className="h-5 w-5 text-theme-navy dark:text-theme-lightnavy" />
            <p className="text-sm text-muted-foreground">
              {t('coaching.personalCoachAI.disclaimer')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalCoachAI;
