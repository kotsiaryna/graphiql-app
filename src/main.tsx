import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { App } from './App';
import { ErrorBoundary } from './pages/ErrorBoundary/ErrorBoundary';
import './index.scss';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  );
}
