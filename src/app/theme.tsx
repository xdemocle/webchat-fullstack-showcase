import { createMuiTheme } from '@material-ui/core/styles'

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffbe0b',
    },
    secondary: {
      main: '#fb5607',
    },
    error: {
      main: '#ff006e',
    },
    background: {
      default: '#fff',
    },
  },
})

export default theme
