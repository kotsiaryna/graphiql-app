import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import styles from './Layout.module.scss';
import { ErrorBoundary } from '../../pages/ErrorBoundary/ErrorBoundary';

export function Layout() {
  return (
    <ErrorBoundary>
      <div className={styles.content}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
