import * as React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles'
import { purple } from '@material-ui/core/colors';
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { RestTemplate } from '../../util/RestTemplate'
import { StringUtil } from '../../util/StringUtil'
import { ResourceType } from '../'
import data from '../data.json'
import NewWindow from 'react-new-window'

const useStyles = makeStyles(theme => ({
    root: {
      margin: theme.spacing(1, 0, 2),
      padding: theme.spacing(1)
    },
}))

const ButtonGithubColor = '#25292E'
const ButtonGoogleColor = "#EA4135"
const ButtonKakaoColor = '#FAE200'
const BUttonFacebookColor = '#4267B2'

const findButtonTheme = (mainColor: string) => createMuiTheme({
    palette: {
        primary: {
            "300": mainColor,
            "500": mainColor,
        }
    }
})

const findButton = (mainColor: string) => withStyles(theme => ({
    root: {
      color: theme.palette.getContrastText(mainColor),
      backgroundColor: mainColor,
      "&:hover": {
        backgroundColor: mainColor
      }
    }
}))(Button);

export interface OAuthMeta {
    token: string
    url: string
    image: string
    name: string
    resourceType: number
}

export const OAuthButton = (meta: OAuthMeta) => {
    const classes = useStyles({});

    function findType(resourceType: number) {
        switch(resourceType){
            case ResourceType.GITHUB: 
                return findButton(ButtonGithubColor)
            case ResourceType.GOOGLE:
                return findButton(ButtonGoogleColor)
            case ResourceType.KAKAO:
                return findButton(ButtonKakaoColor)
            case ResourceType.FACEBOOK:
                return findButton(BUttonFacebookColor)
        }
    }

    function findResourceType(resourceType: number){
        return data.sites.filter((res) => {
            if(res.resourceId == resourceType.toString())
                return true
            return false
        })[0]
    }

    let resource = findResourceType(meta.resourceType)
    let CustomButton = findType(meta.resourceType)

    async function onClickMetaUrl() {
        const url = StringUtil.format(
            resource.getAuthorizeUrl,
            // resource.clientId,
            resource.redirectUri)
        window.open(url, resource.resourceId, "height=600,width=400")
    }

    return (
        <>
            <CustomButton
                // type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.root}
                onClick={onClickMetaUrl}>
                {meta.name}
            </CustomButton>
        </>
    )
}

export default OAuthButton