// import { useRef } from "react"
import arrow from "../assets/arrow.svg"
// import { Welcome } from "../Pages/Welcome";
// import { About } from "../Pages/About";

export const ScrollArrow = () => {

    // const ref = useRef(null)

    // const handleClick = () => {
    //     ref.current?.scrollIntoView({ behavior: 'smooth' })
    // }

    return (
        <>




            <div className="">
                <img className="text-white" src={arrow} alt="arrow" />
            </div>


            {/* <div ref={ref}>
                <Welcome />
                <div style={{ height: '155rem' }} />
            </div> */}
        </>
    )
}