import { Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import profile from '../../images/profile.jfif'
import background from '../../images/profileback.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        marginTop:theme.spacing(6),
        marginLeft: theme.spacing(5),
        width: theme.spacing(25),
        height: theme.spacing(40),
        
      },
    },
    paperStyle:{
      borderRadius:10
    },
    profileImages:{
        width: theme.spacing(8),
        height: theme.spacing(8),
        marginLeft:theme.spacing(8),
        // marginBottom:theme.spacing(8)
    },
    grid1:{
      backgroundImage:`url(${background})`,
      borderRadius:10,
      alignItems:"center"
    },
    
  }));
export default function ProfileCard() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Paper elevation={2} className={classes.paperStyle}>
              <Grid container alignItems="center" >
                <Grid item xs={12} className={classes.grid1} >
                <Avatar alt="Remy Sharp" src={profile} className={classes.profileImages} />
                </Grid>
              
              </Grid>
            </Paper>
        </div>
    )
}
