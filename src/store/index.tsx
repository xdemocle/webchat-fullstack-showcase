import { compose, createStore, combineReducers, Reducer } from 'redux'
import persistState from 'redux-localstorage'
import { ChatState } from './chat/types'
import { SettingsState } from './settings/types'
import chatReducer from './chat/reducer'
import settingsReducer from './settings/reducer'

export * from './chat/actions'
export * from './settings/actions'

// The top-level state object
export interface AppState {
  chat: ChatState
  settings: SettingsState
}

const rootReducer: Reducer<AppState> = combineReducers({
  chat: chatReducer,
  settings: settingsReducer,
})

// Not using __REDUX_DEVTOOLS_EXTENSION__ tool because some bug with react-localstorage
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose

export default createStore<AppState, any, any, any>(
  rootReducer,
  compose(persistState())
)
