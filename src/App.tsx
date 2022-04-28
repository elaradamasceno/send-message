import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';

import { ContentWrapper } from './styles'

export function App() {
  return (
    <ContentWrapper>
      <MessageList />
      <LoginBox />
    </ContentWrapper>
  )
}

 