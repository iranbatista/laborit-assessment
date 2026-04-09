import { useState } from 'react';

const ONBOARDING_KEY = 'funtechx:onboarding_completed';

export function useOnboarding() {
  const [completed, setCompleted] = useState(() => localStorage.getItem(ONBOARDING_KEY) === 'true');

  function completeOnboarding() {
    localStorage.setItem(ONBOARDING_KEY, 'true');
    setCompleted(true);
  }

  return {
    completed,
    completeOnboarding,
  };
}
