import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom'
import queryString from 'query-string'
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MenuItem } from '../../models/'
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
    card: {
        minWidth: 258,
        maxWidth: 258,
        minHeight: 300,
        maxHeight: 300,
        marginRight: 20,
        marginBottom: 20,
        // display: 'inline'
        display: 'inline-block',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    cardDate: {
        paddingTop: 3,
        paddingRight: 14,
        paddingLeft: 14,
        // textAlign: "center"
        transform: '-50%',
    }
});

interface Props { 
    items: MenuItem[],
    refresh: any
}

export const MemoItemInput = (props: Props) => {
    const [open, setOpen] = React.useState(true)
    const [content, setContent] = React.useState()
    const classes = useStyles({});

    React.useEffect(() => {

    })

    setTimeout(() => {
        setOpen(false)
    }, 2000)

    const addItem = () => {
        let m = MenuItem.create(content)
        props.items.push(m)
        props.refresh()
    }

    const setContentState = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    };

    return (
        // <>
        //     <TextareaAutosize  aria-label="empty textarea" placeholder="Empty"/>
        // </>
        <Card className={classes.card}>
            <div className={classes.cardDate}>
                {/* 날짜 */}
                <Typography component={'div'} className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                </Typography>
            </div>
            <Divider />
            <CardContent>
                {/* 제목 */}
                {/* <Typography variant="h5" component="h2" onChange={setContentState}>
                    be
                    dd
                    nev
                    
                    lent
                </Typography> */}

                {/* 부제목 */}
                {/* <Typography component={'div'} className={classes.pos} color="textSecondary">
                    adjective
                </Typography> */}

                {/* 내용 */}
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => addItem()}>추가</Button>
            </CardActions>
      </Card>
    )
}

export default MemoItemInput