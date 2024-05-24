import './Gradient.css'
import { useEffect, useRef } from 'react';
import Logo from '../Logo/Logo';


const Gradient = ({ isActive }) => {

    const scrollRef = useRef(null);
    useEffect(() => {
        // if (currentRoute !== ROUTE.CALLING) {

        //     if (!isResized) {
        //         const asyncFunction = async () => {

        //             IS_PROD && await bitrixAPI.getResize(true)
        //             const current = scrollRef.current
        //             if (current) {
        //                 current.scrollIntoView({ behavior: 'smooth' });
        //             }
        //         }
        //         asyncFunction()
        //     }

        //     const timer = setTimeout(() => {

        //         const current = scrollRef.current
        //         if (current) {
        //             current.scrollIntoView({ behavior: 'smooth' });

        //         }

        //     }, 400);

        //     return () => clearTimeout(timer);

        // }

    }, []);



    return (
        <div
            ref={scrollRef}
            // className={isActive ? 'newgradient__containerApril' : 'monohrom__containerApril'}>
            className={'monohrom__containerApril'}>

            <div className='content__wrapper'>

                <div className="newchildren__wrapper"

                >
                    {/* {props.children} */}
                    <Logo />
                </div>
                {isActive && <p className='loader__title'>Загрузка  . . .</p>}
            </div>

        </div>
    )
}
export default Gradient