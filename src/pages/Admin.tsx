import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Globe, Languages, Loader2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdminLanguageEditor from '@/components/AdminLanguageEditor';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { language } = useLanguage();

  // Check admin role server-side via user_roles table
  const checkAdminRole = async (userId: string): Promise<boolean> => {
    const { data, error } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', userId)
      .eq('role', 'admin')
      .maybeSingle();
    if (error) {
      console.error('Role check error:', error);
      return false;
    }
    return !!data;
  };

  useEffect(() => {
    let mounted = true;

    // Subscribe to auth changes first to avoid missed events
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return;
      if (session?.user) {
        setIsAuthenticated(true);
        // Defer DB call to avoid deadlocks inside the callback
        setTimeout(async () => {
          const admin = await checkAdminRole(session.user.id);
          if (mounted) setIsAdmin(admin);
        }, 0);
      } else {
        setIsAuthenticated(false);
        setIsAdmin(false);
      }
    });

    // Then check existing session
    supabase.auth.getSession().then(async ({ data }) => {
      if (!mounted) return;
      if (data.session?.user) {
        setIsAuthenticated(true);
        const admin = await checkAdminRole(data.session.user.id);
        if (mounted) setIsAdmin(admin);
      }
      if (mounted) setIsLoading(false);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSigningIn(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        toast({
          title: t('admin.loginFailed'),
          description: error.message,
          variant: 'destructive',
        });
        return;
      }
      toast({
        title: t('admin.loginSuccess'),
        description: t('admin.welcomeMessage'),
      });
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
    setIsAdmin(false);
    toast({ title: 'Logged Out', description: t('admin.logoutMessage') });
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
                  <Input
                    type="email"
                    placeholder="admin@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                    className="form-input"
                  />
                  <Input
                    type="password"
                    placeholder={t('admin.password')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                    className="form-input"
                  />
                  <Button
                    type="submit"
                    disabled={isSigningIn}
                    className="w-full bg-theme-navy dark:bg-theme-lightnavy hover:bg-theme-marine dark:hover:bg-theme-lightmarine"
                  >
                    {isSigningIn ? <Loader2 className="h-4 w-4 animate-spin" /> : t('admin.loginButton')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : !isAdmin ? (
            <Card className="max-w-md mx-auto mt-10">
              <CardHeader>
                <CardTitle>Access denied</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Your account does not have admin privileges. Contact the site owner to be granted the admin role.
                </p>
                <Button onClick={handleLogout} variant="outline" className="w-full">
                  Sign out
                </Button>
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
