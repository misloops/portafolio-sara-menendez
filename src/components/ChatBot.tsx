import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../utils/classNames';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const WELCOME: Record<string, string> = {
  es: '¡Hola! Soy Luma, la asistente de Sara 👋 ¿En qué puedo ayudarte?',
  en: 'Hi! I\'m Luma, Sara\'s assistant 👋 How can I help you?',
};

const PLACEHOLDER: Record<string, string> = {
  es: 'Escribe tu pregunta...',
  en: 'Type your question...',
};

const SEND_ERROR: Record<string, string> = {
  es: 'Lo siento, hubo un problema. Inténtalo de nuevo.',
  en: 'Sorry, something went wrong. Please try again.',
};

export default function ChatBot() {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: WELCOME[language] },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Update welcome message when language changes (only if chat is in initial state)
  useEffect(() => {
    setMessages([{ role: 'assistant', content: WELCOME[language] }]);
  }, [language]);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [open, messages]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const newMessages: Message[] = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok) throw new Error('API error');
      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: SEND_ERROR[language] },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div
          className={cn(
            'fixed bottom-24 right-4 sm:right-6 z-50',
            'w-[calc(100vw-2rem)] sm:w-[360px]',
            'max-h-[520px]',
            'flex flex-col',
            'bg-white rounded-2xl shadow-2xl border border-[#dee2de]/60',
            'overflow-hidden'
          )}
          role="dialog"
          aria-label="Chat con Luma"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-[#dee2de]/60">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#98c29b] flex items-center justify-center text-white text-sm font-semibold">
                L
              </div>
              <div>
                <p className="text-sm font-semibold text-[#302e2e]">Luma</p>
                <p className="text-xs text-[#302e2e]/50">Asistente de Sara</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-7 h-7 rounded-full flex items-center justify-center text-[#302e2e]/40 hover:text-[#302e2e] hover:bg-[#f5f5f5] transition-colors"
              aria-label="Cerrar chat"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 min-h-0">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  'max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed',
                  msg.role === 'user'
                    ? 'ml-auto bg-[#98c29b] text-white rounded-tr-sm'
                    : 'mr-auto bg-[#f5f5f5] text-[#302e2e] rounded-tl-sm'
                )}
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="mr-auto bg-[#f5f5f5] px-3.5 py-2.5 rounded-2xl rounded-tl-sm">
                <span className="flex gap-1 items-center h-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#302e2e]/30 animate-bounce [animation-delay:0ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#302e2e]/30 animate-bounce [animation-delay:150ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#302e2e]/30 animate-bounce [animation-delay:300ms]" />
                </span>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-3 border-t border-[#dee2de]/60 flex gap-2 items-center bg-white">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder={PLACEHOLDER[language]}
              maxLength={500}
              className={cn(
                'flex-1 text-sm px-3.5 py-2.5 rounded-xl',
                'bg-[#f5f5f5] text-[#302e2e] placeholder-[#302e2e]/30',
                'outline-none focus:ring-2 focus:ring-[#98c29b]/40',
                'transition-all'
              )}
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              className={cn(
                'w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0',
                'bg-[#98c29b] text-white',
                'hover:bg-[#7aa871] transition-colors',
                'disabled:opacity-40 disabled:cursor-not-allowed'
              )}
              aria-label="Enviar mensaje"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14 8L2 2l2.5 6L2 14l12-6z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'fixed bottom-6 right-4 sm:right-6 z-50',
          'w-14 h-14 rounded-full shadow-lg',
          'flex items-center justify-center',
          'bg-[#98c29b] hover:bg-[#7aa871]',
          'transition-all duration-200',
          open ? 'rotate-0' : 'rotate-0'
        )}
        aria-label={open ? 'Cerrar chat' : 'Abrir chat con Luma'}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 4l12 12M16 4L4 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
    </>
  );
}
