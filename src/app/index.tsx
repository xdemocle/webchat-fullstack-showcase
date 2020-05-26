import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import { TranslatorProvider } from 'react-translate'
import CssBaseline from '@material-ui/core/CssBaseline'
import store from '../store'
import translations from './helpers/translations'
import initializeTheme from './helpers/theme'
import App from './containers/App'

const Index = () => {
  const locale = window.localStorage.getItem('locale') || 'en'
  const userTheme = initializeTheme()

  return (
    <Provider store={store}>
      <ThemeProvider theme={userTheme}>
        <TranslatorProvider translations={translations[locale]}>
          <CssBaseline />
          <App />
        </TranslatorProvider>
      </ThemeProvider>
    </Provider>
  )
}

ReactDOM.render(<Index />, document.querySelector('#react-app'))
