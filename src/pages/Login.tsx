import * as React from 'react';
import SignIn from '../common/components/SignIn'
import queryString from 'query-string'
import { LoginParam } from '../models/LoginParam'
import { JsonUtil } from '../util/JsonUtil'
import { __RouterContext } from 'react-router'
import { RouteComponentProps, withRouter, Link as CLink } from 'react-router-dom'
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
import Axios from 'axios'
import { User } from '../models'
import { OAuthButton } from '../common/components'
// import { cookie } from '../common'

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

interface Props extends RouteComponentProps { 
    user: User,
}

const LoginInner = (props: Props) => {
    React.useEffect(() => {
        // if(cookie.read('auth')){
        //     props.history.push('/')
        // }
        // if(localStorage.getItem('auth')){
        //     props.history.push('/')
        // }

        const abortController = new AbortController()
        const signal = abortController.signal

        return function cleanup() {
            abortController.abort()
        }
    })

    window.addEventListener("message", (e) => {
        const json: string = JSON.stringify(e.data)
        if(typeof e.data == 'string' && !e.data.startsWith("webpack")){
            console.log(json)
            console.log(e.data)
            // props.user.token = json
            // cookie.write('auth', e.data)
            // localStorage.setItem('auth', e.data)
            props.history.push("/")
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
                    {/* <TextField
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
                    /> */}
                    <OAuthButton
                        // token={token}
                        image=""
                        name="Github"
                        url=""
                        resourceType={1} />
                    <OAuthButton
                        // token={token}
                        image=""
                        name="Google"
                        url=""
                        resourceType={2} />
                    <OAuthButton
                        // token={token}
                        image=""
                        name="Kakao"
                        url=""
                        resourceType={3} />
                    <OAuthButton
                        // token={token}
                        image=""
                        name="Facebook"
                        url=""
                        resourceType={4} />
                    <Grid container>
                        <Grid item xs>
                            <CLink to="/oauth2/redirect">Forgot password??</CLink>
                            
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