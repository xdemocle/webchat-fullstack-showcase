export const ADD_MESSAGE = 'ADD_MESSAGE'

export interface Message {
  timestamp: string
  from: string
  text: string
}

export interface ChatState {
  messages: Message[]
}

export interface AddMessageAction {
  type: typeof ADD_MESSAGE
  payload: Message
}

export type ChatActionTypes = AddMessageAction
