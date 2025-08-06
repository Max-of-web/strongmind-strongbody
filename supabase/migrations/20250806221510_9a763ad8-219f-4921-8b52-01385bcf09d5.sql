-- Create missing tables for existing functionality

-- Email subscriptions table
CREATE TABLE public.email_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Translations table for language editor
CREATE TABLE public.translations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  language TEXT NOT NULL,
  namespace TEXT NOT NULL,
  key TEXT NOT NULL,
  value TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(language, namespace, key)
);

-- Coaching applications table
CREATE TABLE public.coaching_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  goal TEXT NOT NULL,
  challenge TEXT NOT NULL,
  ready_for_change BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for all tables
ALTER TABLE public.email_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coaching_applications ENABLE ROW LEVEL SECURITY;

-- Create policies for public access
CREATE POLICY "Anyone can insert email subscriptions" 
ON public.email_subscriptions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can view translations" 
ON public.translations 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can insert translations" 
ON public.translations 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can update translations" 
ON public.translations 
FOR UPDATE 
USING (true);

CREATE POLICY "Anyone can delete translations" 
ON public.translations 
FOR DELETE 
USING (true);

CREATE POLICY "Anyone can insert coaching applications" 
ON public.coaching_applications 
FOR INSERT 
WITH CHECK (true);

-- Add triggers for timestamps
CREATE TRIGGER update_translations_updated_at
BEFORE UPDATE ON public.translations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_coaching_applications_updated_at
BEFORE UPDATE ON public.coaching_applications
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();