import * as React from 'react';
import { ProgressBar } from '../index';
import { CountdownDetails } from './CountdownDetails';

type Props = {
    isWideMode: boolean
};

export const CountdownContainer = (props: Props) => {
    const { isWideMode } = props;
    const {
        REACT_APP_EVENT_DATE = null, REACT_APP_STARTING_DATE = null,
        REACT_APP_EVENT_SOURCE = '', REACT_APP_EVENT_TARGET = ''
    } = process.env;

    const getRemainingTime = (): number => {
        const eventDate = +new Date(REACT_APP_EVENT_DATE as string);
        const currentDate = +new Date();
        return Math.abs((eventDate - currentDate) || 0);
    };

    const getTotalTime = () => {
        const eventDate = +new Date(REACT_APP_EVENT_DATE as string);
        const startingDate = +new Date(REACT_APP_STARTING_DATE as string);
        return Math.abs(eventDate - startingDate);
    }

    const calcCompletionInPercents = (): number => {
        return 1 - ((getRemainingTime() / getTotalTime()) || 0);
    };

    const completionTxt = `${(calcCompletionInPercents() * 100).toFixed(0)}%`;

    React.useEffect(() => {
        window.document.title = completionTxt + " Completed";
    }, [completionTxt]);

    return (
        <>
            <div className="countdown-note">
                <img
                    src={require("../../Assets/Icons/file_transfer.jpg")}
                    alt="collapse"
                    className='countdown-note-icon'
                />
                <span className='countdown-note-text'>
                    {completionTxt + " הושלמו"}
                </span>
            </div>
            <div className="countdown-container">
                <div className="transform-details">
                    <span className="transform-txt">מעביר מ- </span>
                    <span className="transform-val">{REACT_APP_EVENT_SOURCE}</span>
                    <span className="transform-txt"> אל </span>
                    <span className="transform-val">{REACT_APP_EVENT_TARGET}</span>
                </div>
                <div className='completion-text-box'>
                    <span className='completion-text'>
                        {completionTxt + " הושלמו"}
                    </span>
                    <span className='dummy-icons'>
                        <span className='stop'>&#124; &#124;</span>
                        <span className='close'>&#10006;</span>
                    </span>
                </div>
                <ProgressBar completedPercents={calcCompletionInPercents()} isWideMode={isWideMode} />
                {isWideMode
                    && (
                        <CountdownDetails remainingTime={getRemainingTime()} />
                    )
                }
            </div>
        </>
    );
};