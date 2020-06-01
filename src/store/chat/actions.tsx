import { Message, ADD_MESSAGE } from './types'

export const addMessage = (message: Message) => {
  return {
    type: ADD_MESSAGE,
    // meta: { remote: true },
    payload: message,
  }
}
