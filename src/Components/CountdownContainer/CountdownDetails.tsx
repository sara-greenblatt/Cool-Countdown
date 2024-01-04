import * as React from 'react';
import { FormattedMessage } from 'react-intl';

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
                <span><FormattedMessage id="name" /></span>
                <span>{REACT_APP_BRAND_NAME || ''}</span>
            </div>
            <div className='event-details'>
                <span><FormattedMessage id="remainingTime" /></span>
                <span>
                    <FormattedMessage
                        id="remainingTimeVal"
                        values={{ days: getRemainingDays() }}
                    />
                </span>
            </div>
            <div>
                <span><FormattedMessage id="itemsLeft" /> </span>
                <span><FormattedMessage id="itemsLeftDefaultVal" /></span>
            </div>
        </div>
    );
};