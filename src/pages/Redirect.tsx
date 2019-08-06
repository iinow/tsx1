import * as React from 'react';

export const Redirect = () => {
    React.useEffect(() => {
        console.log("접속함")
        window.close()
    })    

    return (
        <>

        </>
    )
}