import {
  SettingsState,
  SettingsActionTypes,
  CHANGE_USERNAME,
  CHANGE_INTERFACE_COLOR,
  CHANGE_CLOCK_DISPLAY,
  CHANGE_SEND_MESSAGE_SHORTCUT,
  CHANGE_LANGUAGE,
  RESET_SETTINGS,
  INITIAL_SETTINGS,
} from './types'

const defaultState: SettingsState = INITIAL_SETTINGS

export default (state = defaultState, action: SettingsActionTypes) => {
  switch (action.type) {
    case CHANGE_USERNAME:
      return {
        ...state,
        username: action.payload,
      }
    case CHANGE_INTERFACE_COLOR:
      return {
        ...state,
        interfaceColor: action.payload,
      }
    case CHANGE_CLOCK_DISPLAY:
      return {
        ...state,
        clockDisplay: action.payload,
      }
    case CHANGE_SEND_MESSAGE_SHORTCUT:
      return {
        ...state,
        sendMessagesShortcut: action.payload,
      }
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      }
    case RESET_SETTINGS:
      return {
        ...state,
        interfaceColor: INITIAL_SETTINGS.interfaceColor,
        clockDisplay: INITIAL_SETTINGS.clockDisplay,
        sendMessagesShortcut: INITIAL_SETTINGS.sendMessagesShortcut,
        language: INITIAL_SETTINGS.language,
      }
    default:
      return state
  }
}
