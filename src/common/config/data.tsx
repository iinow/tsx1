import { 
    Chat, 
    PhotoLibrary, 
    Image, 
    InsertDriveFile, 
    SettingsApplications } from '@material-ui/icons'
import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react';

const MenuIcon = {
    "gallery": 1,
    "memo": 2,
    "chat": 3,
    "settings": 4
}

export function findIconImage(num: number) {
    switch(num){
        case MenuIcon.chat:
            return <Chat/>
        case MenuIcon.memo:
            return <InsertDriveFile/>
        case MenuIcon.gallery:
            return <Image/>
        case MenuIcon.settings:
            return <SettingsApplications/>
    }
}