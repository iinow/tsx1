import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom'
import queryString from 'query-string'
import { makeStyles } from '@material-ui/core/styles';
import { Memo as ComponentMemo, MemoItemInput } from '../../common/components'
import { MenuItem } from '../../models'

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
 * {@link https://material-ui.com/components/tabs}
 * Vertical tabs 로 전환 예정
*/
export const Memo = (props: Props) => {
    const [open, setOpen] = React.useState(true)
    let values: Array<MenuItem> = []
    const [list] = React.useState(values)
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const classes = useStyles({});

    setTimeout(() => {
        setOpen(false)
    }, 2000)

    const handleAddItem = () => {
        console.log(list)
    }

    return (
        <div>
            <MemoItemInput items={list} refresh={forceUpdate}/>
                {list.map((value, index) => (
                    <ComponentMemo key={index} item={value}/>
                ))}
        </div>
    )
}

export default Memo