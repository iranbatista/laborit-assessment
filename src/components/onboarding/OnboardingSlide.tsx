import { useState } from 'react';
import { MoveLeftIcon, MoveRightIcon } from 'lucide-react';
import { onboardingSlides } from '../../constants/onboarding';
import { cn } from '../../utils/cn';

interface Props {
  onFinish: () => void;
}

export function OnboardingSlide({ onFinish }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <div className="mt-8 flex gap-3 items-center">
        {onboardingSlides.map((_, index) => (
          <span
            key={index}
            className={cn(
              currentSlide === index
                ? 'bg-white h-3 w-3 rounded-full outline-1 outline-white outline-offset-2'
                : 'bg-white/50 h-2.5 w-2.5 rounded-full',
            )}
          />
        ))}
      </div>

      <div className="mt-4 max-w-3/4">
        <h1 className="font-bold text-white text-4xl text-center leading-normal">
          {onboardingSlides[currentSlide].title}
        </h1>
        <p className="font-light text-text-tertiary text-center mt-1">
          {onboardingSlides[currentSlide].subtitle}
        </p>
      </div>

      <div className="bg-background-secondary p-5 rounded-2xl flex gap-8 mt-8">
        <button
          type="button"
          onClick={() => (currentSlide > 0 ? setCurrentSlide(currentSlide - 1) : null)}
          disabled={currentSlide === 0}
          className="text-white disabled:opacity-30 transition-all cursor-pointer disabled:cursor-default"
        >
          <MoveLeftIcon />
        </button>
        <div className="w-0.5 h-6 bg-text-tertiary rounded-full"></div>
        <button
          type="button"
          onClick={() =>
            currentSlide < onboardingSlides.length - 1
              ? setCurrentSlide(currentSlide + 1)
              : onFinish()
          }
          className="text-white disabled:opacity-30 transition-all cursor-pointer disabled:cursor-default"
        >
          <MoveRightIcon />
        </button>
      </div>
    </>
  );
}
