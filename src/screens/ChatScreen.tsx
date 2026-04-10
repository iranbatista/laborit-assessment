import { useRef } from 'react';
import { ChatInput, type ChatInputHandle } from '../components/chat/ChatInput';
import { ChatMessageList } from '../components/chat/ChatMessageList';
import { useChat } from '../hooks/useChat';

export function ChatScreen() {
  const { messages, loading, handleSend, handleRegenerate } = useChat();
  const chatInputRef = useRef<ChatInputHandle>(null);

  return (
    <div className="flex flex-col items-center w-full max-w-md m-auto h-dvh">
      <h2 className="text-white font-medium text-xl mt-10 px-5">FinTechX AI</h2>
      <ChatMessageList
        messages={messages}
        loading={loading}
        onRegenerate={() => handleRegenerate(() => chatInputRef.current?.focus())}
      />
      <div className="w-full px-5">
        <ChatInput
          ref={chatInputRef}
          onSend={text => handleSend(text, () => chatInputRef.current?.focus())}
          disabled={loading}
        />
      </div>
    </div>
  );
}
