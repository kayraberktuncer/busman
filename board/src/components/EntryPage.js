import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: '#000000',
  },
  explanation: {
    margin: 20,
    fontSize: 20,
    textAlign: 'center',
    color: '#333333',
  },
})

export default function EntryPage() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Welcome To Busman
        </Typography>
        <Typography className={classes.explanation}>
          Busman is a passenger transportation management application.
        </Typography>
      </CardContent>
      <CardActions>
        <form>
          <label htmlFor="name">
            <input id="name" type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </CardActions>
    </Card>
  )
}
