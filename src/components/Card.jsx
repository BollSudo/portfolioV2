import React, {useRef} from 'react'

const Card = ({ card, children, index }) => {
    const cardRefs = useRef([]);

    const handleMouseMove = (index) => (e) => {
        const card = cardRefs.current[index];
        if (!card) return;

        // get the mouse poisiton relative to the card
        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        // calc the angle from the center of the card
        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
        angle = (angle + 360) % 360;

        card.style.setProperty('--start', angle + 60);
    }

    return (
        <div ref={(el) => (cardRefs.current[index] = el)} onMouseMove={handleMouseMove(index)} className={`carrier-card card card-border rounded-xl p-10 w-full ${index % 2 === 0 ? "carrier-right-card" : "carrier-left-card"}`}>
            <div className="glow" />
            {children}
        </div>
    )
}
export default Card
