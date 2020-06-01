export const SEND_MESSAGE = 'SEND_MESSAGE'
export const GET_MESSAGE = 'GET_MESSAGE'
export const GET_STATE_MESSAGES = 'GET_STATE_MESSAGES'

export interface Message {
  id: string
  timestamp: string
  from: string
  text: string
}

export interface ChatState {
  messages: Message[]
}

export interface SendMessageAction {
  type: typeof SEND_MESSAGE
  payload: Message
}

export interface GetMessageAction {
  type: typeof GET_MESSAGE
  payload: Message
}

export interface GetStateMessagesAction {
  type: typeof GET_STATE_MESSAGES
  payload: Message[]
}

export type ChatActionTypes =
  | SendMessageAction
  | GetMessageAction
  | GetStateMessagesAction
