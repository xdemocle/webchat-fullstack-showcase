import { hot } from 'react-hot-loader/root'
import React from 'react'
import { Container } from '@material-ui/core'
import TopAppbar from '../components/TopAppbar'
import { TabPanel } from '../components/TabPanel'
import ChatContainer from './Chat'
import SettingsContainer from './Settings'

const App = () => {
  const [value, setValue] = React.useState(0)

  return (
    <Container maxWidth="md" disableGutters>
      <TopAppbar value={value} setValue={setValue} />
      <TabPanel value={value} index={0}>
        <ChatContainer />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SettingsContainer />
      </TabPanel>
    </Container>
  )
}

export default hot(App)
