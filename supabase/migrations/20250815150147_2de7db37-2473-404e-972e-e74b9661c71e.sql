-- Create table for back pain guide form submissions
CREATE TABLE public.back_pain_guide_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT,
  subscribe BOOLEAN DEFAULT false,
  gender TEXT,
  work_experience TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.back_pain_guide_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert submissions
CREATE POLICY "Anyone can insert back pain guide submissions" 
ON public.back_pain_guide_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_back_pain_guide_submissions_updated_at
BEFORE UPDATE ON public.back_pain_guide_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();