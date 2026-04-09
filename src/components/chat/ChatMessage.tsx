import { CheckIcon, CopyIcon } from 'lucide-react';
import aiImage from '../../assets/ai.png';
import userImage from '../../assets/user.png';
import { useState } from 'react';
import type { Message } from '../../types/chat';
import { RegenerateButton } from './RegenerateButton';

interface Props extends Message {
  lastMessage?: boolean;
}

export function ChatMessage({ message, author, lastMessage }: Props) {
  const [copied, setCopied] = useState(false);

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      return;
    }
  }

  if (author === 'user') {
    return (
      <div className="flex gap-3 items-center py-4 px-5">
        <img src={userImage} alt="Profile picture" className="w-9 h-9 rounded-lg" />
        <p className="text-sm text-white leading-relaxed">{message}</p>
      </div>
    );
  } else {
    return (
      <>
        <div className="bg-background-secondary py-4 px-5">
          <header className="flex items-center justify-between">
            <img src={aiImage} alt="Robot image" className="w-9 h-9 rounded-lg" />
            <div>
              <button
                type="button"
                onClick={copyToClipboard}
                className="text-text-tertiary p-2 hover:bg-stroke-primary/30 transition rounded-md"
              >
                {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
              </button>
            </div>
          </header>
          <p className="text-sm text-text-tertiary leading-relaxed pt-4">{message}</p>
        </div>
        {lastMessage && <RegenerateButton />}
      </>
    );
  }
}
