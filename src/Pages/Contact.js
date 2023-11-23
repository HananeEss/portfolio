
import React, { useRef } from 'react';
import { Button, Form } from "react-bootstrap";
import emailjs from '@emailjs/browser';



export const Contact = () => {

    const form = useRef()

    const sendEmail = (e) => {

        e.preventDefault()
        console.log(process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            process.env.REACT_APP_PUBLIC_KEY,)

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                // alert('message sent successfully...')
                console.log(result.text);
            },
                (error) => {
                    console.log(error.text);
                }
            );
    }

    return (

        <div >

            <div>
                <h1 className="text-center lh-base font-monospace fw-semibold">Contact</h1>
                <p className='m-4 text-center'>👩🏻‍💻 I'm looking for a job ! Votre entreprise recherche des compétences pour ses projets numériques ? Je serais ravie de vous proposer ma collaboration pour contribuer à leur succès.
                    <br />
                    N'hésitez pas à me contacter !</p>
            </div>


            <Form className="p-4 border-secondary-subtle rounded-1 bg-secondary bg-opacity-10" style={{ fontSize: '15px' }} ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3 px-3 fw-semibold" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="" name="user_name" />
                </Form.Group>

                <Form.Group className="mb-3 px-3 fw-semibold" controlId="exampleForm.ControlInput2">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="" name="user_email" />
                </Form.Group>

                <Form.Group className="mb-3 px-3 fw-semibold" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} name='message' />
                </Form.Group>
                <Form.Group className="mb-3 px-3 fw-semibold" controlId="exampleForm.ControlTextarea1" >
                    <Button as="input" type="submit" variant="outline-secondary" value="Envoyer" style={{ fontSize: '15px' }} />
                </Form.Group>

            </Form>
        </div>
    )
}