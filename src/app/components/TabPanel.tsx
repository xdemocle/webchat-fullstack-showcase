import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Slide } from '@material-ui/core'

const useStyles = makeStyles({
  slides: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflowY: 'auto',
  },
})

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
  direction: string
}

export const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export const TabPanel = (props: TabPanelProps) => {
  const classes = useStyles()
  const { children, direction = 'left', value, index, ...other } = props

  return (
    <Slide
      direction={direction}
      in={value === index}
      mountOnEnter
      unmountOnExit
    >
      <div
        role="tabpanel"
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        className={classes.slides}
        {...other}
      >
        {children}
      </div>
    </Slide>
  )
}
