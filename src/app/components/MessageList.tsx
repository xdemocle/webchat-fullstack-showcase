import React, { useEffect } from 'react'
import cx from 'clsx'
import { animateScroll } from 'react-scroll'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import { Message } from '../../store/chat/types'

const useStyles = makeStyles(({ palette, spacing }) => {
  const radius = spacing(2.5)
  const rightBgColor = palette.primary.main

  return createStyles({
    root: {
      padding: '1rem',
      overflowY: 'scroll',
    },
    msg: {
      padding: spacing(1, 2),
      borderRadius: 4,
      marginBottom: 4,
      display: 'inline-block',
      wordBreak: 'break-word',
      fontSize: '0.85rem',
      maxWidth: '65%',
    },
    left: {
      borderTopRightRadius: radius,
      borderBottomRightRadius: radius,
      backgroundColor: palette.grey[100],
      color: palette.grey[900],
    },
    right: {
      borderTopLeftRadius: radius,
      borderBottomLeftRadius: radius,
      backgroundColor: rightBgColor,
      color: palette.common.white,
    },
    leftFirst: {
      borderTopLeftRadius: radius,
      marginTop: 'auto',
    },
    leftLast: {
      borderBottomLeftRadius: radius,
    },
    rightFirst: {
      borderTopRightRadius: radius,
      marginTop: 'auto',
    },
    rightLast: {
      borderBottomRightRadius: radius,
    },
  })
})

interface MessageListProps {
  messages: Message[]
  isSubmitting: boolean
  username: string
}

export default (props: MessageListProps) => {
  const classes = useStyles()
  const { messages, username } = props

  useEffect(() => {
    animateScroll.scrollToBottom({
      containerId: 'containerMessageList',
      duration: 300,
    })
  })

  const attachClass = (index, side) => {
    if (index === 0) {
      return classes[`${side}First`]
    }
    if (index === messages.length - 1) {
      return classes[`${side}Last`]
    }
    return ''
  }

  return (
    <Grid className={classes.root} id="containerMessageList">
      {messages.map(({ text, from }, i) => {
        const side = username === from ? 'right' : 'left'
        const showUsername = username !== from

        return (
          <Grid
            key={i}
            container
            item
            justify={side === 'right' ? 'flex-end' : 'flex-start'}
          >
            <Typography
              align={side}
              className={cx(classes.msg, classes[side], attachClass(i, side))}
            >
              {showUsername && (
                <strong>
                  {from}
                  <br />
                </strong>
              )}
              {text.split('\n').map((item, k) => (
                <span key={k}>
                  {item}
                  <br />
                </span>
              ))}
            </Typography>
          </Grid>
        )
      })}
    </Grid>
  )
}
