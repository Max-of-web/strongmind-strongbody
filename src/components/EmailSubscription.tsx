
import { useState } from 'react';
import { toast } from 'sonner';

const EmailSubscription = () => {
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
    <div className="max-w-md mx-auto">
      <h3 className="text-xl md:text-2xl font-semibold mb-4 text-elegant-charcoal">
        Get Your Free Guide Now
      </h3>
      <p className="mb-6 text-elegant-charcoal">
        Enter your email to receive "Fix Your Lower Back in 7 Steps" PDF guide immediately.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          className="form-input bg-white/80 border border-elegant-darksilver text-elegant-charcoal"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`cta-button-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Sending...' : 'Download Free Guide'}
        </button>
      </form>
    </div>
  );
};

export default EmailSubscription;
