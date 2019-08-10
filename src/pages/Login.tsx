import * as React from 'react';
import SignIn from '../components/SignIn'
import queryString from 'query-string'
import { LoginParam } from '../models/LoginParam'
import { JsonUtil } from '../util/JsonUtil'
import { __RouterContext } from 'react-router'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import useRouter from '../routes'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import OAuthButton from '../components/OAuthButton'
import Axios from 'axios'

function MadeWithLove() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Built with love by the '}
            <Link color="inherit" href="https://material-ui.com/">
                Material-UI
            </Link>
            {' team.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

interface Props extends RouteComponentProps { }

const LoginInner = (props: Props) => {

    const [token, setToken] = React.useState("token")

    const onClickLogin = async () => {
        // props.history.push("/dashboard")
        let res = await Axios.get(`http://localhost:565`)
        alert(res.data)
    }

    window.addEventListener("message", (e) => {
        if(e){
            props.history.push("/dashboard")
        }
    })
    const classes = useStyles({});

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    {/* <LockOutlinedIcon /> */}
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <OAuthButton
                        token={token}
                        image=""
                        name="Github"
                        url=""
                        resourceType={1} />
                    <OAuthButton
                        token={token}
                        image=""
                        name="Google"
                        url=""
                        resourceType={2} />
                    <OAuthButton
                        token={token}
                        image=""
                        name="Kakao"
                        url=""
                        resourceType={3} />
                    <Grid container>
                        <Grid item xs>
                            <div onClick={onClickLogin}>
                                Forgot password??
                            </div>
                            {/* <Link href="/dashboard" variant="body2">
                                Forgot password?
                                </Link> */}
                        </Grid>
                        <Grid item>
                            {/* <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                                </Link> */}
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <MadeWithLove />
            </Box>
        </Container>
    );
}

export const Login = withRouter<Props, any>(LoginInner)


// const router = useRouter()
// const { location } = router
// const query = JSON.stringify(queryString.parse(location.search))

// let param: LoginParam = new LoginParam()
// try{
//     param = JsonUtil.parseJsonString(JSON.parse(query), LoginParam)
// }catch(e){
//     console.log(`Mapping failed: ${query}`)
// }