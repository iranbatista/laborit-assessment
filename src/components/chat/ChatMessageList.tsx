import { useEffect, useRef } from 'react';
import type { Message } from '../../types/chat';
import { ChatAIMessage } from './ChatAIMessage';
import { ChatInstructions } from './ChatInstructions';
import { ChatUserMessage } from './ChatUserMessage';
import { TypingIndicator } from './TypingIndicator';

interface Props {
  messages: Message[];
  loading?: boolean;
  onRegenerate: () => void;
}

export function ChatMessageList({ messages, loading, onRegenerate }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  return (
    <div className="flex-1 w-full overflow-y-auto overflow-x-hidden my-6">
      {messages.length > 0 ? (
        <>
          {messages.map((message, index) =>
            message.author === 'user' ? (
              <ChatUserMessage key={message.id} message={message.message} />
            ) : (
              <ChatAIMessage
                key={message.id}
                message={message.message}
                lastMessage={index === messages.length - 1}
                loading={loading}
                onRegenerate={onRegenerate}
              />
            ),
          )}
          {loading && <TypingIndicator />}
          <div ref={bottomRef} />
        </>
      ) : (
        <div className="w-full h-full px-5">
          <ChatInstructions />
        </div>
      )}
    </div>
  );
}
