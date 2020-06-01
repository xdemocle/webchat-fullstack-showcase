import React, { useState } from 'react'
import { useTranslate } from 'react-translate'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Grid, Button, TextareaAutosize } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: '0 0 0.35rem',
    },
    textField: {
      position: 'relative',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderRadius: '4px',
      width: 'calc(100% - 2.15rem)',
      margin: '0 0.35rem',
      padding: '0.75rem 0.65rem',
      borderColor: theme.palette.text.hint,
      font: 'inherit',
      color: 'currentColor',
      border: 0,
      height: '1.1876rem',
      display: 'block',
      minWidth: 0,
      background: 'none',
      boxSizing: 'content-box',
      animationName: 'mui-auto-fill-cancel',
      letterSpacing: 'inherit',
      outline: 'none',
      resize: 'none',
      '&:focus': {
        borderColor: theme.palette.primary.main,
      },
    },
    sendButton: {
      marginRight: '0.35rem',
      padding: '0.6rem 1.3rem',
      '.MuiButton-startIcon': {
        marginLeft: 0,
        marginRight: 0,
      },
      [theme.breakpoints.down('xs')]: {
        padding: '0.745rem 0.5rem',
        fontSize: 0,
      },
    },
  })
)

interface InputAreaProps {
  addChatMessage: (text: string) => void
  sendMessagesShortcut: string
}

export default (props: InputAreaProps) => {
  const classes = useStyles()
  const [text, setText] = useState('')
  const t = useTranslate('ChatView')
  const { addChatMessage, sendMessagesShortcut } = props
  const isButtonDisabled = !text.length

  const handleTextareaChange = event => {
    setText(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    addChatMessage(text)
    setText('')
  }

  const onKeyDownHandle = event => {
    if (event.ctrlKey && event.key === 'Enter') {
      event.preventDefault()
    }

    if (!isButtonDisabled && sendMessagesShortcut === 'on') {
      if (event.ctrlKey && event.key === 'Enter') {
        handleSubmit(event)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <Grid container justify="center" alignItems="flex-end">
        <Grid item xs>
          <TextareaAutosize
            rowsMin={1}
            rowsMax={5}
            value={text}
            placeholder={t('TextPlaceholder')}
            onChange={handleTextareaChange}
            onKeyDown={onKeyDownHandle}
            className={classes.textField}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isButtonDisabled}
            size="large"
            startIcon={<SendIcon />}
            disableElevation
            className={classes.sendButton}
            aria-label={t('TextSendButton')}
          >
            {t('TextSendButton')}
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
