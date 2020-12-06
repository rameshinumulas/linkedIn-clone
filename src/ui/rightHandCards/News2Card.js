import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        marginTop:theme.spacing(2),
        marginLeft: theme.spacing(5),
        width: theme.spacing(25),
        height: theme.spacing(40),
        
      },
    },
  }));
export default function News2Card() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Paper elevation={2}>
                <Typography variant="caption">Recent</Typography>
            </Paper>
        </div>
    )
}
