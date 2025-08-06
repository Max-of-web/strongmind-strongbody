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

type SubmissionPhase = 'idle' | 'validating' | 'saving-to-db' | 'sending-email' | 'success' | 'error';

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: ''
  });
  const [currentPhase, setCurrentPhase] = useState<SubmissionPhase>('idle');
  const [debugLog, setDebugLog] = useState<string[]>([]);
  const [lastError, setLastError] = useState<string | null>(null);

  const addDebugLog = (message: string) => {
    console.log(message);
    setDebugLog(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    addDebugLog(`📝 Field updated: ${field} = "${value}"`);
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDebugLog([]);
    setLastError(null);
    
    addDebugLog('🚀 PHASE 1: Form submission initiated');
    addDebugLog(`📋 Form data: ${JSON.stringify(formData, null, 2)}`);
    
    // PHASE 1: Validation
    setCurrentPhase('validating');
    if (!formData.name || !formData.email) {
      const errorMsg = 'Validation failed - missing required fields';
      addDebugLog(`❌ PHASE 1 FAILED: ${errorMsg}`);
      console.error(errorMsg);
      alert(`VALIDATION ERROR: ${errorMsg}`);
      setCurrentPhase('error');
      setLastError(errorMsg);
      return;
    }
    
    addDebugLog('✅ PHASE 1 SUCCESS: Validation passed');

    try {
      // PHASE 2: Save to Supabase
      setCurrentPhase('saving-to-db');
      addDebugLog('💾 PHASE 2: Starting database save operation...');
      
      const insertData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.company || null,
        notes: formData.notes || null
      };
      addDebugLog(`📊 Inserting data: ${JSON.stringify(insertData, null, 2)}`);

      const { data: contact, error: dbError } = await supabase
        .from('contacts')
        .insert([insertData])
        .select()
        .maybeSingle();

      addDebugLog(`💾 Database response - Contact: ${JSON.stringify(contact)}`);
      addDebugLog(`💾 Database response - Error: ${JSON.stringify(dbError)}`);

      if (dbError) {
        const errorMsg = `Database save failed: ${dbError.message}`;
        addDebugLog(`❌ PHASE 2 FAILED: ${errorMsg}`);
        console.error('Database error details:', dbError);
        alert(`DATABASE ERROR: ${errorMsg}`);
        setCurrentPhase('error');
        setLastError(errorMsg);
        return;
      }

      if (!contact) {
        const errorMsg = 'No contact returned from database - insert may have failed';
        addDebugLog(`❌ PHASE 2 FAILED: ${errorMsg}`);
        console.error(errorMsg);
        alert(`DATABASE ERROR: ${errorMsg}`);
        setCurrentPhase('error');
        setLastError(errorMsg);
        return;
      }

      addDebugLog(`🎉 PHASE 2 SUCCESS: Contact saved with ID: ${contact.id}`);
      
      // PHASE 3: Send email notification
      setCurrentPhase('sending-email');
      addDebugLog('📧 PHASE 3: Starting email notification...');
      addDebugLog(`📤 Email payload: ${JSON.stringify(formData, null, 2)}`);

      const { data: emailResult, error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      addDebugLog(`📧 Email function response - Data: ${JSON.stringify(emailResult)}`);
      addDebugLog(`📧 Email function response - Error: ${JSON.stringify(emailError)}`);

      if (emailError) {
        const errorMsg = `Email sending failed: ${emailError.message}`;
        addDebugLog(`❌ PHASE 3 FAILED: ${errorMsg}`);
        console.error('Email error details:', emailError);
        alert(`EMAIL ERROR: ${errorMsg} (Contact was saved to database)`);
        setCurrentPhase('error');
        setLastError(errorMsg);
        return;
      }

      // STRICT VALIDATION: Only treat as success if emailResult.success === true
      if (!emailResult || emailResult.success !== true) {
        const errorMsg = emailResult?.error || 'Email function returned invalid response or failed';
        addDebugLog(`❌ PHASE 3 FAILED: ${errorMsg}`);
        console.error('Email function error details:', emailResult);
        alert(`EMAIL ERROR: ${errorMsg} (Contact was saved to database)`);
        setCurrentPhase('error');
        setLastError(errorMsg);
        return;
      }

      addDebugLog('🎉 PHASE 3 SUCCESS: Email sent successfully');
      
      // PHASE 4: Success cleanup
      addDebugLog('🔄 PHASE 4: Resetting form...');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        notes: ''
      });
      addDebugLog('✅ PHASE 4 SUCCESS: Form reset completed');
      
      setCurrentPhase('success');
      toast.success('Contact submitted successfully! We will be in touch soon.');

    } catch (error: any) {
      const errorMsg = `Unexpected error: ${error.message}`;
      addDebugLog(`💥 SUBMISSION FAILED: ${errorMsg}`);
      console.error('Full error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
      alert(`UNEXPECTED ERROR: ${errorMsg}`);
      setCurrentPhase('error');
      setLastError(errorMsg);
    }
  };

  const getPhaseDisplay = () => {
    switch (currentPhase) {
      case 'validating': return '🔍 Validating form...';
      case 'saving-to-db': return '💾 Saving to database...';
      case 'sending-email': return '📧 Sending email...';
      case 'success': return '✅ Success!';
      case 'error': return `❌ Error: ${lastError}`;
      default: return '';
    }
  };

  const isSubmitting = currentPhase !== 'idle' && currentPhase !== 'success' && currentPhase !== 'error';

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>
            Get in touch and we will respond as soon as possible.
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              />
            </div>

            {/* Status Display */}
            {currentPhase !== 'idle' && (
              <div className={`p-3 rounded-md ${
                currentPhase === 'error' ? 'bg-destructive/10 text-destructive' :
                currentPhase === 'success' ? 'bg-green-100 text-green-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                <p className="font-medium">{getPhaseDisplay()}</p>
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? getPhaseDisplay() : 'Send Message'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Debug Log */}
      {debugLog.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Debug Log</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 p-3 rounded text-xs font-mono max-h-60 overflow-y-auto">
              {debugLog.map((log, index) => (
                <div key={index} className="mb-1">{log}</div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ContactForm;