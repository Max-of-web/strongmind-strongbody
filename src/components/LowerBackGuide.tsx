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
  return <section className="py-20 bg-elegant-offwhite">
      <div className="container-width px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          {/* Left column - Guide information */}
          <div className="md:w-1/2 bg-slate-900 rounded-md mx-0 px-[35px] py-[30px]">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-elegant-charcoal">
              Get Your Free Lower Back Pain Guide
            </h2>
            <p className="mb-6 text-elegant-charcoal text-lg">
              Lower back pain affects up to 80% of adults at some point in their lives. 
              But you don't have to live with it.
            </p>
            <p className="mb-8 text-elegant-charcoal text-lg">
              In this comprehensive guide, I share the exact strategies I use with my clients to:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check size={22} className="text-elegant-gold shrink-0 mt-1 mr-3" />
                <span className="text-elegant-charcoal">Identify the root causes of your lower back pain</span>
              </li>
              <li className="flex items-start">
                <Check size={22} className="text-elegant-gold shrink-0 mt-1 mr-3" />
                <span className="text-elegant-charcoal">Implement immediate relief techniques</span>
              </li>
              <li className="flex items-start">
                <Check size={22} className="text-elegant-gold shrink-0 mt-1 mr-3" />
                <span className="text-elegant-charcoal">Strengthen key stabilizing muscles</span>
              </li>
              <li className="flex items-start">
                <Check size={22} className="text-elegant-gold shrink-0 mt-1 mr-3" />
                <span className="text-elegant-charcoal">Modify your daily activities to prevent reinjury</span>
              </li>
              <li className="flex items-start">
                <Check size={22} className="text-elegant-gold shrink-0 mt-1 mr-3" />
                <span className="text-elegant-charcoal">Develop a progressive exercise routine that's safe for your back</span>
              </li>
            </ul>

            <div className="flex items-center text-elegant-charcoal opacity-70 text-sm mt-10 border-t border-elegant-darksilver pt-4">
              <Shield size={18} className="mr-2 text-elegant-gold" />
              <span className="text-white">Your email is safe with me. I'll never share it with anyone else.</span>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="md:w-1/2">
            <div className="elegant-card h-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-elegant-light">
                Fix Your Lower Back in 7 Steps
              </h3>
              <p className="mb-6 text-elegant-silver">
                Get instant access to my proven guide for relieving lower back pain and preventing future injuries.
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-auto">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address" required className="form-input" />
                <button type="submit" disabled={isSubmitting} className={`cta-button-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                  {isSubmitting ? 'Sending...' : 'Download Free Guide'}
                </button>
                <p className="text-xs text-elegant-darksilver mt-2">
                  By submitting, you agree to receive the PDF guide via email. You can unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default LowerBackGuide;