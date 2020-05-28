import { hot } from 'react-hot-loader/root'
import React from 'react'
import { Container, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TopAppbar from '../components/TopAppbar'
import { TabPanel } from '../components/TabPanel'
import ChatContainer from './Chat'
import SettingsContainer from './Settings'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  paper: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
})

const App = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  return (
    <Container maxWidth="md" disableGutters fixed className={classes.root}>
      <TopAppbar value={value} setValue={setValue} />
      <Paper square className={classes.paper}>
        <TabPanel value={value} index={0}>
          <ChatContainer />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SettingsContainer />
        </TabPanel>
      </Paper>
    </Container>
  )
}

export default hot(App)
