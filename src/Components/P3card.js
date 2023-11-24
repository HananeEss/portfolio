import styled from 'styled-components';
import bg5 from '../assets/studio_ghibli.png'

const CardDiv = styled.div`
    width: 33%;
    margin-left: 67%;

    @media (max-width: 768px) {
        width: 100%;
        margin-left: 0%;
        margin-top: 15px
    }
`

export const P3card = () => {
    return (
        <>
            <CardDiv style={{
                borderRadius: 0,
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
            </CardDiv>

            <CardDiv className='p-4 border-bottom border-start border-secondary-subtle text-center  bg-secondary bg-opacity-10'>
                <h1 className="p-3 fw-semibold font-monospace" style={{ fontSize: '30px' }} >Studio Ghibli</h1>
                <p style={{ fontSize: '15px' }} >
                    Site pour afficher les films du studio Ghibli
                    <br />
                    (HTML, JavaScript, CSS, API)
                </p>
            </CardDiv>
        </>
    )
}