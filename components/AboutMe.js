import {Container, Col, Row} from "react-bootstrap"

export default function AboutMe(){
    return(
        <Container fluid>
            <Row>
            <Col sm = {2}>

            </Col>
            <Col className="colContent">
            <h1><b>Hi there!</b></h1>
            <h3>I'm Vikranth Keerthipati, a first year CS major </h3>
            </Col>
            <Col sm = {2}></Col>
            </Row>
        </Container>
    )
}
