import { Grid } from '@material-ui/core'
import React from 'react'
import Postcreate from './centercards/Postcreate'
import Show_post from './centercards/Show_post'
import Card1 from './leftHandCards/Card1'
import ProfileCard from './leftHandCards/ProfileCard'
import LinkedinNewscard from './rightHandCards/LinkedinNewscard'
import News2Card from './rightHandCards/News2Card'

export default function Home() {
    return (
        <div>
            <Grid container>
                <Grid item xs={3}>
                    <ProfileCard />
                    <Card1 />
                </Grid>
                <Grid item xs={6}>
                    <Postcreate />
                    <Show_post />
                </Grid>
                <Grid item xs={3}>
                   <LinkedinNewscard />
                   <News2Card />
                </Grid>
            </Grid>
        </div>
    )
}
