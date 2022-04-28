import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';
import { useAuth } from '../../context/auth';
import * as S from './styles';

export function SendMessageForm(){
  const { user } = useAuth()
  return (
    <S.MessageFormWrapper>
      <button> <VscSignOut size="32"/> Sair</button> 
      

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

      <S.Form>
        <label htmlFor="message">Mensagem</label>
        <textarea 
          name="message" 
          id="message" 
          placeholder='Deixe sua dúvida'
        />

        <button type='submit'>Enviar mensagem</button>
      </S.Form>

    </S.MessageFormWrapper>
  )
}