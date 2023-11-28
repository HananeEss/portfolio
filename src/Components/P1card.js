// import { Card } from "react-bootstrap"
import styled from 'styled-components';

import bg2 from '../assets/comfy_studio.png'

const CardDiv = styled.div`
    width: 33%;

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const P1card = () => {
    return (
        <>
            <CardDiv style={{
                borderRadius: 0,
                height: "75%",
                background: `rgba(0,0,0,0.3) url(${bg2})`,
                backgroundSize: "cover",
                color: "white",
                justifyContent: "center",
            }}
            >
            </CardDiv>

            <CardDiv className='p-4  border-secondary-subtle text-center  bg-secondary bg-opacity-10'>
                <h1 className="p-3 fw-semibold font-monospace" style={{ fontSize: '30px' }} >Comfy Studio</h1>
                <p style={{ fontSize: '15px' }} >
                    Site de vente de meubles
                    <br />
                    (React, ExpressJS, Axios, MySQL/Sequelize, Tailwind)
                </p>
            </CardDiv>
        </>
    )
}