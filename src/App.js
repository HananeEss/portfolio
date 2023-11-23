import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import { Welcome } from './Pages/Welcome';
// import { Home } from './Pages/Home';
import { useRef } from 'react';
// import bg1 from './assets/ColorPigments/Kingblack95_ColorPigments_Collision_Background_KB95_007.png'

// import projets from './datas/projects'



import bg4 from './assets/ColorPigments/Kingblack95_ColorPigments_Collision_Background_KB95_010.png'

// import { Welcome } from './Pages/Welcome';
import { About } from './Pages/About'
import { Hello } from './Pages/Hello';
// import { Skills } from './Pages/Skills';
import { Header } from './Components/Header';

import { Contact } from './Pages/Contact';
import { Footer } from './Components/Footer';
import { ProjetsTitle } from './Pages/ProjetsTitle';
// import { ProjectCard } from './Components/Projects';
import useAdaptiveTriggers from './parallx-config'
import { P1card } from './Components/P1card';
import { P2card } from './Components/P2card';
import { P3card } from './Components/P3card';
// import { ParallaxConfig } from './parallx-config'
// import Adaptive from './parallx-config'

const Adaptive = {
  xs: 'xs',
  xl: 'xl',
};

const Pages = {
  firstPage: 'firstPage',
  secondPage: 'secondPage',
  thirdPage: 'thirdPage',
  fourthPage: 'fourthPage',
  fifthPage: 'fifthPage',
  sixthPage: 'sixthPage',
  seventhPage: 'seventhPage',
  eighthPage: 'eighthPage',
  ninthPage: 'ninthPage',
  tenthPage: 'tenthPage'
};

const ParallaxConfig = {
  [Adaptive.xs]: {
    pages: 7.5,
    [Pages.firstPage]: {
      offset: 0,
      factor: 1,
    },
    [Pages.secondPage]: {
      offset: 0,
      speed: 0.5,
      factor: 1
    },
    [Pages.thirdPage]: {
      offset: 0.95,
      speed: -5,
      factor: 1
    },
    [Pages.fourthPage]: {
      offset: 1,
      speed: 0.15,
      factor: 1
    },
    [Pages.fifthPage]: {
      offset: 2.6,
      speed: 0.15,
      factor: 0.5,
    },
    [Pages.sixthPage]: {
      offset: 3.2,
      speed: 0.1,
      factor: 1,
    },
    [Pages.seventhPage]: {
      offset: 4.2,
      speed: 0.1,
      factor: 1,
    },
    [Pages.eighthPage]: {
      offset: 5.2,
      speed: 0.1,
      factor: 1,
    },
    [Pages.ninthPage]: {
      offset: 6.5,
      speed: 0.1,
      factor: 1,
    },
    [Pages.tenthPage]: {
      offset: 5,
      factor: 0,
    }
  },

  [Adaptive.xl]: {
    pages: 7.15,
    [Pages.firstPage]: {
      offset: 0,
      factor: 1,
    },
    [Pages.secondPage]: {
      offset: 0,
      speed: 0.5,
      factor: 1
    },
    [Pages.thirdPage]: {
      offset: 0.95,
      speed: -5,
      factor: 1
    },
    [Pages.fourthPage]: {
      offset: 1,
      speed: 0.2,
      factor: 1
    },
    [Pages.fifthPage]: {
      offset: 2,
      speed: 0.1,
      factor: 0.5,
    },
    [Pages.sixthPage]: {
      sticky: { start: 2.5, end: 4 },
    },
    [Pages.seventhPage]: {
      sticky: { start: 3, end: 4.5 },
    },
    [Pages.eighthPage]: {
      sticky: { start: 3.5, end: 5 },
    },
    [Pages.ninthPage]: {
      offset: 6.1,
      speed: 0.1,
      factor: 1,
    },
    [Pages.tenthPage]: {
      offset: 7,
      factor: 0.1,
    }

  },
}

console.log(ParallaxConfig)

function App() {

  //la référence (parallaxRef) permet d'obtenir l'accès au composant Parallax
  const parallaxRef = useRef()

  const width = useAdaptiveTriggers({});

  console.log(width)
  console.log(ParallaxConfig[width][Pages.sixthPage])


  const scrollToSection = (sectionId) => {
    if (parallaxRef.current) {
      let offset;

      switch (sectionId) {
        case 'about':
          offset = 1;
          break;
        case 'projects':
          offset = 2;
          break;
        case 'contact':
          offset = 5.5;
          break;
        default:
          // Gérer le cas par défaut ou d'autres identifiants si nécessaire
          break;
      }
      console.log(offset)
      parallaxRef.current.scrollTo(offset);
    }
  };


  return (
    <div className="App" >
      <Header scrollToSection={scrollToSection} />

      <Parallax pages={ParallaxConfig[width].pages} key={width} class="animation" ref={parallaxRef}>

        <ParallaxLayer
          offset={ParallaxConfig[width][Pages.firstPage].offset}
          factor={ParallaxConfig[width][Pages.firstPage].factor}
          style={{
            background: `rgba(0,0,0,0.325) url(${bg4})`,
            backgroundSize: 'cover',
            backgroundPosition: "center",
            // backgroundBlendMode: "darken"
          }}
        >
        </ParallaxLayer>

        <ParallaxLayer
          offset={ParallaxConfig[width][Pages.secondPage].offset}
          speed={ParallaxConfig[width][Pages.secondPage].speed}
          factor={1}
        // className="flex-center text-center flex-column blend-text "
        >
          <Hello />
        </ParallaxLayer>

        <ParallaxLayer
          offset={ParallaxConfig[width][Pages.thirdPage].offset}
          speed={ParallaxConfig[width][Pages.thirdPage].speed}
          factor={ParallaxConfig[width][Pages.thirdPage].factor}
          style={{ display: "flex", justifyContent: "center" }}
          onClick={() => {
            parallaxRef.current.scrollTo(1)
          }}
        >
          <p>
            <a href="#About">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </a>
          </p>
        </ParallaxLayer>

        {/* About SECTION */}

        <ParallaxLayer
          offset={ParallaxConfig[width][Pages.fourthPage].offset}
          factor={ParallaxConfig[width][Pages.fourthPage].factor}
          speed={ParallaxConfig[width][Pages.fourthPage].speed}
          id='about'
        >
          <About />
        </ParallaxLayer>

        {/* Projects SECTION */}

        <ParallaxLayer
          offset={ParallaxConfig[width][Pages.fifthPage].offset}
          factor={ParallaxConfig[width][Pages.fifthPage].factor}
          speed={ParallaxConfig[width][Pages.fifthPage].speed}
          // factor={0.5}
          // style={{ zIndex: 1, maxWidth: "50em" }}
          className="p-5 flex-center flex-column mx-auto"
          id='projects'
        >
          <ProjetsTitle />
        </ParallaxLayer>

        {/* Projects CARDS */}

        <ParallaxLayer
          sticky={ParallaxConfig[width][Pages.sixthPage].sticky}
          offset={ParallaxConfig[width][Pages.sixthPage].offset}
          factor={ParallaxConfig[width][Pages.sixthPage].factor}
          speed={ParallaxConfig[width][Pages.sixthPage].speed}
        >

          <P1card />

        </ParallaxLayer>

        <ParallaxLayer
          sticky={ParallaxConfig[width][Pages.seventhPage].sticky}
          offset={ParallaxConfig[width][Pages.seventhPage].offset}
          factor={ParallaxConfig[width][Pages.seventhPage].factor}
          speed={ParallaxConfig[width][Pages.seventhPage].speed}
        >
          <P2card />

        </ParallaxLayer>

        <ParallaxLayer
          sticky={ParallaxConfig[width][Pages.eighthPage].sticky}
          offset={ParallaxConfig[width][Pages.eighthPage].offset}
          factor={ParallaxConfig[width][Pages.eighthPage].factor}
          speed={ParallaxConfig[width][Pages.eighthPage].speed}
        >
          <P3card />

        </ParallaxLayer>


        <ParallaxLayer
          offset={ParallaxConfig[width][Pages.ninthPage].offset}
          factor={ParallaxConfig[width][Pages.ninthPage].factor}
          speed={ParallaxConfig[width][Pages.ninthPage].speed}
          className="flex-center flex-column mx-auto w-75"
        >
          <Contact />
        </ParallaxLayer>

        <ParallaxLayer
          offset={ParallaxConfig[width][Pages.tenthPage].offset}
          factor={ParallaxConfig[width][Pages.tenthPage].factor}
        // className="p-5 flex-center flex-column"
        >
          <Footer />
        </ParallaxLayer>


      </Parallax>

    </div>
  );
}

export default App;
