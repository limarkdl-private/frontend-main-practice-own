import { createRoot } from 'react-dom/client';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';
import App from './app/App';
import 'app/styles/index.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

// TEMPORARY, JUST A WARNING >
// eslint-disable-next-line max-len
alert('This web application is an independent study project of one of the students and is '
    + 'not affiliated with the official resources uclan.ac.uk or uclancyprus.ac.cy. Please '
    + 'note that all information presented on this resource is fictitious and serves as filler.');

const safeBasename = __BASENAME__ || '';

root.render(
    <StoreProvider>
        <BrowserRouter basename={safeBasename}>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
);
