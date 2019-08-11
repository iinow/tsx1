import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { RouteComponentProps } from 'react-router-dom'

export const Title: React.SFC = () => {
    return(
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            fgd
        </Typography>
    )
}

export default Title