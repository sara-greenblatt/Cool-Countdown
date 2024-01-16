import * as React from 'react';
import { ProgressBar } from '../index';
import { CountdownDetails } from './CountdownDetails';
import { FormattedMessage, IntlShape, injectIntl } from 'react-intl';

type Props = {
    isWideMode: boolean,
    intl: IntlShape
};

const CountdownContainerComponent = (props: Props) => {
    const { isWideMode, intl } = props;
    const {
        REACT_APP_EVENT_DATE = null, REACT_APP_STARTING_DATE = null,
        REACT_APP_EVENT_SOURCE = '', REACT_APP_EVENT_TARGET = ''
    } = process.env;

    const getRemainingTime = (): number => {
        const eventDate = +new Date(REACT_APP_EVENT_DATE as string);
        const currentDate = +new Date();
        const timeLeft = Math.round((eventDate - currentDate) || 0);
        return timeLeft >= 0 ? timeLeft : 0;
    };

    const getTotalTime = () => {
        const eventDate = +new Date(REACT_APP_EVENT_DATE as string);
        const startingDate = +new Date(REACT_APP_STARTING_DATE as string);
        return Math.round(eventDate - startingDate);
    }

    const calcCompletionInPercents = (): number => {
        return 1 - ((getRemainingTime() / getTotalTime()) || 0);
    };

    const completionTxt = `${(calcCompletionInPercents() * 100).toFixed(0)}%`;

    React.useEffect(() => {
        window.document.title = completionTxt + " complete";
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
                    {intl.formatMessage({ id: "completedTxt" }, { percents: completionTxt })}
                </span>
            </div>
            <div className="countdown-container">
                <div className="transform-details">
                    <span className="transform-txt"><FormattedMessage id="transferFrom" /></span>
                    <span className="transform-val">{REACT_APP_EVENT_SOURCE}</span>
                    <span className="transform-txt"><FormattedMessage id="transferTo" /></span>
                    <span className="transform-val">{REACT_APP_EVENT_TARGET}</span>
                </div>
                <div className='completion-text-box'>
                    <span className='completion-text'>
                        {intl.formatMessage({ id: "completedTxt" }, { percents: completionTxt })}
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

export const CountdownContainer = injectIntl(CountdownContainerComponent);