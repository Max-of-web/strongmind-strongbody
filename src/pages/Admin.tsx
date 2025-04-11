
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Globe, CheckCircle, Languages } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdminLanguageEditor from '@/components/AdminLanguageEditor';
import { useLanguage } from '@/hooks/useLanguage';

const Admin = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { language } = useLanguage();

  // Simple authentication check - in a real app, use proper auth
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { // In a real app, this would be a proper auth system
      setIsAuthenticated(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the admin panel",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Incorrect password",
        variant: "destructive",
      });
    }
  };

  // Check if user is already logged in (from localStorage in this demo)
  useEffect(() => {
    const authStatus = localStorage.getItem('adminAuth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Save auth status to localStorage
  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem('adminAuth', 'true');
    }
  }, [isAuthenticated]);

  // Log out function
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuth');
    toast({
      title: "Logged Out",
      description: "You have been logged out of the admin panel",
    });
    navigate('/');
  };

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
                  Admin Login
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="password"
                      placeholder="Enter admin password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-input"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-theme-navy dark:bg-theme-lightnavy hover:bg-theme-marine dark:hover:bg-theme-lightmarine"
                  >
                    Login
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold flex items-center gap-2">
                  <Languages className="text-theme-tangerine dark:text-theme-lighttangerine" size={28} />
                  <span>Content Administration</span>
                </h1>
                <Button 
                  onClick={handleLogout}
                  variant="outline" 
                  className="border-theme-navy dark:border-theme-lightnavy text-theme-navy dark:text-theme-lightnavy"
                >
                  Logout
                </Button>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Languages className="text-theme-tangerine dark:text-theme-lighttangerine" size={24} />
                    Language Content Editor
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="en" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-4">
                      <TabsTrigger value="en" className="flex items-center gap-2">
                        <img src="/flag-en.svg" alt="English" className="w-5 h-5" onError={(e) => { e.currentTarget.src = "https://flagcdn.com/w40/us.png" }} />
                        English
                      </TabsTrigger>
                      <TabsTrigger value="lt" className="flex items-center gap-2">
                        <img src="/flag-lt.svg" alt="Lithuanian" className="w-5 h-5" onError={(e) => { e.currentTarget.src = "https://flagcdn.com/w40/lt.png" }} />
                        Lithuanian
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
                  Currently editing in: {language === 'en' ? 'English' : 'Lithuanian'} | 
                  Changes will be stored in local browser storage
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
