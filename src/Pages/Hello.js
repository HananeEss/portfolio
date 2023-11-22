import React from 'react'
import { useSpring, animated } from '@react-spring/web'
import { Welcome } from './Welcome'
// import { Header } from '../Components/Header'


export const Hello = () => {

    const props = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 2000 },

    })

    return (


        <div className='' >

            <animated.div style={props} className='text-center w-75 mx-auto mt-5 pt-5'>
                <Welcome />
            </animated.div>
        </div>


    )
}
