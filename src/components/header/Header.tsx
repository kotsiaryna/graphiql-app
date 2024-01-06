import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';
import { ElevationScroll } from './handler';
import { WelcomeButton } from './components/WelcomeButton';
import { HomeButton } from './components/HomeButton';
import { SignInButton } from './components/SignInButton';
import { SignUpButton } from './components/SignUpButton';
import { TranslateButton } from './components/TranslateButton';
import { SignOutButton } from './components/SignOutButton';
import styles from './Header.module.scss';
import { auth } from '../../firebase';
import { SkeletonList } from '../SkeletonList/SkeletonList';

export function Header() {
  const [user, loading] = useAuthState(auth);
  const [isUserLoaded, setIsUserLoaded] = useState(false);

  useEffect(() => {
    if (!loading) {
      setIsUserLoaded(true);
    }
  }, [loading]);

  return (
    <>
      <CssBaseline />
      <ElevationScroll>
        <AppBar>
          <Toolbar className={styles.header}>
            <Typography
              className={styles.headerLinks}
              variant="h6"
              component="div"
            >
              {isUserLoaded ? (
                <>
                  <WelcomeButton />
                  <HomeButton />
                  {!user && <SignInButton />}
                  {!user && <SignUpButton />}
                  {user && <SignOutButton />}
                  <TranslateButton />
                </>
              ) : (
                <SkeletonList
                  variant="circular"
                  count={4}
                  width={22}
                  height={22}
                />
              )}
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
