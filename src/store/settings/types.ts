import random from 'random'

export const CHANGE_USERNAME = 'CHANGE_USERNAME'
export const CHANGE_INTERFACE_COLOR = 'CHANGE_INTERFACE_COLOR'
export const CHANGE_CLOCK_DISPLAY = 'CHANGE_CLOCK_DISPLAY'
export const CHANGE_SEND_MESSAGE_SHORTCUT = 'CHANGE_SEND_MESSAGE_SHORTCUT'
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'
export const RESET_SETTINGS = 'RESET_SETTINGS'

export const INITIAL_SETTINGS = {
  username: `guest${random.int(10000, 99999)}`,
  interfaceColor: 'auto',
  clockDisplay: '12',
  sendMessagesShortcut: 'off',
  language: 'en',
}

export interface SettingsState {
  username: string
  interfaceColor: string
  clockDisplay: string
  sendMessagesShortcut: string
  language: string
}

export interface ChangeUsernameAction {
  type: typeof CHANGE_USERNAME
  payload: string
}

export interface ChangeInterfaceColorAction {
  type: typeof CHANGE_INTERFACE_COLOR
  payload: string
}

export interface ChangeClockDisplayAction {
  type: typeof CHANGE_CLOCK_DISPLAY
  payload: string
}

export interface ChangeSendMessagesShortcut {
  type: typeof CHANGE_SEND_MESSAGE_SHORTCUT
  payload: string
}

export interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE
  payload: string
}

export interface ResetSettingsAction {
  type: typeof RESET_SETTINGS
}

export type SettingsActionTypes =
  | ChangeUsernameAction
  | ChangeInterfaceColorAction
  | ChangeClockDisplayAction
  | ChangeSendMessagesShortcut
  | ChangeLanguageAction
  | ResetSettingsAction
