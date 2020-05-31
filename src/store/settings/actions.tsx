import {
  CHANGE_USERNAME,
  CHANGE_INTERFACE_COLOR,
  CHANGE_CLOCK_DISPLAY,
  CHANGE_SEND_MESSAGE_SHORTCUT,
  CHANGE_LANGUAGE,
  RESET_SETTINGS,
  SettingsActionTypes,
} from './types'

export const changeUserName = (username: string): SettingsActionTypes => ({
  type: CHANGE_USERNAME,
  payload: username,
})

export const changeInterfaceColor = (
  interfaceColor: string
): SettingsActionTypes => ({
  type: CHANGE_INTERFACE_COLOR,
  payload: interfaceColor,
})

export const changeClockDisplay = (
  clockDisplay: string
): SettingsActionTypes => ({
  type: CHANGE_CLOCK_DISPLAY,
  payload: clockDisplay,
})

export const changeSendMessagesShortcut = (
  sendMessagesShortcut: string
): SettingsActionTypes => ({
  type: CHANGE_SEND_MESSAGE_SHORTCUT,
  payload: sendMessagesShortcut,
})

export const changeLanguage = (language: string): SettingsActionTypes => ({
  type: CHANGE_LANGUAGE,
  payload: language,
})

export const resetSettings = (): SettingsActionTypes => ({
  type: RESET_SETTINGS,
})
