import { SendHorizontalIcon } from 'lucide-react';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

export interface ChatInputHandle {
  focus: () => void;
}
interface Props {
  onSend: (text: string) => void;
  disabled?: boolean;
}

export const ChatInput = forwardRef<ChatInputHandle, Props>(({ onSend, disabled }, ref) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState('');

  useImperativeHandle(ref, () => ({
    focus: () => textareaRef.current?.focus(),
  }));

  function handleInput() {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  }

  function handleSubmit() {
    if (!value.trim() || disabled) return;

    onSend(value);
    setValue('');

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }

  return (
    <div className="mb-10 bg-background-secondary w-full rounded-xl border border-stroke-primary flex gap-3 p-3">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Envie uma mensagem"
        rows={1}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className="w-full h-full outline-none text-white placeholder:text-text-tertiary resize-none overflow-auto leading-6 disabled:opacity-50 transition-all"
      />
      <button
        type="button"
        onClick={handleSubmit}
        disabled={disabled || !value.trim()}
        className="text-text-secondary outline-none disabled:opacity-50"
      >
        <SendHorizontalIcon size={20} />
      </button>
    </div>
  );
});
