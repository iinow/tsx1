import * as React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { RestTemplate } from '../util/RestTemplate'
import { StringUtil } from '../util/StringUtil'
import data from '../common/data.json'

const useStyles = makeStyles(theme => ({
    submit: {
      margin: theme.spacing(1, 0, 2),
      padding: theme.spacing(1)
    },
    google: {
        backgroundColor: '#FF0000',
        margin: theme.spacing(1, 0, 2),
        padding: theme.spacing(1)
    },
    github: {
        backgroundColor: '#00FF00',
        margin: theme.spacing(1, 0, 2),
        padding: theme.spacing(1)
    }
}));

export interface OAuthMeta {
    url: string,
    image: string,
    name: string,
    resourceType: number
}

export const OAuthButton = (meta: OAuthMeta) => {
    const classes = useStyles({});

    function findType(resourceType: number) {
        switch(resourceType){
            case 1: 
                return classes.submit
            case 2:
                return classes.google
            case 3:
                return classes.github
        }
    }
    async function onClickMetaUrl() {
        // const req = await RestTemplate.get_KaKaoAuthorize()
        const url = StringUtil.format(
            data.sites.kakao.getAuthorizeUrl, 
            data.sites.kakao.clientId,
            data.sites.kakao.redirectUri)
        window.open(url, data.sites.kakao.resourceId, "height=600,width=400")
        
    }

    return (
        <>
            <Button
                // type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={findType(meta.resourceType)}
                onClick={onClickMetaUrl}>
                {meta.name}
            </Button>
        </>
    )
}

export default OAuthButton