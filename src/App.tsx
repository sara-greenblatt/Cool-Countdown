import './index.scss';
import { MainContainer } from './Components';
import { IntlProvider } from 'react-intl';
import { intlConfig } from './Translation';

function App() {
  const locale: string = intlConfig.getLocale();

  return (
    <IntlProvider
      locale={locale}
      messages={intlConfig.messages[locale]}
    >
      <MainContainer />
    </IntlProvider>
  );
}

export default App;
