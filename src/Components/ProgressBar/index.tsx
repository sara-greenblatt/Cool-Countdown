import * as React from 'react';
type Props = {
    isWideMode: boolean,
    completedPercents: number
};

export const ProgressBar = (props: Props) => {
    const { completedPercents, isWideMode } = props;


    const wideProgressBar = () => {
        const { REACT_APP_EVENT_CONGRATS } = process.env || {};
        return (
            <div className="wide-progress-bar">
                <span className='animated-congrats'>{REACT_APP_EVENT_CONGRATS || ''}</span>
                <span className='wide-completed-view' style={{ width: `${completedPercents * 100}%` }} />
                <span className='chart'>
                    <span className='chart chart-completed' style={{ width: `${completedPercents * 100}%` }} />
                </span>
            </div>
        );
    };

    const simpleProgressBar = () => {
        return (
            <div className="simple-progress-bar">
                <span className="completed-view" style={{ width: `${completedPercents * 100}%` }}></span>
            </div>
        );
    };

    return isWideMode
        ? wideProgressBar()
        : simpleProgressBar()

};