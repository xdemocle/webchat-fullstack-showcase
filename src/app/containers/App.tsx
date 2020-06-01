import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Container, Paper } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import TopAppbar from '../components/TopAppbar'
import TabPanel from '../components/TabPanel'
import { useSelector } from 'react-redux'
import ChatContainer from './Chat'
import SettingsContainer from './Settings'

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    paper: {
      position: 'relative',
      display: 'flex',
      flex: 1,
      overflow: 'hidden',
      backgroundColor: theme.palette.type === 'dark' ? '#505050' : '#f5f5f5',
    },
  })
)

const App = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const { messages } = useSelector((state: any) => state.chat)

  return (
    <Container maxWidth="md" disableGutters fixed className={classes.root}>
      <TopAppbar badge={messages.length} value={value} setValue={setValue} />
      <Paper square className={classes.paper}>
        <TabPanel direction="right" value={value} index={0}>
          <ChatContainer />
        </TabPanel>
        <TabPanel direction="left" value={value} index={1}>
          <SettingsContainer />
        </TabPanel>
      </Paper>
    </Container>
  )
}

export default hot(App)
