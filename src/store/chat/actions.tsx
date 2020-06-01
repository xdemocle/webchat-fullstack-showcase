import { Message, SEND_MESSAGE, GET_MESSAGE } from './types'

export const sendMessage = (message: Message) => {
  return {
    type: SEND_MESSAGE,
    meta: { remote: true },
    payload: message,
  }
}

export const getMessage = (message: Message) => {
  return {
    type: GET_MESSAGE,
    payload: message,
  }
}
