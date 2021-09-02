import MainClock from '../MainClock'
import SleepBar from '../SleepBar'

import { Grid } from '@material-ui/core'
import { useStyles } from './styles'
import SleepStatus from '../SleepStatus'

export default function Bedtime() {
    const classes = useStyles()

    return (
        <>
            <SleepBar />

            <Grid container justifyContent="center" className={classes.root} >
                <Grid item xs={12}>
                    <Grid container justifyContent="center">
                        <MainClock />
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid container justifyContent="center">
                        <SleepStatus />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}