export interface Message {
  id: string;
  message: string;
  author: 'user' | 'ai';
}
