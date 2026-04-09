import robotImage from '../assets/robot.jpg';
import { OnboardingSlide } from '../components/onboarding/OnboardingSlide';

interface Props {
  onFinish: () => void;
}

export function OnboardingScreen({ onFinish }: Props) {
  return (
    <div className="flex flex-col items-center w-full max-w-md m-auto px-5">
      <button
        type="button"
        onClick={onFinish}
        className="font-semibold text-text-secondary text-lg mt-10 self-end cursor-pointer hover:brightness-110 transition-all"
      >
        Pular
      </button>

      <div className="relative mt-5">
        <img src={robotImage} alt="Robot image" className="h-110 rounded-4xl object-cover" />
        <img
          src={robotImage}
          alt="Robot image"
          className="h-103 rounded-4xl object-cover blur-[35px] absolute top-10 -z-1"
        />
      </div>

      <OnboardingSlide onFinish={onFinish} />
    </div>
  );
}
