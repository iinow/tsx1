import * as React from 'react';
import { render } from 'react-dom';
import {TodoListTemplate}  from '../components/TodoListTemplate';
import { Button } from '@material-ui/core'
// import SignInSide from '../components/SignInSide'
import SignIn from '../components/SignIn'
// import '../scss/WaveBackgrond.scss'
// import '../scss/WaveBackgounr2.scss'
// import '../scss/AutoScrollingBackground.scss'
// import '../scss/TextClipBackground.scss'
import { style } from '@material-ui/system'
import Login from './Login'

/*
export class App extends React.Component {
    // render(){
    //     return (
    //         <div>
    //             <Button variant="contained" color="primary">
    //                 Hello world
    //             </Button>
    //             <TodoListTemplate>
    //                 템플릿 완성?
    //             </TodoListTemplate> 
    //         </div>
    //     )
    // }

    componentDidMount = () => {
        // document.body.style.width = '100%'
        // document.body.style.height= '100%'
    }

    render(){
        return (
            // <div className='box'>
            //     <div className='wave -one'>

            //     </div>
            //     <div className='wave -two'>

            //     </div>
            //     <div className='wave -three'>

            //     </div>
            //     <div className='title'>
            //         신기
            //     </div>
            // </div>

            // <div>
            //     <div style={{width: '100%', height: '100%', backgroundColor: '#000000'}}>
            //         테스트
            //     </div>
            // </div>
            // <SignIn/>
            // <div className="wrapper">
            //   <div className="wave">dd</div>
            // </div>

            // <section className="pen">
            //     <div className="panel top">
            //         <h1>Animate: background-position</h1>
            //     </div>
            //     <div className="panel bottom">
            //         <h1>Animate: translate3d</h1>
            //         <div className="scroll"></div>
            //     </div>
            // </section>
            <p>
                Spice up your type with CSS
                <span>
                    Animated text fill
                </span>
                &mdash; no JavaScript required &mdash;
            </p>
        )
    }
}
*/

export const App = () => {
    const [name, setName] = React.useState("initialName");
  
    const setUsernameState = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    };
  
    return (
      <>
        <Login/>
      </>
    );
  };
  
export default App