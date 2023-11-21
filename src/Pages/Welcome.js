import React from "react"
import photo from "../assets/photo_linkdin.JPG"
import { Image } from "react-bootstrap"
// import { ScrollArrow } from "../Components/ScrollArrow"



export const Welcome = () => {

    return (
        <div>

            <div className="py-4">
                <Image className="object-fit-cover" width="250" height="250" src={photo} roundedCircle />
            </div>

            <div>
                <h1 className="lh-base font-monospace fw-light">Hey, Je suis <span className="text-uppercase fw-semibold">Hanane Essalehi</span></h1>
                <p className="lh-lg">Développeuse Full-Stack avec un intérêt pour les frameworks JavaScript, passionnée et autodidacte, prête à relever des défis et à créer des expériences numériques exceptionnelles.</p>
            </div>


        </div >
    )
}