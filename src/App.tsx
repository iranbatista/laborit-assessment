import { OnboardingScreen } from './screens/OnboardingScreen';
import { ChatScreen } from './screens/ChatScreen';
import { useOnboarding } from './hooks/useOnboarding';
import { Toaster } from 'sonner';

export function App() {
  const { completed, completeOnboarding } = useOnboarding();

  return (
    <>
      <Toaster theme="dark" position="bottom-center" />
      {completed ? <ChatScreen /> : <OnboardingScreen onFinish={completeOnboarding} />}
    </>
  );
}
