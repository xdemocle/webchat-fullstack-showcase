import { each } from 'lodash'
import {
  ChatState,
  ChatActionTypes,
  SEND_MESSAGE,
  GET_MESSAGE,
  GET_STATE_MESSAGES,
} from './types'

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
    case GET_MESSAGE:
      if (state.messages.some(message => message.id === action.payload.id)) {
        return state
      }

      return {
        ...state,
        messages: [...state.messages, action.payload],
      }
    case GET_STATE_MESSAGES:
      if (!action.payload.length) {
        return state
      }

      each(action.payload, payload => {
        if (!state.messages.some(message => message.id === payload.id)) {
          state.messages.push(payload)
        }
      })

      return {
        ...state,
        messages: state.messages,
      }
    default:
      return state
  }
}
