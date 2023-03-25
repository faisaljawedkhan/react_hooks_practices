import { useEffect, useState } from "react"

const useScreen = () => {
    const [screenSize, setScreenSize] = useState();
    useEffect (() => {
        showScreenSize();
        window.addEventListener("resize", showScreenSize);
        // return () => {
        //     window.removeEventListener("resize");
        // };
    }, [])
    
    const showScreenSize = () => {
        if (window.innerWidth > 992) {
            return setScreenSize("Large");
        } else if (window.innerWidth > 600 && window.innerWidth < 992) {
            return setScreenSize("Medium");
        } else if (window.innerWidth < 600) {
            return setScreenSize("Small");
        }
    }
    return screenSize;
}

export default useScreen;