import { api } from "./api";
import { UserType } from "../types/user.type";

export type MessageType = {
  created_at: string
  id: string
  text: string
  user: UserType
}

export const GetMessages = async (): Promise<MessageType[]>  => {
  const { data } = await api.get('messages/last3');

  return data
}

export const SendMessages = async (message: string) => {
  const { data } = await api.post('messages', {message});

  return data
}