import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Slide } from '@material-ui/core'

const useStyles = makeStyles((/* theme */) =>
  createStyles({
    slides: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      overflowY: 'auto',
      width: '100%',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
    },
  }))

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
  direction: any
}

export const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default (props: TabPanelProps) => {
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
