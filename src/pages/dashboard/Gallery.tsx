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

export const Gallery = (props: Props) => {
    const [open, setOpen] = React.useState(true)
    const classes = useStyles({});

    React.useEffect(() => {
      
    })
    
    setTimeout(() => {
        setOpen(false)
    }, 2000)

    return (
        <div className={classes["@global"]}>
            갤러리부분
        </div>
    )
}

export default Gallery