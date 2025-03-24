
import { useState } from 'react';
import { toast } from 'sonner';
import { Calendar, MessageSquare } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const EmailSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYouDialog, setShowThankYouDialog] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Insert into Supabase
      const { error } = await supabase
        .from('email_subscriptions')
        .insert([{ email }]);
      
      if (error) throw error;
      
      toast.success("Success! Check your email for the PDF guide.", {
        description: "We've sent you the 'Fix Your Lower Back in 7 Steps' guide."
      });

      setEmail('');
      setShowThankYouDialog(true);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast.error("Something went wrong", {
        description: error.message || "Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
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
            className={`bg-elegant-navy text-elegant-light font-semibold px-6 py-3 rounded-md transition-all duration-300 hover:bg-opacity-90 hover:translate-y-[-2px] shadow-md ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Sending...' : 'Download Free Guide'}
          </button>
        </form>
      </div>

      <Dialog open={showThankYouDialog} onOpenChange={setShowThankYouDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">Thank You for Subscribing!</DialogTitle>
            <DialogDescription>
              Your guide has been sent to your email. Would you like to take the next step in your fitness journey?
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <p>Connect with me directly for personalized guidance:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="https://wa.me/37067951040" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 text-white font-semibold px-4 py-3 rounded-md hover:bg-green-700 transition-colors"
              >
                <MessageSquare size={18} />
                <span>WhatsApp Chat</span>
              </a>
              <a 
                href="https://calendly.com/lipskis-paulius/asmenine-treniruote" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-elegant-navy text-white font-semibold px-4 py-3 rounded-md hover:bg-opacity-90 transition-colors"
              >
                <Calendar size={18} />
                <span>Book a Call</span>
              </a>
            </div>
          </div>
          <DialogFooter>
            <button 
              onClick={() => setShowThankYouDialog(false)} 
              className="w-full sm:w-auto text-elegant-charcoal bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md transition-colors"
            >
              Close
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EmailSubscription;
