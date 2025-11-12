import { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

export default function Tilt({ options, children, className }) {
    const tiltRef = useRef(null);

    useEffect(() => {
        const node = tiltRef.current;
        if (!node) return;
        VanillaTilt.init(tiltRef.current, options);
        return () => {
            if (node.vanillaTilt) node.vanillaTilt.destroy();
        };
    }, [options]);

    return (
        <div ref={tiltRef} className={className}>
            {children}
        </div>
    );
}
