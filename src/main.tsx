import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.scss';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(<App />);
}
