import { FormEvent, useState } from 'react';
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';

import { useAuth } from '../../context/auth';
import { SendMessages } from '../../services/messages-api';

import * as S from './styles';

export function SendMessageForm(){
  const { signOut, user } = useAuth();

  const [message, setMessage] = useState<string>('');

  const handleSendMessage = async (event: FormEvent) => {
    event.preventDefault();

    if(!message.trim())
      return

    await SendMessages(message);
    setMessage('');
  }

  return (
    <S.MessageFormWrapper>
      <button> 
        <VscSignOut size="32" onClick={signOut}/> 
        Sair
      </button> 
      
      <S.UserData>
        <div>
          <img src={user?.avatar_url} alt={user?.name} />
        </div>

        <strong>
          <span>
            <VscGithubInverted size="16"/>
            {user?.name}
          </span>
        </strong>
      </S.UserData>

      <S.Form onSubmit={handleSendMessage}>
        <label htmlFor="message">Mensagem</label>
        <textarea 
          name="message" 
          id="message" 
          placeholder='Deixe sua dúvida'
          onChange={event => setMessage(event.target.value)}
          value={message}
        />

        <button type='submit'>Enviar mensagem</button>
      </S.Form>

    </S.MessageFormWrapper>
  )
}