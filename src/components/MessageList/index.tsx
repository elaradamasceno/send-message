
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

import { GetMessages, MessageType } from '../../services/messages-api';

import LogoImg from '../../assets/logo-vite.webp';
import * as S from './styles';

const messageQueue: MessageType[] = [];

const socket = io('http://localhost:4000');
socket.on('new_message', (newMessage: MessageType) => {
  messageQueue.push(newMessage);
});

export function MessageList(){
  const [messages, setMessages] = useState<MessageType[]>([])

  const fetchMessages = async () => {
    const data = await GetMessages();
    setMessages(data);
  }

  useEffect(() => {
    // const timer = setInterval(() => {
    //   if(messageQueue.length > 0){
    //     setMessages(prevState => [
    //       messageQueue[0],
    //       prevState[0],
    //       prevState[1]
    //     ].filter(Boolean));

    //     messageQueue.shift();
    //   }
    // }, 4000);
  }, [])

  useEffect(() => {
    fetchMessages()
  }, []);

  return (
    <S.MessageListWrapper>
      <div>
        <img src={LogoImg} alt="Vite Logo" />
        <h1>ViteJs</h1>
      </div>

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