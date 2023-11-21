import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import { Welcome } from './Pages/Welcome';
// import { Home } from './Pages/Home';
import { useRef } from 'react';
// import bg1 from './assets/ColorPigments/Kingblack95_ColorPigments_Collision_Background_KB95_007.png'

// import projets from './datas/projects'

import bg2 from './assets/comfy_studio.png'
import bg3 from './assets/kasa_capture.png'
import bg4 from './assets/ColorPigments/Kingblack95_ColorPigments_Collision_Background_KB95_010.png'
import bg5 from './assets/studio_ghibli.png'
// import { Welcome } from './Pages/Welcome';
import { About } from './Pages/About'
import { Hello } from './Pages/Hello';
// import { Skills } from './Pages/Skills';
import { Header } from './Components/Header';

import Card from 'react-bootstrap/Card';
import { Contact } from './Pages/Contact';
import { Footer } from './Components/Footer';
import { ProjetsTitle } from './Pages/ProjetsTitle';
// import { ProjectCard } from './Components/Projects';

function App() {

  //la référence (parallaxRef) permet d'obtenir l'accès au composant Parallax
  const parallaxRef = useRef()


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
          offset = 6;
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

      <Parallax pages={7.15} class="animation" ref={parallaxRef}>

        {/* offset : Determines where the layer will be at when scrolled to (0=start, 1=1st page, ...) 
          factor : Size of a page, (1=100%, 1.5=1 and 1/2, ...)
      */}

        <ParallaxLayer
          offset={0}
          factor={1}
          style={{
            background: `rgba(0,0,0,0.325) url(${bg4})`,
            backgroundSize: 'cover',
            backgroundPosition: "center",
            // backgroundBlendMode: "darken"
          }}
        >
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={1}
          className="flex-center text-center flex-column blend-text "
        >
          <Hello />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.95}
          speed={-5}
          factor={1}
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
          offset={1}
          factor={1}
          speed={0.1}
          className="px-4 flex-center flex-column"
        >
          <About />
        </ParallaxLayer>

        {/* Projects SECTION */}

        <ParallaxLayer
          offset={2}
          factor={0.5}
          speed={0.1}
          // factor={0.5}
          // style={{ zIndex: 1, maxWidth: "50em" }}
          className="p-5 flex-center flex-column mx-auto"
          id='projects'
        >
          <ProjetsTitle />
        </ParallaxLayer>

        {/* Projects CARDS */}

        <ParallaxLayer
          // offset={2}
          // factor={0.5}

          //dans start je rajoute +0.5
          sticky={{ start: 2.5, end: 4 }}
          style={{ width: "33%" }}
        >

          <Card style={{
            borderRadius: 0,
            width: "100%",
            height: "75%",
            background: `rgba(0,0,0,0.3) url(${bg2})`,
            // backgroundPosition: "center",
            // backgroundBlendMode: "darken",
            backgroundSize: "cover",
            color: "white",
            // display: "flex",
            // alignItems: "center",
            justifyContent: "center",
            // objectFit: 'contain'
          }}
          >
          </Card>

          <div className='p-4 border-end border-bottom border-secondary-subtle text-center  bg-secondary bg-opacity-10'>
            <h1 className="p-3 fw-semibold font-monospace" style={{ fontSize: '30px' }} >Comfy Studio</h1>
            <p style={{ fontSize: '15px' }} >
              Site de vente de meubles
              <br />
              (React, ExpressJS, Axios, MySQL/Sequelize, Tailwind)
            </p>
          </div>

        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 3, end: 4.5 }}
          // className="flex-center"
          style={{ width: "34%", marginLeft: "33%" }}
        >
          <Card style={{
            borderRadius: 0,
            width: "100%",
            height: "75%",
            background: `rgba(0,0,0,0.3) url(${bg3})`,
            // backgroundPosition: "center",
            // backgroundBlendMode: "darken",
            backgroundSize: "cover ",
            color: "white",
            // display: "flex",
            // alignItems: "center",
            justifyContent: "center",
          }}
          >
          </Card>

          <div className='p-4 border-end border-bottom border-start border-secondary-subtle text-center  bg-secondary bg-opacity-10'>
            <h1 className="p-3 fw-semibold font-monospace" style={{ fontSize: '30px' }} >Kasa</h1>
            <p style={{ fontSize: '15px' }} >
              Site d'annonces de logements
              <br />
              (React, CSS, Styled Components)
            </p>
          </div>

        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 3.5, end: 5 }}
          // className="flex-center"
          style={{ width: "33%", marginLeft: "67%" }}
        >
          <Card style={{
            borderRadius: 0,
            // width: "100%",
            height: "75%",
            background: `rgba(0,0,0,0.3) url(${bg5})`,
            // backgroundPosition: "center",
            // backgroundBlendMode: "darken",
            backgroundSize: "cover",
            color: "white",
            // display: "flex",
            // alignItems: "center",
            justifyContent: "center"
          }}
          >
          </Card>

          <div className='p-4 border-bottom border-start border-secondary-subtle text-center  bg-secondary bg-opacity-10'>
            <h1 className="p-3 fw-semibold font-monospace" style={{ fontSize: '30px' }} >Studio Ghibli</h1>
            <p style={{ fontSize: '15px' }} >
              Site pour afficher les films du studio Ghibli
              <br />
              (HTML, JavaScript, CSS)
            </p>
          </div>

        </ParallaxLayer>


        <ParallaxLayer
          offset={6}
          factor={1}
          speed={0.1}
          className="p-5 flex-center flex-column"
        >
          <Contact />
        </ParallaxLayer>

        <ParallaxLayer
          offset={7}
          factor={0.1}
        // className="p-5 flex-center flex-column"
        >
          <Footer />
        </ParallaxLayer>


      </Parallax>

    </div>
  );
}

export default App;
