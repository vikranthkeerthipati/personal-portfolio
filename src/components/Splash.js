import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import CoolAnimation from './CoolAnimation'
class Splash extends React.Component{

    render(){
        return(
            <Jumbotron style={{height:"100vh",backgroundColor:"#F7DDB2"}}>
                <CoolAnimation />
            </Jumbotron>
        );

    }
}

export default Splash;