import {useSpring, animated} from 'react-spring';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
export default function CoolAnimation(){
    const props = useSpring({ 
        config: {friction: 200},
        from: {opacity: 0},
        to: {opacity: 1}
    });
    return (
    <Container>
    <animated.h1 style={props}>I'm Vikranth</animated.h1>
    <animated.p style={props}>Dedicated towards social technology.</animated.p>
    </Container>
    );
}

