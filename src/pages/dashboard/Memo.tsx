import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom'
import queryString from 'query-string'
import { makeStyles } from '@material-ui/core/styles';
import { Memo as ComponentMemo } from '../../common/components'

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
            margin: theme.spacing(0)
        },
    }
}));

interface Props extends RouteComponentProps { }

export const Memo = (props: Props) => {
    const [open, setOpen] = React.useState(true)
    const classes = useStyles({});

    setTimeout(() => {
        setOpen(false)
    }, 2000)

    return (
        <div>
            {[1,2,3,4,5,6,7,8,9].map((value, index) => (
                <ComponentMemo key={index}/>
            ))}
        </div>
    )
}

export default Memo