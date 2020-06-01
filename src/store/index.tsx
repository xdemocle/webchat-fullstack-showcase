import { compose, createStore, combineReducers } from 'redux'
import persistState from 'redux-localstorage'
import socketMiddleWare from './socketMiddleWare'
import { ChatState } from './chat/types'
import { SettingsState } from './settings/types'
import chatReducer from './chat/reducer'
import settingsReducer from './settings/reducer'
export * from './chat/types'
export * from './settings/types'
export * from './chat/actions'
export * from './settings/actions'

// The top-level state object
export interface AppState {
  chat: ChatState
  settings: SettingsState
}

const rootReducer = combineReducers({
  chat: chatReducer,
  settings: settingsReducer,
})

// Not using __REDUX_DEVTOOLS_EXTENSION__ tool because some bug with react-localstorage
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose

const finalCreateStore = compose(socketMiddleWare)(createStore)

export default finalCreateStore(rootReducer, persistState())
