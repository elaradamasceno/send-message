import { createContext, ReactNode, useContext, useState, useEffect, useMemo } from "react";
import { api } from "../services/api";

import { Authenticate } from "../services/authenticate-api";
import { GetProfile } from "../services/profile-api";
import { UserType } from '../types/user.type';

type AuthContextProps = {
  user: UserType | null
  signInUrl: string
  signOut: () => void
}

type AuthProviderProps = {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider = (props: AuthProviderProps) => {
  const [user, setUser] = useState<UserType | null>(null);

  const signInUrl = useMemo(() => {
    return 'https://github.com/login/oauth/authorize?scope=user&client_id=678e8f21657a1518e2f4'
  }, [])


  const signIn = async (gitHubCode: string) => {
    const resp = await Authenticate(gitHubCode);
    const {token, user} = resp;

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    localStorage.setItem('@token', token);
    setUser(user);
  }

  const signOut = async () => {
    setUser(null);
    localStorage.removeItem('@token');
  }

  useEffect(() => {
    const validateGitHubCode = () => {
      const url = window.location.href;
      const hasGithubCode = url.includes('?code=');
  
      if(hasGithubCode){
        const [ urlWithoutCode, gitHubCode] = url.split('?code=');
  
        window.history.pushState({}, '', urlWithoutCode);
  
        signIn(gitHubCode)
      }
    }

    validateGitHubCode();
  }, []);

  useEffect(() => {
    const validateExistToken = async () => {
      const token = localStorage.getItem('@token');
  
      if(token){
        const response = await GetProfile(token);
  
        setUser(response);
      }
    }

    validateExistToken()
  }, []) 

  return (
    <AuthContext.Provider value={{signInUrl, user, signOut}}>
      {props.children}
    </AuthContext.Provider>
  )
} 

function useAuth() {
	const context = useContext(AuthContext)

	if (!context) {
		throw new Error('useApp must be used within an AppProvider')
	}

	return context
}

export { AuthProvider, useAuth }