import useMediaQuery from '@material-ui/core/useMediaQuery'
import { createMuiTheme } from '@material-ui/core/styles'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  return createMuiTheme({
    palette: {
      type: prefersDarkMode ? 'dark' : 'light',
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
}
