import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { v1 as uuidv1 } from 'uuid'
import MessageList from '../components/MessageList'
import InputArea from '../components/InputArea'
import { sendMessage } from '../../store'

const useStyles = makeStyles({
  root: {
    overflow: 'hidden',
    flex: 1,
  },
  chatMessageList: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    overflowY: 'scroll',
    justifyContent: 'safe flex-end',
  },
  chatInputArea: {
    flexGrow: 0,
  },
})

export default () => {
  const classes = useStyles()
  const { messages } = useSelector((state: any) => state.chat)
  const { username, sendMessagesShortcut } = useSelector(
    (state: any) => state.settings
  )
  const [isSubmitting, setIsSubmitting] = useState(false)
  const dispatch = useDispatch()

  const addChatMessage = async text => {
    setIsSubmitting(true)

    const values = {
      id: uuidv1(),
      timestamp: new Date().toString(),
      from: username,
      text: text,
    }

    dispatch(sendMessage(values))

    // debugger
    // return dis.then(() => {
    //   setIsSubmitting(false)
    // })
  }

  return (
    <Grid
      container
      direction="column"
      justify="flex-end"
      alignItems="stretch"
      className={classes.root}
    >
      <Grid container item className={classes.chatMessageList}>
        <MessageList
          messages={messages}
          username={username}
          isSubmitting={isSubmitting}
        />
      </Grid>
      <Grid item className={classes.chatInputArea}>
        <InputArea
          addChatMessage={addChatMessage}
          sendMessagesShortcut={sendMessagesShortcut}
        />
      </Grid>
    </Grid>
  )
}
