import * as React from 'react';
import useRouter from '../routes'
import queryString from 'query-string'
import { LoginParam } from '../models'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { JsonUtil } from '../util'
import { RouteComponentProps, withRouter, Route, Link } from 'react-router-dom'
import { ModalCircleProgress } from '../common/components'
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { ChevronLeft, ChevronRight, Menu as MenuIcon } from '@material-ui/icons'
import { Gallery, Main, Memo, Chat, Settings, HumorBoard } from './dashboard/'
import { Config, findIconImage } from '../common/config'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
            margin: theme.spacing(0),
            height: '100vh'
        },
    },
    root: {
      display: 'flex',

    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      height: '100%',
      width: '100%',
      // backgroundColor: '#EDEDED',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    title: {
      marginRight: 50
    },
}));

interface Props extends RouteComponentProps { }

export const Dashboard = (props: Props) => {
    const [barOpen, setBarOpen] = React.useState(false)
    const [progressOpen, setProgressOpen] = React.useState(false)
    const theme = useTheme();
    const classes = useStyles({});
    const urlPath = `/`
    
    React.useEffect(() => {
      let ac = new AbortController()
      return () => ac.abort()
    })

    setTimeout(() => {
        setProgressOpen(false)
    }, 2000)

    const handleDrawerOpen = () => {
        setBarOpen(true);
    };
    
    const handleDrawerClose = () => {
        setBarOpen(false);
    };

    const handleHistoryPush = (path: string) => {
        props.history.push(`/${path}`)
    }

    return (
        <div className={classes["@global"]}>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                      [classes.appBarShift]: barOpen,
                    })}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                            [classes.hide]: barOpen,
                            })}>
                            <MenuIcon />
                        </IconButton>
                        <Typography component={'div'} variant={"h6"} noWrap onClick={() => handleHistoryPush(``)}>
                            Anything Develop
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: barOpen,
                        [classes.drawerClose]: !barOpen,
                    })}
                    classes={{
                    paper: clsx({
                        [classes.drawerOpen]: barOpen,
                        [classes.drawerClose]: !barOpen,
                    }),
                    }}
                    open={barOpen}>
                    {/* 햄버거 아이콘 펼쳤을 때 구문 */}  
                    <div className={classes.toolbar}>
                        <div className={classes.title}>아무거나 메뉴</div>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
                        </IconButton>
                    </div>
                    <Divider />
                    {/* 좌측 메뉴 상단 */}
                    <List>
                        {Config.dashboard.menuTop.map((menuItem, index) => (
                            <ListItem button key={menuItem.name} onClick={() => handleHistoryPush(menuItem.name)}>
                              <ListItemIcon>{findIconImage(menuItem.icon)}</ListItemIcon>
                              <ListItemText primary={menuItem.name} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    {/* 좌측 메뉴 하단 */}
                    <List>
                        {Config.dashboard.menuBottom.map((menuItem, index) => (
                            <ListItem button key={menuItem.name} onClick={() => handleHistoryPush(menuItem.name)}>
                                <ListItemIcon>{findIconImage(menuItem.icon)}</ListItemIcon>
                                <ListItemText primary={menuItem.name} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <div className={classes.content}>
                    <div className={classes.toolbar} />
                    {/* 대시보드 내용 컨텐츠 부분 */}
                    <Route exact path="/" component={Main}/>
                    <Route path="/memo" component={Memo}/>
                    <Route path="/gallery" component={Gallery}/>
                    <Route path="/chat" component={Chat}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/humor" component={HumorBoard}/>
                </div>
            </div>
            <ModalCircleProgress open={progressOpen}/>
        </div>
    )
}

export default Dashboard