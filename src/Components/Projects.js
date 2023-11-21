import { Card } from "react-bootstrap"



export const ProjectCard = ({ bg, projet }) => {
    return (
        <>
            <Card style={{
                borderRadius: 0,
                // width: "100%",
                height: "100%",
                background: `rgba(0,0,0,0.3) url(${bg})`,
                // backgroundPosition: "center",
                backgroundBlendMode: "darken",
                backgroundSize: "cover",
                color: "white",
                // display: "flex",
                // alignItems: "center",
                justifyContent: "center",
                // objectFit: 'contain'
            }}
            >
                {projet && projet.map((item) => (
                    <p className="display-6 text-center m-5">{item.title}</p>
                ))}

            </Card>
        </>
    )
}