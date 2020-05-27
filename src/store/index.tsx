import { compose, createStore, combineReducers, Reducer } from 'redux'
import persistState from 'redux-localstorage'
import { ChatState } from './chat/types'
import { SettingsState } from './settings/types'
import chatReducer from './chat/reducer'
import settingsReducer from './settings/reducer'

// The top-level state object
export interface AppState {
  chat: ChatState
  settings: SettingsState
}

const rootReducer: Reducer<AppState> = combineReducers({
  chat: chatReducer,
  settings: settingsReducer,
})

const enhancer = compose(persistState())

export default createStore<AppState, any, any, any>(rootReducer, enhancer)
