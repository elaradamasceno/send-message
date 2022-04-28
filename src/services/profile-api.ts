import { api } from "./api";
import { UserType } from "../types/user.type";

export const GetProfile = async (token: string): Promise<UserType>  => {
  api.defaults.headers.common.authorization = `Bearer ${token}`;
  const { data } = await api.get('profile');

  return data 
}