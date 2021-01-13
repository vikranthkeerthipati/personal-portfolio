import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/Home.module.js'

import Home from "../components/Home"
import AboutMe from "../components/AboutMe"
import BackgroundParticles from "../components/BackgroundParticles"
import Sidebar from "../components/Sidebar"
export default function App() {

  return (
    <>
    <Head>
      <title>Vikranth Keerthipati</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    </Head>
      <style jsx global>
    {styles}
  </style>
    <div id = "root" style={{position:"relative"}}>

    <div id="particles" style={{position:"absolute"}}>
      <BackgroundParticles />
    </div>
    <Home />
      </div>
    </>
  );
}
