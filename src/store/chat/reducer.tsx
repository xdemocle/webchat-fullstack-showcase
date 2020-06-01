import { ChatState, ChatActionTypes, ADD_MESSAGE } from './types'

const defaultState: ChatState = {
  messages: [],
}

export default (state = defaultState, action: ChatActionTypes) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      }
    default:
      return state
  }
}
