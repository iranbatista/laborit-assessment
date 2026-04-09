interface Props {
  onFinish: () => void;
}

export function OnboardingScreen({ onFinish }: Props) {
  return (
    <div>
      <h1>Onboarding Screen</h1>
      <button type="button" onClick={onFinish}>
        Finish
      </button>
    </div>
  );
}
