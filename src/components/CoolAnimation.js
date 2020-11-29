import {useSpring, animated} from 'react-spring';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Typed from 'react-typed';


const calc = (x, y) => [-(y - window.innerHeight / 2) / 5, (x - window.innerWidth / 2) / 5, 1.1]
const trans = (x, y, s) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function CoolAnimation(){

    const [transProps, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))


    const props = useSpring({ 
        config: {friction: 200},
        from: {opacity: 0},
        to: {opacity: 1}
    });
    return (
    <Container>
        <animated.div       
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: transProps.xys.interpolate(trans)}} >
    <animated.h1 style={props}>I'm Vikranth</animated.h1>
    <animated.div style={props}>
    <Typed
                    strings={['Dedicated towards social technology','Loves basketball','Loves his Ronibaby']}
                    typeSpeed={50}
                    loop
                />
    </animated.div>
    </animated.div>
    </Container>
    
    );
}

