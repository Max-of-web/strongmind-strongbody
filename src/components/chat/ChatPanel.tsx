import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Send, Trash2, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage } from "./ChatMessage";
import { LeadCaptureForm } from "./LeadCaptureForm";
import { streamChat } from "@/utils/chatStreaming";
import { useLanguage } from "@/hooks/useLanguage";
import { toast } from "sonner";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

interface ChatPanelProps {
  messages: Message[];
  onNewMessage: (role: "user" | "assistant", content: string) => void;
  onClearChat: () => void;
  sessionId: string;
  conversationId: string | null;
  showLeadForm: boolean;
  onLeadFormSubmit: () => void;
}

export const ChatPanel = ({
  messages,
  onNewMessage,
  onClearChat,
  sessionId,
  conversationId,
  showLeadForm,
  onLeadFormSubmit,
}: ChatPanelProps) => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Scroll to bottom on new messages
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    onNewMessage("user", userMessage);
    setIsLoading(true);

    let assistantContent = "";
    const updateAssistant = (chunk: string) => {
      assistantContent += chunk;
      
      // Update or create assistant message
      if (messages[messages.length - 1]?.role !== "assistant") {
        onNewMessage("assistant", assistantContent);
      }
    };

    try {
      await streamChat({
        messages: [...messages, { role: "user", content: userMessage }],
        sessionId,
        language,
        onDelta: updateAssistant,
        onDone: () => {
          setIsLoading(false);
          inputRef.current?.focus();
        },
        onError: (error) => {
          console.error("Chat error:", error);
          setIsLoading(false);
          
          if (error.message.includes("429")) {
            toast.error(t("chat.rateLimit"));
          } else if (error.message.includes("402")) {
            toast.error(t("chat.serviceUnavailable"));
          } else {
            toast.error(t("chat.errorMessage"));
          }
        },
      });
    } catch (error) {
      console.error("Unexpected error:", error);
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    if (window.confirm(t("chat.clearConfirm"))) {
      onClearChat();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={`flex flex-col h-full ${isDark ? "dark" : ""}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-background">
        <h2 className="font-semibold text-lg">{t("chat.header")}</h2>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            aria-label={t("chat.theme")}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClear}
            aria-label={t("chat.clear")}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4" ref={scrollRef}>
        <div className="space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-muted-foreground py-8">
              <p>{t("chat.placeholder")}</p>
            </div>
          )}
          
          {messages.map((msg) => (
            <ChatMessage key={msg.id} {...msg} />
          ))}
          
          {isLoading && (
            <div className="flex items-start gap-2">
              <div className="bg-muted rounded-lg px-4 py-2">
                <p className="text-sm text-muted-foreground">{t("chat.typing")}</p>
              </div>
            </div>
          )}
          
          {showLeadForm && conversationId && (
            <LeadCaptureForm
              sessionId={sessionId}
              conversationId={conversationId}
              onSubmitSuccess={onLeadFormSubmit}
            />
          )}
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="p-4 border-t bg-background">
        <div className="flex gap-2">
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={t("chat.placeholder")}
            maxLength={500}
            disabled={isLoading}
            className="flex-1"
          />
          
          <Button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-gradient-to-r from-amber-400 to-orange-400 text-black hover:from-amber-300 hover:to-orange-300"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        
        <p className="text-xs text-muted-foreground mt-2">
          {input.length}/500
        </p>
      </div>
    </div>
  );
};
