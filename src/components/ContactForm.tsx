import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

const ContactForm = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>
            Get in touch and we will respond as soon as possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form 
            action="https://getform.io/f/bxozjona" 
            method="POST" 
            className="space-y-4"
          >
            {/* Hidden Honeypot input to prevent spam */}
            <input 
              type="hidden" 
              name="_gotcha" 
              style={{ display: 'none !important' } as React.CSSProperties}
            />
            
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your full name"
              />
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Your company name"
              />
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us how we can help you..."
                rows={4}
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;