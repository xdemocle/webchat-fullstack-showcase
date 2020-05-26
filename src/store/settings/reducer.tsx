import { SEND_MESSAGE, GET_MESSAGE } from './actions'
import { INITIAL_SETTINGS } from '../../app/constants'
import { SettingsState } from './types'

const defaultState: SettingsState = INITIAL_SETTINGS

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (state = defaultState, action: any) => {
  switch (action.type) {
    case SEND_MESSAGE:
      console.log(action.type)
      return {
        // messages: action.data,
        ...state,
      }
    case GET_MESSAGE:
      console.log(action)
      // state.messages.push(action.data)
      return {
        ...state,
      }
    default:
      return state
  }
}
