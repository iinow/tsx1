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

/**
 * @param props 
 * @description 설정 화면 컴포넌트
 */
export const Settings = (props: Props) => {
    const [open, setOpen] = React.useState(true)
    const classes = useStyles({});
    
    React.useEffect(() => {

    })

    return (
        <div className={classes["@global"]}>
            설정 부분
        </div>
    )
}

export default Settings