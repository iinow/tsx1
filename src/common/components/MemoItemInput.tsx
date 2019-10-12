import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom'
import queryString from 'query-string'
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Button, Checkbox, Divider, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { MenuItem } from '../../models/'
import { MemoCheckbox } from '../components'

const useStyles = makeStyles({
    card: {
        backgroundColor: '#FFFEF2',
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
        minWidth: 230,
        maxWidth: 230,
        minHeight: 34,
        maxHeight: 34,  
        margin: 0
    },
    titleText:{
        lineHeight: '34px',
        fontSize: 11,
        display: 'inline-block',
        color: '#999'
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
                    <Typography className={classes.titleText}>Word of the Day</Typography>
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