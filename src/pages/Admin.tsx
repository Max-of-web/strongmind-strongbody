
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Globe, CheckCircle, Languages, Loader2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdminLanguageEditor from '@/components/AdminLanguageEditor';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';

const Admin = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { language } = useLanguage();

  // Simple authentication check - initially check localStorage for auth status
  useEffect(() => {
    const checkAuthStatus = async () => {
      setIsLoading(true);
      
      // First check if we have a Supabase session
      const { data } = await supabase.auth.getSession();
      
      if (data.session) {
        setIsAuthenticated(true);
      } else {
        // Fallback to localStorage for backward compatibility
        const authStatus = localStorage.getItem('adminAuth');
        if (authStatus === 'true') {
          setIsAuthenticated(true);
        }
      }
      
      setIsLoading(false);
    };
    
    checkAuthStatus();
  }, []);

  // Function to handle login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple password check - in a real app, use proper auth
    if (password === 'admin123') {
      // For demo purposes, we'll use anonymous sign-in to Supabase
      try {
        const { error } = await supabase.auth.signInWithPassword({
          email: 'admin@example.com',
          password: password,
        });
        
        if (error) {
          // If Supabase auth fails, fallback to localStorage
          localStorage.setItem('adminAuth', 'true');
        }
        
        setIsAuthenticated(true);
        
        toast({
          title: t('admin.loginSuccess'),
          description: t('admin.welcomeMessage'),
        });
      } catch (error) {
        console.error('Auth error:', error);
        
        // Fallback to localStorage
        localStorage.setItem('adminAuth', 'true');
        setIsAuthenticated(true);
        
        toast({
          title: t('admin.loginSuccess'),
          description: t('admin.welcomeMessage'),
        });
      }
    } else {
      toast({
        title: t('admin.loginFailed'),
        description: t('admin.incorrectPassword'),
        variant: "destructive",
      });
    }
  };

  // Log out function
  const handleLogout = async () => {
    try {
      // Sign out from Supabase
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
    
    // Clear localStorage fallback
    localStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
    
    toast({
      title: "Logged Out",
      description: t('admin.logoutMessage'),
    });
    
    navigate('/');
  };

  if (isLoading) {
    return (
      <>
        <Header />
        <main className="section-padding min-h-screen bg-background">
          <div className="container-width flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-theme-navy dark:text-theme-lightnavy" />
            <span className="ml-2">Loading...</span>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="section-padding min-h-screen bg-background">
        <div className="container-width">
          {!isAuthenticated ? (
            <Card className="max-w-md mx-auto mt-10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="text-theme-navy dark:text-theme-lightnavy" size={24} />
                  {t('admin.login')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="password"
                      placeholder={t('admin.password')}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-input"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-theme-navy dark:bg-theme-lightnavy hover:bg-theme-marine dark:hover:bg-theme-lightmarine"
                  >
                    {t('admin.loginButton')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold flex items-center gap-2">
                  <Languages className="text-theme-tangerine dark:text-theme-lighttangerine" size={28} />
                  <span>{t('admin.title')}</span>
                </h1>
                <Button 
                  onClick={handleLogout}
                  variant="outline" 
                  className="border-theme-navy dark:border-theme-lightnavy text-theme-navy dark:text-theme-lightnavy"
                >
                  {t('admin.logout')}
                </Button>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Languages className="text-theme-tangerine dark:text-theme-lighttangerine" size={24} />
                    {t('admin.contentEditor')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="en" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-4">
                      <TabsTrigger value="en" className="flex items-center gap-2">
                        <img src="/flag-en.svg" alt="English" className="w-5 h-5" onError={(e) => { e.currentTarget.src = "https://flagcdn.com/w40/us.png" }} />
                        {t('admin.english')}
                      </TabsTrigger>
                      <TabsTrigger value="lt" className="flex items-center gap-2">
                        <img src="/flag-lt.svg" alt="Lithuanian" className="w-5 h-5" onError={(e) => { e.currentTarget.src = "https://flagcdn.com/w40/lt.png" }} />
                        {t('admin.lithuanian')}
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="en">
                      <AdminLanguageEditor language="en" />
                    </TabsContent>
                    <TabsContent value="lt">
                      <AdminLanguageEditor language="lt" />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
              
              <div className="text-center p-4 mt-8 rounded-lg bg-muted">
                <p className="text-muted-foreground text-sm">
                  {t('admin.currentLanguage')}: {language === 'en' ? t('admin.english') : t('admin.lithuanian')} | 
                  {t('admin.storageNotice')}
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Admin;
