
import { createPortal } from 'react-dom'
import { useState, useEffect, useContext, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
export default function Modal({ children, opened, setClose }:any) {

    const [visibleOnLoad, setVisibleOnLoad] = useState(false)
    const size = useWindowSize();

    useEffect(() => {
        if (opened == true) {
            setVisibleOnLoad(true)
        }

    }, [opened])



    if (typeof window !== 'undefined') {
        const modalView = document.getElementById("modal-view")



        useEffect(() => {
            if (opened) {
                document.body.style.overflow = 'hidden';
                document.body.style.maxHeight = '-webkit-fill-available;';
            }
            else {
                document.body.style.overflow = 'visible';
                document.body.style.maxHeight = 'unset';
            }

        }, [opened])



        if (modalView) {
            return createPortal(
                <AnimatePresence>
                    {opened &&
                        <motion.div
                            exit={{ opacity: 0 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className={" z-70 fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40 flex justify-center items-center "}>
                            <motion.div
                                exit={{ opacity: 0, scale: 0.9 }}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className=" overflow-y-hidden max-h-screen overflow-x-hidden hide-scroll pb-0 md:pb-48px "
                            >
                                {children}
                            </motion.div>

                        </motion.div>
                    }
                </AnimatePresence>



                , modalView
            )
        }
        else {
            return null as any
        }

    }
    else {
        return null as any
    }


}

// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: null as any,
        height: null as any,
    });
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            try {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            } catch (error) { }
        }
        // Add event listener
        try {
            window.addEventListener("resize", handleResize);
        } catch (error) { }
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => {
            try {
                window.removeEventListener("resize", handleResize)
            } catch (error) { }
        };
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}