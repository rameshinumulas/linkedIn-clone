import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
    //   display: 'flex',
    //   flexWrap: 'wrap',
      '& > *': {
        marginTop:theme.spacing(6),
        // marginLeft: theme.spacing(5),
        // width: theme.spacing(50),
        height: theme.spacing(15),
        
      },
    },
  }));
export default function Postcreate() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
             <Paper elevation={2}>
                <Typography variant="caption">Recent</Typography>
            </Paper>
        </div>
    )
}
