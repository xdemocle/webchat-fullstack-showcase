import { Message, SEND_MESSAGE, GET_MESSAGE, GET_STATE_MESSAGES } from './types'

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

export const getStateMessages = messages => {
  return {
    type: GET_STATE_MESSAGES,
    payload: messages,
  }
}
