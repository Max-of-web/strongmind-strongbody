
import { useState } from 'react';
import { Check, Shield } from 'lucide-react';
import { toast } from 'sonner';

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
    <section className="py-20 bg-slate-100 dark:bg-theme-darknavy">
      <div className="container-width px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          {/* Left column - Guide information */}
          <div className="md:w-1/2 bg-white dark:bg-slate-800 rounded-md shadow-md px-[35px] py-[30px]">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-theme-darknavy dark:text-white">
              Get Your Free Lower Back Pain Guide
            </h2>
            <p className="mb-6 text-slate-700 dark:text-white text-lg">
              Lower back pain affects up to 80% of adults at some point in their lives. 
              But you don't have to live with it.
            </p>
            <p className="mb-8 text-slate-700 dark:text-white text-lg">
              In this comprehensive guide, I share the exact strategies I use with my clients to:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check size={22} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                <span className="text-slate-700 dark:text-white">Identify the root causes of your lower back pain</span>
              </li>
              <li className="flex items-start">
                <Check size={22} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                <span className="text-slate-700 dark:text-white">Implement immediate relief techniques</span>
              </li>
              <li className="flex items-start">
                <Check size={22} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                <span className="text-slate-700 dark:text-white">Strengthen key stabilizing muscles</span>
              </li>
              <li className="flex items-start">
                <Check size={22} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                <span className="text-slate-700 dark:text-white">Modify your daily activities to prevent reinjury</span>
              </li>
              <li className="flex items-start">
                <Check size={22} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                <span className="text-slate-700 dark:text-white">Develop a progressive exercise routine that's safe for your back</span>
              </li>
            </ul>

            <div className="flex items-center text-sm mt-10 border-t border-slate-200 dark:border-slate-700 pt-4">
              <Shield size={18} className="mr-2 text-theme-tangerine" />
              <span className="text-slate-700 dark:text-white">Your email is safe with me. I'll never share it with anyone else.</span>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="md:w-1/2">
            <div className="h-full flex flex-col bg-white dark:bg-slate-800 border border-slate-200 dark:border-theme-lightnavy/30 rounded-md shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-4 text-theme-darknavy dark:text-white">
                Fix Your Lower Back in 7 Steps
              </h3>
              <p className="mb-6 text-slate-700 dark:text-white">
                Get instant access to my proven guide for relieving lower back pain and preventing future injuries.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-auto">
                <input 
                  type="email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  placeholder="Your email address" 
                  required 
                  className="w-full p-3 rounded-md bg-slate-100 dark:bg-theme-darknavy/70 text-slate-800 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-300 border border-slate-200 dark:border-theme-lightnavy/30 focus:outline-none focus:ring-2 focus:ring-theme-tangerine focus:border-transparent"
                />
                
                <div className="bg-white dark:bg-transparent p-1 rounded-md">
                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full bg-theme-tangerine hover:bg-theme-lighttangerine text-white font-semibold px-4 py-3 rounded-md transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Download Free Guide'}
                  </button>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">
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
