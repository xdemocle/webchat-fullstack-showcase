/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { AppBar, Container, Tab, Tabs } from '@material-ui/core'
import { a11yProps, TabPanel } from '../components/TabPanel'
import ChatContainer from './Chat'
import SettingsContainer from './Settings'

export default () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Container maxWidth="sm">
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="topbar tabs">
          <Tab label="Chat" {...a11yProps(0)} />
          <Tab label="Settings" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ChatContainer />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SettingsContainer />
      </TabPanel>
    </Container>
  )
}
