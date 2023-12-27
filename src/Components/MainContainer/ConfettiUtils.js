import { confetti } from "https://cdn.jsdelivr.net/npm/tsparticles-confetti/+esm";

export const getConfetti = () => {
    const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["heart"],
        colors: ["#ffffff", "#06b025", "#ffffff", "#06b025"]
    };

    confetti({
        ...defaults,
        particleCount: 50,
        scalar: 2,
    });

    confetti({
        ...defaults,
        particleCount: 25,
        scalar: 3,
    });

    confetti({
        ...defaults,
        particleCount: 10,
        scalar: 4
    });

};
