import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';
import { SendMessageForm } from './components/SendMessageForm';
import { useAuth } from './context/auth';

import { ContentWrapper } from './styles';

export function App() {
  const { user } = useAuth();

  return (
    <ContentWrapper hasUser={!!user}>
      <MessageList />
      {!!user ? <SendMessageForm /> : <LoginBox />}
    </ContentWrapper>
  )
}

 