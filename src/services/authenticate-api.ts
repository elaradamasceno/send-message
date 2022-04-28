
import { UserType } from "../types/user.type";
import { api } from "./api";

export type AuthenticateType = {
  token: string
  user: UserType
}

export const Authenticate = async (codeGitHub: string): Promise<AuthenticateType> => {
  const authenticate = await api.post('authenticate', { code: codeGitHub });

  return authenticate.data
}