import NavBar from '../NavBar'

import { useHistory } from 'react-router-dom'

import { Fab } from '@material-ui/core'
import { Navigation } from '@material-ui/icons'
import { useStyles } from './styles'

import { uiBuilderSend } from '../../scenes/uiBuilderReact'
import { START_BEDTIME } from '../../scenes/nodeRedTopics'

export default function Home() {
    const classes = useStyles()
    const history = useHistory()

    const startBedtime = () => {
        history.push('/startBedtime')
    }

    return (
        <>
            <NavBar />
            <Fab
                className={classes.fab}
                variant="extended"
                color="primary"
                onClick={startBedtime}
            >
                <Navigation className={classes.extendedIcon} />
                Start Bedtime
            </Fab>
        </>
    )
}
