// import { Parallax, ParallaxLayer } from "@react-spring/parallax"
// import { useRef } from "react"
// import { Card } from "react-bootstrap"

// import bg2 from '../assets/comfy_studio.png'
// import bg3 from '../assets/kasa_capture.png'
// import bg5 from '../assets/studio_ghibli.png'


// export const Parallaxprojects = () => {

//     const ref = useRef()

//     return (


//         <Parallax pages={3} ref={ref}>

//             <ParallaxLayer
//                 //dans start je rajoute +0.5
//                 // sticky={ParallaxConfig[width][Pages.sixthPage].sticky}
//                 sticky={{ start: 0.5, end: 1.5 }}
//                 style={{ width: "33%" }}
//             >

//                 <Card style={{
//                     borderRadius: 0,
//                     width: "100%",
//                     height: "75%",
//                     background: `rgba(0,0,0,0.3) url(${bg2})`,
//                     // backgroundPosition: "center",
//                     // backgroundBlendMode: "darken",
//                     backgroundSize: "cover",
//                     color: "white",
//                     // display: "flex",
//                     // alignItems: "center",
//                     justifyContent: "center",
//                     // objectFit: 'contain'
//                 }}
//                 >
//                 </Card>

//                 <div className='p-4 border-end border-bottom border-secondary-subtle text-center  bg-secondary bg-opacity-10'>
//                     <h1 className="p-3 fw-semibold font-monospace" style={{ fontSize: '30px' }} >Comfy Studio</h1>
//                     <p style={{ fontSize: '15px' }} >
//                         Site de vente de meubles
//                         <br />
//                         (React, ExpressJS, Axios, MySQL/Sequelize, Tailwind)
//                     </p>
//                 </div>

//             </ParallaxLayer>

//             <ParallaxLayer
//                 sticky={{ start: 0.5, end: 2 }}
//                 // className="flex-center"
//                 style={{ width: "34%", marginLeft: "33%" }}
//             >
//                 <Card style={{
//                     borderRadius: 0,
//                     width: "100%",
//                     height: "75%",
//                     background: `rgba(0,0,0,0.3) url(${bg3})`,
//                     // backgroundPosition: "center",
//                     // backgroundBlendMode: "darken",
//                     backgroundSize: "cover ",
//                     color: "white",
//                     // display: "flex",
//                     // alignItems: "center",
//                     justifyContent: "center",
//                 }}
//                 >
//                 </Card>

//                 <div className='p-4 border-end border-bottom border-start border-secondary-subtle text-center  bg-secondary bg-opacity-10'>
//                     <h1 className="p-3 fw-semibold font-monospace" style={{ fontSize: '30px' }} >Kasa</h1>
//                     <p style={{ fontSize: '15px' }} >
//                         Site d'annonces de logements
//                         <br />
//                         (React, CSS, Styled Components)
//                     </p>
//                 </div>

//             </ParallaxLayer>

//             <ParallaxLayer
//                 sticky={{ start: 0.5, end: 2.5 }}
//                 // className="flex-center"
//                 style={{ width: "33%", marginLeft: "67%" }}
//             >
//                 <Card style={{
//                     borderRadius: 0,
//                     // width: "100%",
//                     height: "75%",
//                     background: `rgba(0,0,0,0.3) url(${bg5})`,
//                     // backgroundPosition: "center",
//                     // backgroundBlendMode: "darken",
//                     backgroundSize: "cover",
//                     color: "white",
//                     // display: "flex",
//                     // alignItems: "center",
//                     justifyContent: "center"
//                 }}
//                 >
//                 </Card>

//                 <div className='p-4 border-bottom border-start border-secondary-subtle text-center  bg-secondary bg-opacity-10'>
//                     <h1 className="p-3 fw-semibold font-monospace" style={{ fontSize: '30px' }} >Studio Ghibli</h1>
//                     <p style={{ fontSize: '15px' }} >
//                         Site pour afficher les films du studio Ghibli
//                         <br />
//                         (HTML, JavaScript, CSS)
//                     </p>
//                 </div>

//             </ParallaxLayer>
//         </Parallax>

//     )
// }