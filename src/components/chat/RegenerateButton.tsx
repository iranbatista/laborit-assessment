import { RefreshCcwIcon } from 'lucide-react';

export function RegenerateButton() {
  return (
    <button className="p-3 text-text-tertiary bg-background-secondary border border-stroke-primary outline-none rounded-xl text-sm mx-auto mt-5 flex items-center gap-2 cursor-pointer">
      <RefreshCcwIcon size={18} />
      Regenerate Response
    </button>
  );
}
