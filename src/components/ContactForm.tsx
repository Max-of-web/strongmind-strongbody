import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  notes?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    console.log(`📝 Field updated: ${field} = "${value}"`);
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('🚀 STEP 1: Form submission initiated');
    console.log('📋 Form data received:', formData);
    
    // Validation
    if (!formData.name || !formData.email) {
      console.log('❌ STEP 2: Validation failed - missing required fields');
      toast.error('Please fill in all required fields');
      return;
    }
    
    console.log('✅ STEP 2: Validation passed');
    setIsSubmitting(true);

    try {
      // Step 3: Save to Supabase
      console.log('💾 STEP 3: Starting database save operation...');
      console.log('📊 Data being inserted:', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.company || null,
        notes: formData.notes || null
      });

      const { data: contact, error: dbError } = await supabase
        .from('contacts')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          company: formData.company || null,
          notes: formData.notes || null
        }])
        .select()
        .maybeSingle();

      console.log('💾 STEP 3 RESULT: Database operation completed');
      console.log('✅ Saved contact:', contact);
      console.log('❌ Database error:', dbError);

      if (dbError) {
        console.error('💥 STEP 3 FAILED: Database error details:', dbError);
        throw new Error(`Database save failed: ${dbError.message}`);
      }

      if (!contact) {
        console.error('💥 STEP 3 FAILED: No contact returned from database');
        throw new Error('Contact was not saved to database');
      }

      console.log('🎉 STEP 3 SUCCESS: Contact saved with ID:', contact.id);
      
      // Step 4: Send email notification
      console.log('📧 STEP 4: Starting email notification...');
      console.log('📤 Email payload:', formData);

      const { data: emailResult, error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      console.log('📧 STEP 4 RESULT: Email function completed');
      console.log('✅ Email result:', emailResult);
      console.log('❌ Email error:', emailError);

      if (emailError) {
        console.error('💥 STEP 4 FAILED: Email error details:', emailError);
        toast.error('Contact saved but email notification failed');
      } else {
        console.log('🎉 STEP 4 SUCCESS: Email sent successfully');
        toast.success('Contact submitted successfully! We\'ll be in touch soon.');
      }

      // Step 5: Reset form
      console.log('🔄 STEP 5: Resetting form...');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        notes: ''
      });
      console.log('✅ STEP 5 SUCCESS: Form reset completed');

    } catch (error: any) {
      console.error('💥 SUBMISSION FAILED: Final error catch:', error);
      console.error('🔍 Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
      toast.error(error.message || 'Failed to submit contact form');
    } finally {
      console.log('🏁 FINAL STEP: Resetting submission state');
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>
          Get in touch and we'll respond as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              placeholder="Your full name"
            />
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div>
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              placeholder="Your company name"
            />
          </div>

          <div>
            <Label htmlFor="notes">Message</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              placeholder="Tell us how we can help you..."
              rows={4}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Send Message'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;