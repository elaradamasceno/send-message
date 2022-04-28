import { VscGithubInverted } from 'react-icons/vsc';

import { useAuth } from '../../context/auth';

import { LoginBoxWrapper, SignInWithGitHub }from './styles'

export function LoginBox(){
  const { signInUrl } = useAuth();

  return (
    <LoginBoxWrapper>
      <strong>Entre e compartilhe sua mensagem</strong>
      <SignInWithGitHub href={signInUrl}> 
        <VscGithubInverted size="24"/>
        Entrar com GitHub 
      </SignInWithGitHub>
    </LoginBoxWrapper>
  )
}