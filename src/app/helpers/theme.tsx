import { useSelector } from 'react-redux'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { createMuiTheme } from '@material-ui/core/styles'
import { AppState } from '../../store'

export default () => {
  const { interfaceColor } = useSelector((state: AppState) => state.settings)
  let prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  if (interfaceColor === 'light') {
    prefersDarkMode = false
  } else if (interfaceColor === 'dark') {
    prefersDarkMode = true
  }

  return createMuiTheme({
    palette: {
      type: prefersDarkMode ? 'dark' : 'light',
      primary: {
        light: prefersDarkMode ? '#ec55fa' : '#f94f36',
        main: prefersDarkMode ? '#B60DC6' : '#BF0B0B',
        dark: prefersDarkMode ? '#820094' : '#870000',
      },
      secondary: {
        light: prefersDarkMode ? '#68fa4e' : '#ffff50',
        main: prefersDarkMode ? '#1CC60D' : '#ffcc00',
        dark: prefersDarkMode ? '#009400' : '#c79c00',
      },
      background: {
        paper: prefersDarkMode ? '#424242' : '#fff',
        default: prefersDarkMode ? '#303030' : '#fafafa',
      },
      text: {
        primary: prefersDarkMode ? '#fff' : '#000',
        secondary: prefersDarkMode ? 'rgba(255, 255, 255, 0.7)' : '#333',
        disabled: prefersDarkMode
          ? 'rgba(0, 0, 0, 0.38)'
          : 'rgba(255, 255, 255, 0.5)',
        hint: prefersDarkMode
          ? 'rgba(255, 255, 255, 0.23)'
          : 'rgba(0, 0, 0, 0.23)',
      },
    },
  })
}
