import styled from 'styled-components';
import bg3 from '../assets/kasa_capture.png'

const CardDiv = styled.div`
    width: 34%;
    margin-left: 33%;

    @media (max-width: 768px) {
        width: 100%;
        margin-left: 0%;
        margin-top: 20px
    }
`

// const DescriptionDiv = styled.div`

//     width: 34%;
//     margin-left: 33%;

//     @media (max-width: 768px) {
//         width: 100%;
//         margin-left: 0%;
//     }
// `

export const P2card = () => {
    return (
        <>
            <CardDiv style={{
                borderRadius: 0,
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
            </CardDiv>

            <CardDiv className='p-4 border-end border-bottom border-start border-secondary-subtle text-center  bg-secondary bg-opacity-10'>
                <h1 className="p-3 fw-semibold font-monospace" style={{ fontSize: '30px' }} >Kasa</h1>
                <p style={{ fontSize: '15px' }} >
                    Site d'annonces de logements
                    <br />
                    (React, CSS, Styled Components)
                </p>
            </CardDiv >
        </>
    )
}