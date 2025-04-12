
import { useState } from 'react';
import { Check, Shield } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from "@/components/ui/button";

const LowerBackGuide = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("Success! Check your email for the PDF guide.", {
        description: "We've sent you the 'Fix Your Lower Back in 7 Steps' guide."
      });
      setEmail('');
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section id="free-guide" className="py-20 bg-slate-100 dark:bg-slate-900">
      <div className="container-width px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          {/* Left column - Guide information */}
          <div className="md:w-1/2 bg-white dark:bg-slate-800 rounded-md shadow-md px-[35px] py-[30px]">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-white">
              Get Your Free Lower Back Pain Guide
            </h2>
            <p className="mb-6 text-slate-700 dark:text-slate-200 text-lg">
              Lower back pain affects up to 80% of adults at some point in their lives. 
              But you don't have to live with it.
            </p>
            <p className="mb-8 text-slate-700 dark:text-slate-200 text-lg">
              In this comprehensive guide, I share the exact strategies I use with my clients to:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check size={22} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                <span className="text-slate-700 dark:text-slate-200">Identify the root causes of your lower back pain</span>
              </li>
              <li className="flex items-start">
                <Check size={22} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                <span className="text-slate-700 dark:text-slate-200">Implement immediate relief techniques</span>
              </li>
              <li className="flex items-start">
                <Check size={22} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                <span className="text-slate-700 dark:text-slate-200">Strengthen key stabilizing muscles</span>
              </li>
              <li className="flex items-start">
                <Check size={22} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                <span className="text-slate-700 dark:text-slate-200">Modify your daily activities to prevent reinjury</span>
              </li>
              <li className="flex items-start">
                <Check size={22} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                <span className="text-slate-700 dark:text-slate-200">Develop a progressive exercise routine that's safe for your back</span>
              </li>
            </ul>

            <div className="flex items-center text-sm mt-10 border-t border-slate-200 dark:border-slate-700 pt-4">
              <Shield size={18} className="mr-2 text-theme-tangerine" />
              <span className="text-slate-600 dark:text-slate-300">Your email is safe with me. I'll never share it with anyone else.</span>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="md:w-1/2">
            <div className="h-full flex flex-col bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-white">
                Fix Your Lower Back in 7 Steps
              </h3>
              <p className="mb-6 text-slate-700 dark:text-slate-200">
                Get instant access to my proven guide for relieving lower back pain and preventing future injuries.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-auto">
                <div>
                  <input 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="Your email address" 
                    required 
                    className="w-full p-3 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white border border-slate-300 dark:border-slate-600 placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-theme-tangerine focus:border-transparent"
                  />
                </div>
                
                <Button
                  type="submit" 
                  disabled={isSubmitting}
                  variant="cta"
                  className="w-full px-4 py-3 h-auto"
                >
                  {isSubmitting ? 'Sending...' : 'Download Free Guide'}
                </Button>

                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                  By submitting, you agree to receive the PDF guide via email. You can unsubscribe at any time.
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
