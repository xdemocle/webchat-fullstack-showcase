import { ChatState, ChatActionTypes, SEND_MESSAGE, GET_MESSAGE } from './types'

const defaultState: ChatState = {
  messages: [],
}

export default (state = defaultState, action: ChatActionTypes) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        messages: [...state.messages, action.payload],
        payload: action.payload,
      }
      break
    case GET_MESSAGE:
      if (state.messages.some(message => message.id === action.payload.id)) {
        return state
      }

      return {
        ...state,
        messages: [...state.messages, action.payload],
      }
      break
    default:
      return state
  }
}
