
import { useEffect, useState } from 'react';

import { GetMessages, MessageType } from '../../services/messages-api';

import LogoImg from '../../assets/logo.svg';
import * as S from './styles';

export function MessageList(){
  const [messages, setMessages] = useState<MessageType[]>([])

  const fetchMessages = async () => {
    const data = await GetMessages();
    setMessages(data);
  }

  useEffect(() => {
    fetchMessages()
  }, []);

  return (
    <S.MessageListWrapper>
      {/* <img src={LogoImg} alt="Vite Logo" /> */}

      { messages && messages.map((message) => {
        return (
          <S.MessageList key={message.id}>
            <li>
              <p>{message.text}</p>
    
              <S.MesssageUser>
                <div>
                  <img src={message.user.avatar_url} alt={message.user.name} />
                </div>
                <span>{message.user.name}</span>
              </S.MesssageUser>
            </li>
          </S.MessageList>
        )
      })}
    </S.MessageListWrapper>
  )
}