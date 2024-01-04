import * as React from 'react';
type Props = {
    isWideMode: boolean,
    completedPercents: number
};

export const ProgressBar = (props: Props) => {
    const { completedPercents, isWideMode } = props;

    const completedWidth = (completedPercents * 100) + '%';

    const wideProgressBar = () => {
        const { REACT_APP_EVENT_CONGRATS } = process.env || {};
        return (
            <div className="wide-progress-bar">
                <span className='animated-congrats'>{REACT_APP_EVENT_CONGRATS || ''}</span>
                <span className='wide-completed-view' style={{ width: completedWidth }} />
                <span className='chart'>
                    <span className='chart chart-completed' style={{ width: completedWidth }} />
                </span>
            </div>
        );
    };

    const simpleProgressBar = () => {
        return (
            <div className="simple-progress-bar">
                <span className="completed-view" style={{ width: completedWidth }}></span>
            </div>
        );
    };

    return isWideMode
        ? wideProgressBar()
        : simpleProgressBar()
};