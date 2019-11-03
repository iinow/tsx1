import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableRow, 
    Paper,
    Button } from '@material-ui/core';
import { RestTemplate } from '@src/util'
import { createPageable } from '@src/request'

const useStyles = makeStyles(theme => ({
    root: {
        // width: '100%',
        overflowX: 'auto',
        marginLeft: '100px',
        marginRight: '100px',
    },
    table: {
        minWidth: 650,
    },
}));

interface Props extends RouteComponentProps { }

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
  
const sort = createPageable(0, 2, "id", "DESC")

export const HumorBoard = (props: Props) => {
    const [open, setOpen] = React.useState(true)
    const [datas, setDatas] = React.useState([])
    const [, updateState] = React.useState()
    const classes = useStyles({});
    
    React.useEffect(() => {
        // setDatas([])

        // RestTemplate.get_BoardHumors(sort).then(data => {
        //     let copy = datas
        //     data.content.forEach((d, index: number) => {
        //         copy.push({ 'index': index, 'title': d.title })
        //         setDatas(copy)
        //         console.log(d, index, datas.length)
        //     })
        // })
        console.log('몇번째냐')
    })

    const handleOnClick = () => {
        updateState({})
    }

    return (
        <div>
            <div style={{alignContent: 'right'}}>
                <Button onClick={handleOnClick}>새 글</Button>
            </div>
            <Paper className={classes.root}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>번호</TableCell>
                        <TableCell align="right">제목</TableCell>
                        <TableCell align="right">글쓴이</TableCell>
                        <TableCell align="right">날짜</TableCell>
                        <TableCell align="right">추천</TableCell>
                        <TableCell align="right">조회</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {datas.map(row => (
                            <TableRow key={row.index}>
                                <TableCell component="th" scope="row">
                                    {row.index}
                                </TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">0</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    )
}

export default HumorBoard