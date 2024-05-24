import { PROF } from '../../../redux/reducers/global/global-reducer'
import './Navigate.scss'
import backImg from '../../../../assets/img/navigate/back.svg'
import { useEffect, useRef, useState } from 'react'
import { ROUTE } from '@/redux/reducers/router/router-reducer'

const Navigate = ({
    scroll,
    router,
    currentComplectsType, back, isDealTable, isSomeUpdating,
    reset, resetUniversal, clearCurrentTemplate, setScroll, setTopDisplayStatus }) => {

    const scrollRef = useRef(null);
    const displayRef = useRef(null);

    const [navigateClass, setNavigateClass] = useState('navigate konstructorBack')
    // const [scroll, setScroll] = useState(false)
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);


    useEffect(() => {
        if (router && router.current) {
            if (router.current.route == ROUTE.DOCUMENT || isSomeUpdating) {
                setNavigateClass('navigate documentBack')
            } else {
                setNavigateClass('navigate konstructorBack')
            }
        }

    }, [router.current, isSomeUpdating])


    useEffect(() => {
        setTopDisplayStatus(true)
        setScroll(true)
    }, [router.current]);

    useEffect(() => {
        const current = scrollRef.current
        if (scroll && current) {
            current.scrollIntoView({ behavior: 'smooth' });
            setScroll(false)

        }

    }, [scroll]);

    const [isMouseOn, setIsMouseOn] = useState(false)
    const [displayIconSize, setDisplayIconSize] = useState('16')
    const [displayIconColor, setDisplayIconColor] = useState('rgb(37, 40, 45)')
    useEffect(() => {
        if (isMouseOn) {
            setDisplayIconSize('19')
            setDisplayIconColor('rgb(40, 104, 212)')

        } else {
            setDisplayIconSize('16')
            setDisplayIconColor('rgb(37, 40, 45)')
        }
    }, [isMouseOn]);



    //Отслеживание видимости комоненты иконки дисплэй
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            // Если хедер не виден, устанавливаем isHeaderVisible в falsec
            setTopDisplayStatus(entries[0].isIntersecting);
        });

        if (displayRef.current) {
            observer.observe(displayRef.current);
        }

        return () => {
            if (displayRef.current) {
                observer.unobserve(displayRef.current);
            }
        };
    }, []);
    return (
        <div ref={scrollRef} className={navigateClass}>

            <div className='navigate__left navigate-back'
                onClick={() => back()}
            >
                <img className='navigate__icon' src={backImg} />
                <p className="navigate__parameter">{'Назад'}</p>
            </div>


            <div className="navigate__parameters">
                <div className="icon-display__werapper"

                >
                    <svg
                        ref={displayRef}
                        onMouseLeave={() => setIsMouseOn(false)}
                        onMouseEnter={() => setIsMouseOn(true)}
                        onClick={() => setScroll(true)}

                        xmlns="http://www.w3.org/2000/svg" width={displayIconSize} height={displayIconSize} fill="currentColor" class="bi bi-aspect-ratio" viewBox="0 0 16 16">
                        <path color={displayIconColor} className="icon-display" d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z" />
                        <path color={displayIconColor} className="icon-display" d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0z" />
                    </svg>


                </div>
                {!isDealTable && <p className="navigate__parameter navigate__parameter--reset"
                    onClick={currentComplectsType.title === PROF
                        ? reset : resetUniversal}
                >{'Сбросить'}</p>}

            </div>
        </div>
    )
}

export default Navigate