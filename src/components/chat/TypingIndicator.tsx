import aiImage from '../../assets/ai.png';

export function TypingIndicator() {
  return (
    <div className="bg-background-secondary py-4 px-5">
      <header className="flex items-center justify-between">
        <img src={aiImage} alt="Robot image" className="w-9 h-9 rounded-lg" />
      </header>
      <div className="flex gap-1.5 pt-4">
        <span className="w-2 h-2 bg-text-tertiary rounded-full animate-typing [animation-delay:0ms]" />
        <span className="w-2 h-2 bg-text-tertiary rounded-full animate-typing [animation-delay:100ms]" />
        <span className="w-2 h-2 bg-text-tertiary rounded-full animate-typing [animation-delay:200ms]" />
      </div>
    </div>
  );
}
