import { makeStyles } from '@material-ui/core'
import { containerBlockWidth } from '../../constants'

console.log(containerBlockWidth)

export const useStyles = makeStyles((theme) => ({
    accordionMenu: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    },

    soundSettings: {
        width: containerBlockWidth,
        padding: theme.spacing(2),
        backgroundColor: theme.palette.primary.dark
    },

    containerBlock: {
        width: containerBlockWidth,
        display: 'flex',
        justifyContent: 'space-around',
        padding: theme.spacing(3),
        backgroundColor: theme.palette.primary.dark,
        alignItems: 'center'
    },

    drawer: {
        height: 1.5 * containerBlockWidth,
        overflowY: 'auto'
    },

    itemBlock: {
        padding: theme.spacing(1)
    },

    muteButton: {
        position: 'relative',
        left: 0,
        top: -10
    },

    upperCase: {
        textTransform: 'uppercase'
    },

}))