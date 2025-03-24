
import { useState } from 'react';
import { toast } from 'sonner';
import { Shield } from 'lucide-react';
import { Check } from 'lucide-react';

const LeadCapture = () => {
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
    <div className="bg-coach-beige rounded-lg shadow-xl overflow-hidden">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Left Column - Content */}
        <div className="p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-coach-charcoal mb-4">
            Get Your Free Lower Back Pain Guide
          </h2>
          
          <p className="text-coach-charcoal mb-6">
            Lower back pain affects up to 80% of adults at some point in their lives.
            But you don't have to live with it.
          </p>
          
          <p className="text-coach-charcoal mb-6">
            In this comprehensive guide, I share the exact strategies I use with my clients to:
          </p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <Check className="text-coach-sage shrink-0 mt-1 mr-2" size={20} />
              <span className="text-coach-charcoal">Identify the root causes of your lower back pain</span>
            </li>
            <li className="flex items-start">
              <Check className="text-coach-sage shrink-0 mt-1 mr-2" size={20} />
              <span className="text-coach-charcoal">Implement immediate relief techniques</span>
            </li>
            <li className="flex items-start">
              <Check className="text-coach-sage shrink-0 mt-1 mr-2" size={20} />
              <span className="text-coach-charcoal">Strengthen key stabilizing muscles</span>
            </li>
            <li className="flex items-start">
              <Check className="text-coach-sage shrink-0 mt-1 mr-2" size={20} />
              <span className="text-coach-charcoal">Modify your daily activities to prevent reinjury</span>
            </li>
            <li className="flex items-start">
              <Check className="text-coach-sage shrink-0 mt-1 mr-2" size={20} />
              <span className="text-coach-charcoal">Develop a progressive exercise routine that's safe for your back</span>
            </li>
          </ul>
          
          <div className="flex items-center text-coach-charcoal text-sm mt-8 pt-6 border-t border-coach-charcoal border-opacity-20">
            <Shield className="mr-2 text-coach-sage" size={18} />
            <span>Your email is safe with me. I'll never share it with anyone else.</span>
          </div>
        </div>
        
        {/* Right Column - Form */}
        <div className="bg-coach-charcoal p-8 md:p-10 flex flex-col justify-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-coach-light mb-4">
              Fix Your Lower Back in 7 Steps
            </h3>
            
            <p className="text-coach-light text-opacity-90 mb-6">
              Get instant access to my proven guide for relieving lower back pain and preventing future injuries.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full p-3 rounded-md bg-coach-charcoal bg-opacity-70 border border-coach-light border-opacity-30 text-coach-light focus:outline-none focus:ring-2 focus:ring-coach-accent focus:border-transparent"
              />
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-coach-accent text-coach-charcoal font-semibold py-3 px-4 rounded-md hover:bg-opacity-90 transition-all duration-300 shadow-md"
              >
                {isSubmitting ? 'Sending...' : 'Download Free Guide'}
              </button>
              
              <p className="text-xs text-coach-light text-opacity-70 mt-4">
                By submitting, you agree to receive the PDF guide via email. You can unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadCapture;
