
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

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    goal: '',
    challenge: '',
    readyForChange: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYouDialog, setShowThankYouDialog] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Insert into Supabase
      const { error } = await supabase
        .from('coaching_applications')
        .insert([{
          name: formData.name,
          email: formData.email,
          goal: formData.goal,
          challenge: formData.challenge,
          ready_for_change: formData.readyForChange
        }]);
      
      if (error) throw error;
      
      toast.success("Application submitted successfully!", {
        description: "I'll contact you soon to discuss next steps."
      });

      setFormData({
        name: '',
        email: '',
        goal: '',
        challenge: '',
        readyForChange: false
      });
      
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
      <div className="bg-elegant-charcoal bg-opacity-40 p-6 md:p-8 rounded-lg border border-elegant-light border-opacity-10">
        <h3 className="text-2xl font-semibold mb-6">
          Apply for 1-on-1 Coaching
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          
          <div>
            <label htmlFor="goal" className="block mb-2">
              What is your main goal?
            </label>
            <textarea
              id="goal"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              required
              rows={3}
              className="form-input"
            />
          </div>
          
          <div>
            <label htmlFor="challenge" className="block mb-2">
              What is your current challenge?
            </label>
            <textarea
              id="challenge"
              name="challenge"
              value={formData.challenge}
              onChange={handleChange}
              required
              rows={3}
              className="form-input"
            />
          </div>
          
          <div className="flex items-start">
            <input
              type="checkbox"
              id="readyForChange"
              name="readyForChange"
              checked={formData.readyForChange}
              onChange={handleCheckboxChange}
              required
              className="mt-1 mr-3"
            />
            <label htmlFor="readyForChange">
              I am ready to commit to a structured program and make changes to achieve my goals.
            </label>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`cta-button-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>

      <Dialog open={showThankYouDialog} onOpenChange={setShowThankYouDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">Application Received!</DialogTitle>
            <DialogDescription>
              Thank you for your interest in personal coaching. I'll review your application and get back to you soon.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <p>If you'd like to speed up the process, you can connect with me directly:</p>
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

export default ApplicationForm;
