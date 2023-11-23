
import { Button } from "react-bootstrap"
import { Skills } from "../Components/Skills"
import styled from 'styled-components';

const skills = ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'Bootstrap', 'React', 'NodeJS Basics', 'ExpressJS', 'SQL Basics', 'Sequelize', 'GIT', 'Github']
const targetedSkills = ['Java', 'Testing', 'Web Security', 'SEO']

const Description = styled.div` 

    @media (max-width: 768px) {
        width: 100%;
        display: flex; 
        flex-direction: column;
    }
`

const DescriptionDiv = styled.div` 
    width: 75%;
    padding-left: 40px;

    @media (max-width: 768px) {
        width: 100%;
        padding-left: 15px;
    }
`

const Competences = styled.div`
    width: 50%;
    padding-left: 40px;
    @media (max-width: 768px) {
        width: 100%;
        padding-left: 15px;
    }
`


export const About = () => {



    return (

        <div>
            <div className="mt-5 pt-5" style={{ height: '15%' }}>
                <h1 className="text-center lh-base font-monospace fw-semibold">A propos de moi</h1>
            </div>

            <Description className="d-flex" >

                <DescriptionDiv className=" pe-4">

                    <p className="py-4" style={{ fontSize: '25px' }}> Qui suis-je ?</p>

                    <p style={{
                        fontSize: '15px',
                        textAlign: 'justify',
                    }}>
                        👋 Bonjour ! Je suis une développeuse web full stack passionnée, ayant embrassé cette voie après une reconversion. Mon parcours atypique m'a dotée de compétences variées et de développer une approche créative dans la résolution de problèmes.
                        <br />
                        <br />
                        🚀 Je me concentre principalement sur le développement full stack avec une affinité particulière pour l'environnement JavaScript et ses frameworks.
                        <br />
                        <br />
                        💡 Autodidacte dans l'âme, je suis constamment en quête de nouvelles connaissances pour rester à jour avec les dernières technologies et tendances. Je suis également interessée de découvrir et d'apprendre de nouvelles technologies.
                        <br />
                        <br />
                        🎯 Mon objectif est clair : créer des expériences numériques exceptionnelles. De la conception d'interfaces utilisateur conviviales à la réalisation d'applications web robustes, en passant par l'exploration de nouvelles idées, je suis toujours prête à relever des défis stimulants.
                    </p>

                    <div className="pt-4">

                        {/* <Button type="button" className="px-3" variant="outline-secondary" size="sm">Contact</Button> */}
                        <Button download href="./CV_Hanane-Essalehi.pdf" type="button" value="Télécharger" className="d-inline-flex justify-content-around px-3" variant="outline-secondary" size="sm">
                            <div><p className="m-0">Curriculum vitae</p></div>
                            <div className="ps-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                            </svg></div>
                        </Button>


                    </div>
                </DescriptionDiv>

                <Competences>
                    <div>
                        <p className="py-4" style={{ fontSize: '25px' }}>
                            Compétences</p>
                        <Skills skill={skills} />
                    </div>
                    <div>
                        <p className="py-4" style={{ fontSize: '25px' }}>
                            Compétences visées</p>
                        <Skills skill={targetedSkills} />
                    </div>

                </Competences>

            </Description>

        </div >

    )
}