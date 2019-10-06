import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MenuItem } from '../../models'
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
});

interface Props {
  item: MenuItem
}

export default function Memo(props: Props) {
    const classes = useStyles({});
    const bull = <span className={classes.bullet}>•</span>;
  
    return (
      <Card className={classes.card}>
        <CardContent>
          {/* 날짜 */}
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {1}
          </Typography>
          <Divider />
          
          {/* 제목 */}
          {/* <Typography variant="h5" component="h2">
            {props.item.content}
          </Typography> */}

          {/* 부제목 */}
          {/* <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography> */}

          {/* 내용 */}
          <Typography variant="body2" component="p">
            {props.item.content}
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>

        {/* 추가 버튼 */}
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
}