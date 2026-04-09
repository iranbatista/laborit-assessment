import { chatInstructions } from '../../constants/chat';

export function ChatInstructions() {
  return (
    <div className="flex flex-col gap-3 justify-center h-full">
      {chatInstructions.map(instruction => (
        <div
          key={instruction}
          className="bg-background-secondary rounded-2xl p-4 flex items-center justify-center"
        >
          <p className="text-center w-2/3 text-text-tertiary text-[15px] leading-normal">
            {instruction}
          </p>
        </div>
      ))}
    </div>
  );
}
