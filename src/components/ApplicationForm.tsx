
import { useState } from 'react';
import { toast } from 'sonner';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    goal: '',
    challenge: '',
    readyForChange: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
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
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-coach-navy bg-opacity-40 p-6 md:p-8 rounded-lg border border-coach-light border-opacity-10">
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
  );
};

export default ApplicationForm;
