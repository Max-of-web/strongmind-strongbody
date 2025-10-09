import { useState, useEffect } from "react";
import { ChatLauncher } from "./ChatLauncher";
import { ChatPanel } from "./ChatPanel";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  loadSession,
  saveSession,
  clearSession,
  generateSessionId,
  addMessage as persistMessage,
} from "@/utils/chatPersistence";
import { useLanguage } from "@/hooks/useLanguage";
import { supabase } from "@/integrations/supabase/client";

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [sessionId, setSessionId] = useState<string>("");
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const isMobile = useIsMobile();
  const { language } = useLanguage();

  useEffect(() => {
    // Load or create session
    const existingSession = loadSession();
    if (existingSession) {
      setSessionId(existingSession.sessionId);
      setMessages(existingSession.messages);
    } else {
      const newSessionId = generateSessionId();
      setSessionId(newSessionId);
      saveSession({
        sessionId: newSessionId,
        messages: [],
        language,
        lastUpdated: Date.now(),
      });
    }
  }, [language]);

  useEffect(() => {
    if (isOpen && sessionId) {
      // Log chat_open analytics
      logAnalytics("chat_open");
    }
  }, [isOpen, sessionId]);

  const logAnalytics = async (eventType: string) => {
    try {
      await supabase.from("chat_analytics").insert({
        event_type: eventType,
        conversation_id: conversationId,
        metadata: { session_id: sessionId, language },
      });
    } catch (error) {
      console.error("Analytics error:", error);
    }
  };

  const handleNewMessage = (role: "user" | "assistant", content: string) => {
    const session = loadSession();
    if (!session) return;

    const updatedSession = persistMessage(session, role, content);
    setMessages(updatedSession.messages);

    // Check if we should show lead form
    if (
      role === "assistant" &&
      !showLeadForm &&
      (content.toLowerCase().includes("email") ||
        content.toLowerCase().includes("el. pašt") ||
        content.toLowerCase().includes("kontakt"))
    ) {
      setShowLeadForm(true);
    }
  };

  const handleClearChat = () => {
    clearSession();
    const newSessionId = generateSessionId();
    setSessionId(newSessionId);
    setMessages([]);
    setShowLeadForm(false);
    setConversationId(null);
    saveSession({
      sessionId: newSessionId,
      messages: [],
      language,
      lastUpdated: Date.now(),
    });
  };

  const handleLeadFormSubmit = () => {
    setShowLeadForm(false);
    logAnalytics("lead_submitted");
  };

  const chatContent = (
    <ChatPanel
      messages={messages}
      onNewMessage={handleNewMessage}
      onClearChat={handleClearChat}
      sessionId={sessionId}
      conversationId={conversationId}
      showLeadForm={showLeadForm}
      onLeadFormSubmit={handleLeadFormSubmit}
    />
  );

  return (
    <>
      {!isOpen && <ChatLauncher onClick={() => setIsOpen(true)} />}

      {isMobile ? (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerContent className="h-[85vh]">
            <DrawerHeader>
              <DrawerTitle>AI Asistentas</DrawerTitle>
            </DrawerHeader>
            {chatContent}
          </DrawerContent>
        </Drawer>
      ) : (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="h-[600px] w-[360px] p-0 gap-0">
            <DialogHeader className="sr-only">
              <DialogTitle>AI Chat Assistant</DialogTitle>
            </DialogHeader>
            {chatContent}
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
