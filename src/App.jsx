import { BrowserRouter } from 'react-router-dom';

import { AppContextProvider } from './contexts';
import { ScrollToTop } from './ScrollToTop';

import { Router } from './Router';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
       <ScrollToTop />
        <Router />
      </BrowserRouter>
    </AppContextProvider>
  )
};

export { App };
