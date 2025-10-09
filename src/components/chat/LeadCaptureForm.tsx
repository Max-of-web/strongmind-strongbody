import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

interface LeadCaptureFormProps {
  sessionId: string;
  conversationId: string;
  onSubmitSuccess: () => void;
}

const leadSchema = z.object({
  name: z.string().min(2, "Name too short").max(100),
  email: z.string().email("Invalid email").max(255),
  goals: z.string().min(10, "Please describe your goals").max(500),
  schedule: z.string().min(5, "Please specify schedule").max(200),
});

export const LeadCaptureForm = ({
  sessionId,
  conversationId,
  onSubmitSuccess,
}: LeadCaptureFormProps) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    goals: "",
    schedule: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate
      const validated = leadSchema.parse(formData);

      // Save to conversation
      const { error: updateError } = await supabase
        .from("chat_conversations")
        .update({
          lead_captured: true,
          lead_data: validated,
        })
        .eq("id", conversationId);

      if (updateError) throw updateError;

      // Log analytics
      await supabase.from("chat_analytics").insert({
        event_type: "lead_submitted",
        conversation_id: conversationId,
        metadata: { session_id: sessionId },
      });

      // Send to contacts table
      await supabase.from("contacts").insert({
        name: validated.name,
        email: validated.email,
        notes: `Goals: ${validated.goals}\nSchedule: ${validated.schedule}\nSource: AI Chat`,
      });

      toast.success(t("chat.leadForm.success"));
      onSubmitSuccess();
    } catch (error) {
      console.error("Lead submission error:", error);
      
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error(t("chat.leadForm.error"));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-muted/50 rounded-lg">
      <h3 className="font-semibold text-lg">{t("chat.leadForm.title")}</h3>

      <div className="space-y-2">
        <Label htmlFor="name">{t("chat.leadForm.name")}</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder={t("chat.leadForm.namePlaceholder")}
          maxLength={100}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">{t("chat.leadForm.email")}</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder={t("chat.leadForm.emailPlaceholder")}
          maxLength={255}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="goals">{t("chat.leadForm.goals")}</Label>
        <Textarea
          id="goals"
          value={formData.goals}
          onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
          placeholder={t("chat.leadForm.goalsPlaceholder")}
          maxLength={500}
          rows={3}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="schedule">{t("chat.leadForm.schedule")}</Label>
        <Input
          id="schedule"
          value={formData.schedule}
          onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
          placeholder={t("chat.leadForm.schedulePlaceholder")}
          maxLength={200}
          required
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-amber-400 to-orange-400 text-black hover:from-amber-300 hover:to-orange-300"
      >
        {isSubmitting ? "..." : t("chat.leadForm.submit")}
      </Button>
    </form>
  );
};
