import { useState } from 'react';
import type { Message } from '../types/chat';
import { sendMessage } from '../services/chatService';
import { toast } from 'sonner';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSend(text: string, onResponse?: () => void) {
    if (!text.trim() || loading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      author: 'user',
      message: text,
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setLoading(true);

    try {
      await fetchAiResponse(updatedMessages);
    } catch (err) {
      handleError(err);
      setMessages(prev => prev.slice(0, -1));
    } finally {
      setLoading(false);
      if (onResponse) setTimeout(onResponse, 0);
    }
  }

  async function handleRegenerate(onResponse?: () => void) {
    if (loading) return;

    const messagesWithoutLast = messages.slice(0, -1);
    setMessages(messagesWithoutLast);
    setLoading(true);

    try {
      await fetchAiResponse(messagesWithoutLast);
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
      if (onResponse) setTimeout(onResponse, 0);
    }
  }

  async function fetchAiResponse(currentMessages: Message[]) {
    const aiMessage: Message = {
      id: crypto.randomUUID(),
      author: 'ai',
      message: await sendMessage(currentMessages),
    };

    setMessages(prev => [...prev, aiMessage]);
  }

  function handleError(err: unknown) {
    const message =
      err instanceof Error && err.message.includes('503')
        ? 'O assistente está sobrecarregado. Tente novamente em instantes.'
        : 'Ocorreu um erro inesperado. Tente novamente.';
    toast.error(message);
  }

  return { messages, loading, handleSend, handleRegenerate };
}
