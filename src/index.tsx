import ReactDOM from 'react-dom/client';

import { Suspense } from 'react';
import { PartialTheme, ThemeProvider } from '@fluentui/react';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { theme } from './theme';

import './plugins';
import App from './App';
import Loading from './screens/Loading';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
const customTheme : PartialTheme = {
    palette: theme,
};

initializeIcons(undefined, { disableWarnings: true });
root.render(
    <Suspense fallback={<Loading />}>
        <ThemeProvider theme={customTheme}>
            <App />
        </ThemeProvider>
    </Suspense>,
);
