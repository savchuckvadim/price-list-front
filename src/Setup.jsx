// import Preloader from "@/components/Common/Preloader/Preloader";
// import {  useEffect } from "react";





// export const Setup = ({ router, preloader, initialized }) => {

//     let component = <Preloader currentRoute={router.current.route} />

//     //TODO check on prod
//     useEffect(() => {

//         if (router.current && router.current.route && !preloader && initialized) {

           
//             component = <CallingContainer />


//         }
//     }, [router, preloader, initialized])


//     if (!preloader && initialized) {

//         if (router.current && router.current.route) {

          
//              component = <CallingContainer />


//         }
//     }

//     return <>
//         {component}

//     </>
// }