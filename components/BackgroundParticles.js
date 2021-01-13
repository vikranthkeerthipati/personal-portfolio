// src/config/particlesConfig.js
import { useEffect, useState } from "react";
import Particles from "react-tsparticles"


export default function BackgroundParticles(){

  const [particlesConfig, useParticlesConfig] = useState({
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 1200
        }
      },
      "color": {
        "value": "#FFFFFF"
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#FFFFFF",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
          "mode": "remove"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 182.71792919680243,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "fpsLimit": 60
  });

  return(
    <Particles height="100vh" width="100vw" params={particlesConfig} />
  );

}
  
