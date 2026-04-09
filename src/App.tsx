import { useState } from 'react';
import { OnboardingScreen } from './screens/OnboardingScreen';
import { ChatScreen } from './screens/ChatScreen';

type Screen = 'onboarding' | 'chat';

export function App() {
  const [screen, setScreen] = useState<Screen>('onboarding');

  return screen === 'onboarding' ? (
    <OnboardingScreen onFinish={() => setScreen('chat')} />
  ) : (
    <ChatScreen />
  );
}
