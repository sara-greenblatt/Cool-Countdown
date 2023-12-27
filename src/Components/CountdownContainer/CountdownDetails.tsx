import * as React from 'react';
type Props = {
    remainingTime: number
};

export const CountdownDetails = (props: Props) => {
    const { remainingTime } = props;
    const { REACT_APP_BRAND_NAME } = process.env || {};

    const getRemainingDays = (): number => {
        return Math.ceil(remainingTime / (1000 * 60 * 60 * 24));
    };

    return (
        <div className='transform-details'>
            <div className='event-details'>
                <span>שם: </span>
                <span>{REACT_APP_BRAND_NAME || ''}</span>
            </div>
            <div className='event-details'>
                <span>זמן שנותר: </span>
                <span>{`${getRemainingDays()} ימים`}</span>
            </div>
            <div>
                <span>פריטים שנותרו: </span>
                <span>1 (1 בתים)</span>
            </div>
        </div>
    );
};