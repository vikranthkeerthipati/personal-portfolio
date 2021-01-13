import {useSpring, animated} from 'react-spring';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Typed from 'react-typed';

export default function CoolAnimation(){

    const divStyle = {
        color: "white",
        backgroundColor: "rgba(17,31,77,0.7)",
        height: "100vh",
    }

    const props = useSpring({ 
        config: {friction: 200},
        from: {opacity: 0},
        to: {opacity: 1}
    });
    return (
        <>
 
    <Container fluid >
        <Row style={divStyle}>
            <Col sm = {2}></Col>
            <Col style={{zIndex:"12"}}>

    <animated.div style={props, {marginTop:"50vh", backgroundColor:"rgba(17, 31, 77,0.8)"}}>
    {/* <animated.h5>Hi there!</animated.h5> */}
    <animated.h1 className = "break-after" style={props}>I'm <b style={{color:"#ffdfb4"}}>Vikranth Keerthipati</b></animated.h1>
    <div>
    <Typed
                    strings={['Dedicated towards social technology','Rising Entrepreneur','Full Stack Developer','Interested in ML and Cloud Computing', 'Avid Basketball Follower']}
                    typeSpeed={50}
                    loop
                    className = "typed"
                />
                </div>
                <animated.div className = "links" style={props}>
    <animated.h6>
        <a href="https://storage.googleapis.com/vikranth.dev/KEERTHIPATI_VIKRANTH_RESUME.pdf" target="_blank"><b>RESUME</b></a><b> | </b>
        <a href="https://www.linkedin.com/in/vikranth-keerthipati/" target="_blank"><b> LINKEDIN</b></a><b> | </b>
        <a href="https://github.com/vikranthkeerthipati" target="_blank"><b>GITHUB</b></a><b> | </b>
        <a href="mailto:me@vikranth.dev" target="_blank"><b>EMAIL</b></a>
    </animated.h6>
    </animated.div>
    </animated.div>
    </Col>
    <Col sm = {2}></Col>
    </Row>
    </Container>
    </>
    );
}

