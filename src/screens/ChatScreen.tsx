import { ChatInput } from '../components/chat/ChatInput';
import { ChatMessageList } from '../components/chat/ChatMessageList';

export function ChatScreen() {
  return (
    <div className="flex flex-col items-center w-full max-w-md m-auto h-dvh">
      <h2 className="text-white font-medium text-xl mt-10 px-5">FinTechX AI</h2>
      <ChatMessageList />
      <div className="w-full px-5">
        <ChatInput />
      </div>
    </div>
  );
}
