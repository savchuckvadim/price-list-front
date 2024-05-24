import { useEffect, useState } from 'react'
import './ScrollToTop.scss'


const ScrollToTop = ({ isTopDisplayShowing, setScrollTopStatus }) => {
    const [isMouseOn, setIsMouseOn] = useState(false)
    const [displayIconColor, setDisplayIconColor] = useState('rgb(37, 40, 45)')
    const [iconClass, setIconClass] = useState(
        `scroll-icon ${!isTopDisplayShowing ? "scroll-icon--pop" : ""} ${isMouseOn ? "scroll-icon--big" : ""}`);
    
        const [wrapperClass, setWrapperClass] = useState(
        "scroll-top-icon__wrapper");


    useEffect(() => {
        if (isMouseOn) {
            // setDisplayIconSize('24')
            setDisplayIconColor('rgb(40, 104, 212)')

        } else {
            // setDisplayIconSize('20')
            setDisplayIconColor('rgb(37, 40, 45)')
        }
    }, [isMouseOn]);
    useEffect(() => {
        if (!isTopDisplayShowing) {


        }
        setWrapperClass(
            !isTopDisplayShowing ? "scroll-top-icon__wrapper scroll-top-icon__wrapper--visible" : "scroll-top-icon__wrapper"
        )
        setIconClass(
            `scroll-icon ${!isTopDisplayShowing ? "scroll-icon--pop" : ""} ${isMouseOn ? "scroll-icon--big" : ""}`
        )
    }, [isTopDisplayShowing]);



    return <div className={wrapperClass}>
        <svg xmlns="http://www.w3.org/2000/svg"
            onMouseLeave={() => setIsMouseOn(false)}
            onMouseEnter={() => setIsMouseOn(true)}
            onClick={() => setScrollTopStatus(true)}

            fill="currentColor" className={iconClass} viewBox="0 0 16 16">
            <path color={displayIconColor} fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
        </svg>
    </div>


}

export default ScrollToTop