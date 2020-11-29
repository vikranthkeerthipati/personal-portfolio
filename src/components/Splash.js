import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import CoolAnimation from './CoolAnimation';
import Particles from 'react-particles-js';



class Splash extends React.Component{

    render(){
        
        return(
            <Jumbotron style={{height:"100vh",backgroundColor:"#DEC6A0"}}>
                <CoolAnimation />
            </Jumbotron>
        );

    }
}

export default Splash;