import React from 'react'
import { useSpring, animated } from '@react-spring/web'
import { Welcome } from './Welcome'
// import { Header } from '../Components/Header'


export const Hello = () => {

    const props = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 2000 }
    })

    return (


        <div className='col-8'>

            <animated.div style={props}>
                <Welcome />
            </animated.div>
        </div>


    )
}
