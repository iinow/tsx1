import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom'
import queryString from 'query-string'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
            margin: theme.spacing(0)
        },
    }
}));

interface Props extends RouteComponentProps { }

export const Main = (props: Props) => {
    const [open, setOpen] = React.useState(true)
    const classes = useStyles({});

    setTimeout(() => {
        setOpen(false)
    }, 2000)

    return (
        <div className={classes["@global"]}>
            대시보드 메인부분
        </div>
    )
}

export default Main