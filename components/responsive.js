// // import { useState, useEffect } from 'react';

// export function useMediaQuery(query) {
// // const [matches, setMatches] = useState(false);

// // useEffect(() => {
// //     const media = window.matchMedia(query);
// //     if (media.matches !== matches) {
// //     setMatches(media.matches);
// //     }
// //     const listener = () => {
// //     setMatches(media.matches);
// //     };
// //     media.addListener(listener);
// //     return () => media.removeListener(listener);
// // }, [matches, query]);

// // return matches;
// // }


// import React from 'react'
// import { useMediaQuery } from 'react-responsive'

// const Responsiv={}
// // export const Example = () => {
// // const isDesktopOrLaptop = useMediaQuery({
// //     query: '(min-width: 1224px)'
// // })
// // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
// // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
// // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
// // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
// // const Responsiv.isDesktopOrLaptop=isDesktopOrLaptop;
// // }
// const isDesktopOrLaptop = useMediaQuery({
//     query: '(min-width: 1224px)'
// })
// const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
// const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
// const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
// const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })


// Responsiv={
//     isDesktopOrLaptop : isDesktopOrLaptop,
//     isBigScreen : isBigScreen,
//     isTabletOrMobile : isTabletOrMobile,
//     isPortrait : isPortrait,
//     isRetina : isRetina
// }