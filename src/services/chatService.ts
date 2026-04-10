import { GoogleGenAI, type Content } from '@google/genai';
import type { Message } from '../types/chat';
import { systemInstruction } from '../constants/chat';

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export async function sendMessage(messages: Message[]): Promise<string> {
  const history: Content[] = messages.slice(0, -1).map(m => ({
    role: m.author === 'user' ? 'user' : 'model',
    parts: [{ text: m.message }],
  }));

  const chat = ai.chats.create({
    model: 'gemini-2.5-flash-lite',
    config: { systemInstruction },
    history,
  });
  const lastMessage = messages[messages.length - 1].message;
  const result = await chat.sendMessage({ message: lastMessage });

  return result.text ?? '';
}
