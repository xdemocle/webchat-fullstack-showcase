import React from 'react'
import { AppBar, Tab, Tabs } from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat'
import SettingsIcon from '@material-ui/icons/Settings'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import { a11yProps } from './TabPanel'

interface TopAppbarProps {
  value: number
  setValue: (value: number) => void
  width: Breakpoint
}

const TopAppbar = (props: TopAppbarProps) => {
  const { value, setValue, width } = props

  const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <AppBar position="static">
      <Tabs
        // centered
        // variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="topbar tabs"
      >
        <Tab
          wrapped
          label={isWidthUp('sm', width) && 'Chat'}
          icon={<ChatIcon fontSize="small" />}
          {...a11yProps(0)}
        />
        <Tab
          wrapped
          label={isWidthUp('sm', width) && 'Settings'}
          icon={<SettingsIcon fontSize="small" />}
          {...a11yProps(1)}
        />
      </Tabs>
    </AppBar>
  )
}

export default withWidth()(TopAppbar)
