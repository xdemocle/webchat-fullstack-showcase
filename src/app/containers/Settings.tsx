import React from 'react'
import { useTranslate } from 'react-translate'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@material-ui/core'
import {
  changeUserName,
  changeInterfaceColor,
  changeClockDisplay,
  changeSendMessagesShortcut,
  changeLanguage,
  resetSettings,
} from '../../store'

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flex: 1,
      flexDirection: 'column',
    },
    card: {
      margin: theme.spacing(3),
      [theme.breakpoints.down('xs')]: {
        margin: theme.spacing(0),
      },
    },
    dividerCardHeader: {
      marginTop: theme.spacing(2),
    },
    dividerFormControls: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    formElements: {
      maxWidth: '50%',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
      },
    },
  })
)

export default () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const t = useTranslate('SettingsView')

  const {
    username,
    interfaceColor,
    clockDisplay,
    sendMessagesShortcut,
    language,
  } = useSelector(state => state.settings)

  // TODO: Improve real time validation instead of just at onBlur.
  const errorUsername = username.length < 3

  const handleChangeUserName = event => {
    dispatch(changeUserName(event.target.value))
  }

  const handleInterfaceColor = (event, value) => {
    dispatch(changeInterfaceColor(value))
  }

  const handleChangeClockDisplay = (event, value) => {
    dispatch(changeClockDisplay(value))
  }
  const handleChangeSendMessagesShortcut = (event, value) => {
    dispatch(changeSendMessagesShortcut(value))
  }

  const handleChangeLanguage = (event, child) => {
    dispatch(changeLanguage(child.props.value))
  }

  const handleResetButton = () => {
    dispatch(resetSettings())
  }

  return (
    <Grid container className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          title={t('TitleView')}
          titleTypographyProps={{ variant: 'h5', color: 'primary' }}
          subheader={<Divider className={classes.dividerCardHeader} />}
        />
        <CardContent>
          <FormControl component="fieldset" fullWidth>
            <TextField
              variant="outlined"
              label={t('UserNameLegend')}
              defaultValue={username}
              className={classes.formElements}
              onBlur={handleChangeUserName}
              minLength={3}
              maxLength={25}
              required
              error={errorUsername}
              helperText={errorUsername && t('UserNameErrorText')}
            />
          </FormControl>

          <Divider className={classes.dividerFormControls} />

          <FormControl component="fieldset">
            <FormLabel component="legend">
              {t('InterfaceColorLegend')}
            </FormLabel>
            <RadioGroup
              row
              aria-label="position"
              name="interfaceColor"
              value={interfaceColor}
              onChange={handleInterfaceColor}
            >
              <FormControlLabel
                label={t('InterfaceColorAutoRadio')}
                value="auto"
                control={<Radio />}
              />
              <FormControlLabel
                label={t('InterfaceColorLightRadio')}
                value="light"
                control={<Radio />}
              />
              <FormControlLabel
                label={t('InterfaceColorDarkRadio')}
                value="dark"
                control={<Radio />}
              />
            </RadioGroup>
          </FormControl>

          <Divider className={classes.dividerFormControls} />

          <FormControl component="fieldset">
            <FormLabel component="legend">{t('ClockDisplayLegend')}</FormLabel>
            <RadioGroup
              row
              aria-label="position"
              name="clockDisplay"
              value={clockDisplay}
              onChange={handleChangeClockDisplay}
            >
              <FormControlLabel
                label={t('ClockDisplay12Radio')}
                value="12"
                control={<Radio />}
              />
              <FormControlLabel
                label={t('ClockDisplay24Radio')}
                value="24"
                control={<Radio />}
              />
            </RadioGroup>
          </FormControl>

          <Divider className={classes.dividerFormControls} />

          <FormControl component="fieldset">
            <FormLabel component="legend">{t('SendMessagesLegend')}</FormLabel>
            <RadioGroup
              row
              aria-label="position"
              name="sendMessages"
              value={sendMessagesShortcut}
              onChange={handleChangeSendMessagesShortcut}
            >
              <FormControlLabel
                label={t('SendMessagesOnRadio')}
                value="on"
                control={<Radio />}
              />
              <FormControlLabel
                label={t('SendMessagesOffRadio')}
                value="off"
                control={<Radio />}
              />
            </RadioGroup>
          </FormControl>

          <Divider className={classes.dividerFormControls} />

          <FormControl component="fieldset" fullWidth>
            <FormLabel component="legend">{t('LanguageLegend')}</FormLabel>
            <Select
              value={language}
              onChange={handleChangeLanguage}
              className={classes.formElements}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="pt">Português</MenuItem>
              <MenuItem value="it">Italiano</MenuItem>
            </Select>
          </FormControl>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardHeader
          title={t('TitleDefaultBlock')}
          titleTypographyProps={{ variant: 'h5', color: 'primary' }}
          subheader={<Divider className={classes.dividerCardHeader} />}
        />
        <CardContent>
          <FormControl component="fieldset" fullWidth>
            <Button
              fullWidth
              variant="contained"
              className={classes.formElements}
              onClick={handleResetButton}
            >
              {t('ResetSettingsButton')}
            </Button>
          </FormControl>
        </CardContent>
      </Card>
    </Grid>
  )
}
