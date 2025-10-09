import { MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ChatLauncherProps {
  onClick: () => void;
}

export const ChatLauncher = ({ onClick }: ChatLauncherProps) => {
  const { t } = useTranslation();

  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 text-black shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center group"
      aria-label={t("chat.launcher")}
    >
      <MessageCircle className="h-6 w-6 animate-pulse group-hover:animate-none" />
    </button>
  );
};
