import { render } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const sideStyle = {
    textAlign:"right",
    backgroundColor:"rgba(0,0,0,0.8)",
    zIndex: "1",
    position: "fixed",
    padding: "0vh",
    textAlign: "center",
    top:"20vh",
    right:"0",
    padding:"2vh 1vh 2vh 1vh",
    zIndex: "11"
}

const logoStyle = {
    fontSize:"5vh",
    color:"white",
    paddingTop: "1vh"
}
export default function Sidebar(){


    return(
        <>
        <div style={sideStyle}>
        <a href="https://www.linkedin.com/in/vikranth-keerthipati/" target="_blank"><FontAwesomeIcon icon={faLinkedin} style={logoStyle} /></a>
        <br></br>
        <a href="https://github.com/vikranthkeerthipati" target="_blank"><FontAwesomeIcon icon={faGithub} style={logoStyle}/></a>
        <br></br>
        <a href="mailto:me@vikranth.dev"><FontAwesomeIcon icon={faEnvelope} style={logoStyle} /></a>
        </div>

        </>
    );
}

