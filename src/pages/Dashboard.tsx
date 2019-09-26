import * as React from 'react';
import useRouter from '../routes'
import queryString from 'query-string'
import { LoginParam } from '../models'
import { makeStyles } from '@material-ui/core/styles';
import { JsonUtil } from '../util'
import { SchedulerToken } from '../common'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { PrimarySearchAppBar, ModalCircleProgress, MiniDrawer } from '../common/components'

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
            margin: theme.spacing(0)
        },
    }
}));

interface Props extends RouteComponentProps { }

export const Dashboard = (props: Props) => {
    const [open, setOpen] = React.useState(true)
    const classes = useStyles({});

    setTimeout(() => {
        setOpen(false)
    }, 2000)

    return (
        <div className={classes["@global"]}>
            <MiniDrawer/>
            <ModalCircleProgress open={open}/>
        </div>
    )
}

export default Dashboard