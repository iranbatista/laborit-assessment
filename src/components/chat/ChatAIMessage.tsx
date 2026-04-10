import { useState } from 'react';
import { CheckIcon, CopyIcon } from 'lucide-react';
import aiImage from '../../assets/ai.png';
import { RegenerateButton } from './RegenerateButton';

interface Props {
  message: string;
  lastMessage?: boolean;
  loading?: boolean;
  onRegenerate: () => void;
}

export function ChatAIMessage({ message, lastMessage, loading, onRegenerate }: Props) {
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
      {lastMessage && <RegenerateButton onRegenerate={onRegenerate} disabled={loading} />}
    </>
  );
}
