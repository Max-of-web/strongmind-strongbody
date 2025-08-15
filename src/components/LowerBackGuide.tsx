
import { Check, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from 'react';
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const LowerBackGuide = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subscribe: true,
    gender: 'male',
    workExperience: 'one-year'
  });

  // Get the benefits array from translations with fallback
  let benefits: string[] = [];
  try {
    const benefitsData = t('homepage.lowerBackGuide.benefits', { returnObjects: true });
    benefits = Array.isArray(benefitsData) ? benefitsData : [];
  } catch (error) {
    console.error('Error loading benefits:', error);
    // Fallback benefits
    benefits = [
      'Reduced pain and discomfort through proper movement patterns',
      'Smarter training approach that adapts to your energy levels',
      'Sustainable habits that fit into your lifestyle',
      'Stronger body awareness and connection',
      'Increased confidence in your movement abilities'
    ];
  }

  return (
    <section id="free-guide" className="py-20 bg-slate-100 dark:bg-slate-900">
      <div className="container-width px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          {/* Left column - Guide information */}
          <div className="md:w-1/2 bg-white dark:bg-slate-800 rounded-md shadow-md px-[35px] py-[30px]">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-white">
              {t('homepage.lowerBackGuide.sectionTitle')}
            </h2>
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check size={22} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                  <span className="text-slate-700 dark:text-slate-200">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center text-sm mt-10 border-t border-slate-200 dark:border-slate-700 pt-4">
              <Shield size={18} className="mr-2 text-theme-tangerine" />
              <span className="text-slate-600 dark:text-slate-300">{t('homepage.lowerBackGuide.privacyNote')}</span>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="md:w-1/2">
            <div className="flex flex-col bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-md p-4">
              <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white">
                {t('homepage.lowerBackGuide.sectionTitle')}
              </h3>
              
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                {t('homepage.lowerBackGuide.intro')}
              </p>

              <form 
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  
                  try {
                    // Submit to Getform
                    const getformData = new FormData();
                    getformData.append('name', formData.name);
                    getformData.append('email', formData.email);
                    getformData.append('message', formData.message);
                    getformData.append('subscribe', formData.subscribe ? 'yes' : 'no');
                    getformData.append('gender', formData.gender);
                    getformData.append('work-experience', formData.workExperience);
                    
                    const getformResponse = await fetch('https://getform.io/f/bxozjona', {
                      method: 'POST',
                      body: getformData,
                    });
                    
                    // Save to Supabase
                    const { error: supabaseError } = await supabase
                      .from('back_pain_guide_submissions')
                      .insert({
                        name: formData.name,
                        email: formData.email,
                        message: formData.message,
                        subscribe: formData.subscribe,
                        gender: formData.gender,
                        work_experience: formData.workExperience
                      });
                    
                    if (getformResponse.ok && !supabaseError) {
                      toast.success(t('homepage.lowerBackGuide.successMessage') || 'Mes išsiuntėme jums gidą. Sėkmė! Patikrinkite savo el. paštą.');
                      setFormData({
                        name: '',
                        email: '',
                        message: '',
                        subscribe: true,
                        gender: 'male',
                        workExperience: 'one-year'
                      });
                    } else {
                      throw new Error('Form submission failed');
                    }
                  } catch (error) {
                    console.error('Form submission error:', error);
                    toast.error(t('homepage.lowerBackGuide.errorMessage') || 'Klaida išsiunčiant. Bandykite dar kartą.');
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
                className="flex flex-col space-y-4"
              >
                {/* Hidden Honeypot input to prevent spam */}
                <input 
                  type="hidden" 
                  name="_gotcha" 
                  style={{ display: 'none !important' } as React.CSSProperties}
                />
                
                {/* Name Field */}
                <div>
                  <Label htmlFor="name" className="text-sm font-medium mb-1 block">
                    Name
                  </Label>
                  <Input 
                    id="name"
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required 
                    disabled={isSubmitting}
                    className="w-full"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <Label htmlFor="email" className="text-sm font-medium mb-1 block">
                    Email
                  </Label>
                  <Input 
                    id="email"
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required 
                    disabled={isSubmitting}
                    className="w-full"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <Label htmlFor="message" className="text-sm font-medium mb-1 block">
                    Message
                  </Label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    disabled={isSubmitting}
                    className="w-full min-h-[80px]"
                    placeholder="Tell us about your back pain concerns..."
                  />
                </div>

                {/* Subscribe Checkbox */}
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="subscribe"
                    name="subscribe"
                    checked={formData.subscribe}
                    onCheckedChange={(checked) => setFormData({...formData, subscribe: !!checked})}
                    disabled={isSubmitting}
                  />
                  <Label htmlFor="subscribe" className="text-sm">
                    Subscribe to our newsletter
                  </Label>
                </div>

                {/* Gender Radio Buttons */}
                <div>
                  <Label className="text-sm font-medium mb-2 block">
                    Gender
                  </Label>
                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        id="male"
                        name="gender" 
                        value="male" 
                        checked={formData.gender === 'male'}
                        onChange={(e) => setFormData({...formData, gender: e.target.value})}
                        disabled={isSubmitting}
                        className="w-4 h-4 text-theme-tangerine"
                      />
                      <Label htmlFor="male" className="text-sm">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        id="female"
                        name="gender" 
                        value="female" 
                        checked={formData.gender === 'female'}
                        onChange={(e) => setFormData({...formData, gender: e.target.value})}
                        disabled={isSubmitting}
                        className="w-4 h-4 text-theme-tangerine"
                      />
                      <Label htmlFor="female" className="text-sm">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        id="other"
                        name="gender" 
                        value="other" 
                        checked={formData.gender === 'other'}
                        onChange={(e) => setFormData({...formData, gender: e.target.value})}
                        disabled={isSubmitting}
                        className="w-4 h-4 text-theme-tangerine"
                      />
                      <Label htmlFor="other" className="text-sm">Other</Label>
                    </div>
                  </div>
                </div>

                {/* Work Experience Select */}
                <div>
                  <Label htmlFor="workExperience" className="text-sm font-medium mb-1 block">
                    Work Experience
                  </Label>
                  <select 
                    id="workExperience"
                    name="work-experience"
                    value={formData.workExperience}
                    onChange={(e) => setFormData({...formData, workExperience: e.target.value})}
                    disabled={isSubmitting}
                    className="w-full p-2 text-sm rounded-md bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent disabled:opacity-50"
                  >
                    <option value="one-year">0-1 years</option>
                    <option value="one-five-years">1-5 years</option>
                  </select>
                </div>
                
                <Button
                  type="submit" 
                  variant="cta"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 text-sm h-auto"
                >
                  {isSubmitting ? (t('homepage.lowerBackGuide.sendingText') || 'Siunčiama...') : t('homepage.lowerBackGuide.buttonText')}
                </Button>

                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {t('homepage.lowerBackGuide.disclaimer')}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LowerBackGuide;
