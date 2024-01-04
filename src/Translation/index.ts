import en from './JSON/en.json';
import he from './JSON/he.json';

const locales: string[] = ['en', 'he'];
const DEFAULT_LANG: string = 'he';

type IntlMessage = {
    [key: string]: string
};

const messages: { [key: string]: IntlMessage } = {
    en,
    he
};

const getLocale = (): string => {
    const { REACT_APP_LOCALE = DEFAULT_LANG } = process.env || {};
    if (intlConfig.locales.includes(REACT_APP_LOCALE))
        return REACT_APP_LOCALE;
    console.warn(`${REACT_APP_LOCALE} is not supported as locale language. Falling back to ${DEFAULT_LANG}\n Use one of the following supported locales: ${locales.join(', ')}`);
    return DEFAULT_LANG;
};

const isRTL = (): boolean => (
    ['he'].includes(getLocale())
);

export const intlConfig = {
    messages,
    getLocale,
    locales,
    isRTL
};
