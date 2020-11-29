import NavBar from './components/NavBar';
import Splash from './components/Splash'
import './App.css'
import Particles from 'react-particles-js';
import particlesConfig from './components/particlesConfig';


function App() {
  return (
    <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
      <div style={{ position: 'absolute'}}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>
      
    <div>
    <NavBar />
    <Splash />
    </div>
    </div>
  );
}

export default App;
