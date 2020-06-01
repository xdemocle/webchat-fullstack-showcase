export const SEND_MESSAGE = 'SEND_MESSAGE'
export const GET_MESSAGE = 'GET_MESSAGE'

export interface Message {
  id: string
  timestamp: string
  from: string
  text: string
}

export interface ChatState {
  messages: Message[]
  // payload: Message
}

export interface SendMessageAction {
  type: typeof SEND_MESSAGE
  payload: Message
}

export interface GetMessageAction {
  type: typeof GET_MESSAGE
  payload: Message
}

export type ChatActionTypes = SendMessageAction | GetMessageAction
