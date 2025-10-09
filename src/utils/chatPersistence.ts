interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

interface ChatSession {
  sessionId: string;
  messages: ChatMessage[];
  language: string;
  lastUpdated: number;
}

const STORAGE_KEY = "lipski_chat_session";
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export const generateSessionId = (): string => {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const saveSession = (session: ChatSession): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  } catch (error) {
    console.error("Error saving chat session:", error);
  }
};

export const loadSession = (): ChatSession | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    const session: ChatSession = JSON.parse(stored);
    
    // Check if session is expired
    if (Date.now() - session.lastUpdated > SESSION_DURATION) {
      clearSession();
      return null;
    }

    return session;
  } catch (error) {
    console.error("Error loading chat session:", error);
    return null;
  }
};

export const clearSession = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Error clearing chat session:", error);
  }
};

export const addMessage = (
  session: ChatSession,
  role: "user" | "assistant",
  content: string
): ChatSession => {
  const newMessage: ChatMessage = {
    id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    role,
    content,
    timestamp: Date.now(),
  };

  const updatedSession = {
    ...session,
    messages: [...session.messages, newMessage],
    lastUpdated: Date.now(),
  };

  saveSession(updatedSession);
  return updatedSession;
};
