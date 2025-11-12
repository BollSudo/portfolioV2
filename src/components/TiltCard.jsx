import React, {useRef} from 'react'
import Tilt from "./Tilt.jsx";

const TiltCard = () => {
    const cardRef = useRef(null);
    const isFlipped = useRef(false);

    const handleClick = () => {
        if (cardRef.current) {
            isFlipped.current = !isFlipped.current;
            cardRef.current.style.transform = isFlipped.current
                ? "rotateY(180deg)"
                : "rotateY(0deg)";
        }
    };

    return (
        <Tilt
            options={{ max: 25, speed: 800, glare: true, "max-glare": 0.5 }}
            className="card-tilt w-[500px] h-[320px] relative bg-primary"
        >
            <div ref={cardRef} onClick={handleClick} className="card-flip w-full h-full">
                <div className="card-flip-front">
                    Carte de visite
                </div>
                <div className="card-flip-back">
                    Signé Julien RENAUD
                </div>
            </div>
        </Tilt>
    );

}
export default TiltCard
