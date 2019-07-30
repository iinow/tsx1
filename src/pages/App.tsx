import React from 'react';
import { render } from 'react-dom';
import {TodoListTemplate}  from '../components/TodoListTemplate';
import { Button } from '@material-ui/core'
import SignInSide from '../components/SignInSide'
import SignIn from '../components/SignIn'

export class App extends React.Component {

    // render(){
    //     return (
    //         <div>
    //             <Button variant="contained" color="primary">
    //                 Hello world
    //             </Button>
    //             {/* <TodoListTemplate>
    //                 템플릿 완성?
    //             </TodoListTemplate> */}
    //         </div>
    //     )
    // }

    render(){
        return (
            <SignIn/>
        )
    }
}

export default App