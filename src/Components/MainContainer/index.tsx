import React, { useState, useEffect } from 'react'
import { CountdownContainer } from '../index';
import { getConfetti } from './ConfettiUtils';
import { confetti } from 'tsparticles-confetti';

export default function MainContainer() {
    const [isWideMode, setWideMode] = useState(true);

    useEffect(() => {
        getConfetti(confetti);
        const confettiInterval = setInterval(() => {
            getConfetti(confetti);
        }, 5000);
        return () => clearInterval(confettiInterval);
    }, []);

    const toggleWideMode = () => {
        setWideMode(!isWideMode);
    };

    const closeScreen = () => {
        window.open("about:blank", "_self");
        window.close();
    };

    return (
        <div className='main-container'>
            <div className='screen-icons'>
                <button>&#8211;</button>
                <button className='maximize'>&#128470;</button>
                <button className='close' onClick={closeScreen}>&#10005;</button>
            </div>
            <CountdownContainer isWideMode={isWideMode} />
            <div className='footer'>
                <div className='details-switcher' onClick={toggleWideMode}>
                    {isWideMode
                        ? <>
                            <img
                                src={require("../../Assets/Icons/collapse_expand.jpg")}
                                alt="collapse"
                                onClick={toggleWideMode}
                                className='toggle expand'
                            />
                            <span className='toggle-text'>פחות פרטים</span>
                        </>
                        : <>
                            <img
                                src={require("../../Assets/Icons/collapse_expand.jpg")}
                                alt="expand"
                                className='toggle'
                            />
                            <span className='toggle-text'>פרטים נוספים</span>
                        </>
                    }
                </div>
            </div>
        </div>
    )
};
