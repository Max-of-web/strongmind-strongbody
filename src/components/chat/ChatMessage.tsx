import { formatDistanceToNow } from "date-fns";
import { lt, enUS } from "date-fns/locale";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

export const ChatMessage = ({ role, content, timestamp }: ChatMessageProps) => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const timeAgo = formatDistanceToNow(timestamp, {
    addSuffix: true,
    locale: language === "lt" ? lt : enUS,
  });

  return (
    <div
      className={`flex flex-col gap-1 ${
        role === "user" ? "items-end" : "items-start"
      }`}
    >
      <div
        className={`max-w-[85%] rounded-lg px-4 py-2 ${
          role === "user"
            ? "bg-gradient-to-r from-amber-400 to-orange-400 text-black"
            : "bg-muted text-foreground"
        }`}
      >
        <p className="text-sm whitespace-pre-wrap break-words">{content}</p>
      </div>
      
      <div className="flex items-center gap-2 px-1">
        <span className="text-xs text-muted-foreground">{timeAgo}</span>
        
        {role === "assistant" && (
          <button
            onClick={handleCopy}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Copy message"
          >
            {copied ? (
              <Check className="h-3 w-3" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};
