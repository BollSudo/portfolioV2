import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            document.body.style.blur = "100px";
            window.scrollTo({ top: 0 , behavior: 'instant' });
            document.body.style.blur = "0px";
        }
    }, [pathname, hash]);

    return null;
}