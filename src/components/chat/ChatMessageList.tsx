import { useState } from 'react';
import type { Message } from '../../types/chat';
import { ChatMessage } from './ChatMessage';
import { ChatInstructions } from './ChatInstructions';

export function ChatMessageList() {
  const [messages] = useState<Message[]>([]);

  return (
    <div className="flex-1 w-full overflow-y-auto overflow-x-hidden my-6">
      {messages.length > 0 ? (
        messages.map((message, index) => (
          <ChatMessage key={message.id} {...message} lastMessage={index === messages.length - 1} />
        ))
      ) : (
        <div className="w-full h-full px-5">
          <ChatInstructions />
        </div>
      )}
    </div>
  );
}
