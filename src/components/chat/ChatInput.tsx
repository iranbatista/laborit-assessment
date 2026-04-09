import { SendHorizontalIcon } from 'lucide-react';
import { useRef } from 'react';

export function ChatInput() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function handleInput() {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
    }
  }

  return (
    <div className="mb-10 bg-background-secondary w-full rounded-xl border border-stroke-primary flex gap-3 p-3">
      <textarea
        ref={textareaRef}
        placeholder="Envie uma mensagem"
        rows={1}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        className="w-full h-full outline-none text-white placeholder:text-text-tertiary resize-none overflow-auto leading-6"
      />
      <button type="button" className="text-text-secondary outline-none">
        <SendHorizontalIcon size={20} />
      </button>
    </div>
  );
}
