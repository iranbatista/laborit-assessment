import { RefreshCcwIcon } from 'lucide-react';

interface Props {
  onRegenerate: () => void;
  disabled?: boolean;
}

export function RegenerateButton({ onRegenerate, disabled }: Props) {
  return (
    <button
      onClick={onRegenerate}
      disabled={disabled}
      className="p-3 text-text-tertiary bg-background-secondary border border-stroke-primary outline-none rounded-xl text-sm mx-auto mt-5 flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-default"
    >
      <RefreshCcwIcon size={18} />
      Regenerate Response
    </button>
  );
}
