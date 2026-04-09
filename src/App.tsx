import { OnboardingScreen } from './screens/OnboardingScreen';
import { ChatScreen } from './screens/ChatScreen';
import { useOnboarding } from './hooks/useOnboarding';

export function App() {
  const { completed, completeOnboarding } = useOnboarding();

  return completed ? <ChatScreen /> : <OnboardingScreen onFinish={completeOnboarding} />;
}
