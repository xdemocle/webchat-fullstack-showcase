import { ChatState } from './types'
import { SEND_MESSAGE, GET_MESSAGE } from './actions'

const defaultState: ChatState = {
  messages: [],
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (state = defaultState, action: any) => {
  console.log(action)
  switch (action.type) {
    case SEND_MESSAGE:
      console.log(action.type)
      return {
        messages: action.data,
      }
    case GET_MESSAGE:
      console.log(action)
      state.messages.push(action.data)
      return {
        ...state,
      }
    default:
      return state
  }
}
