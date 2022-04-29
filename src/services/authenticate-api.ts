
import { UserType } from "../types/user.type";
import { api } from "./api";

export type AuthenticateData = {
  token: string
  user: UserType
}

export const Authenticate = async (codeGitHub: string): Promise<AuthenticateData> => {
  const authenticate = await api.post('authenticate', { code: codeGitHub });

  return authenticate.data
}