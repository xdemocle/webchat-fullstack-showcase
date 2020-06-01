import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { useSelector, Provider } from 'react-redux'
import { TranslatorProvider } from 'react-translate'
import CssBaseline from '@material-ui/core/CssBaseline'
import store, { AppState } from '../store'
import { io } from '../store/socketMiddleWare'
import { getMessage, getStateMessages } from '../store/chat/actions'
import translations from './helpers/translations'
import initializeTheme from './helpers/theme'
import App from './containers/App'
import blinkTab from './helpers/browserTabBlinker'

io.on('GET_MESSAGE', message => {
  store.dispatch(getMessage(message))

  // Just a simple notification in browser tab
  blinkTab('(*)')
})

io.on('GET_STATE_MESSAGES', messages => {
  store.dispatch(getStateMessages(messages))
})

const Index = () => {
  const { language } = useSelector((state: AppState) => state.settings)
  const userTheme = initializeTheme()

  return (
    <ThemeProvider theme={userTheme}>
      <TranslatorProvider translations={translations[language]}>
        <CssBaseline />
        <App />
      </TranslatorProvider>
    </ThemeProvider>
  )
}

const IndexContainer = () => (
  <Provider store={store}>
    <Index />
  </Provider>
)

ReactDOM.render(<IndexContainer />, document.querySelector('#react-app'))
