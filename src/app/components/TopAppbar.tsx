import React from 'react'
import { useTranslate } from 'react-translate'
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
  const t = useTranslate('TopAppBar')

  const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
    setValue(newValue)
  }

  const isNotMobile = isWidthUp('sm', width)
  const iconFontSize = isNotMobile ? 'small' : 'default'

  return (
    <AppBar position="sticky">
      <Tabs value={value} onChange={handleChange} aria-label="topbar tabs">
        <Tab
          wrapped
          label={isNotMobile && t('Chat')}
          icon={<ChatIcon fontSize={iconFontSize} />}
          {...a11yProps(0)}
        />
        <Tab
          wrapped
          label={isNotMobile && t('Settings')}
          icon={<SettingsIcon fontSize={iconFontSize} />}
          {...a11yProps(1)}
        />
      </Tabs>
    </AppBar>
  )
}

export default withWidth()(TopAppbar)
