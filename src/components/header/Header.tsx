import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { ElevationScroll } from './handler';

import { WelcomeButton } from './components/WelcomeButton';
import { HomeButton } from './components/HomeButton';
import { SingnInButton } from './components/SignInButton';
import { SingnUpButton } from './components/SignUpButton';
import { TranslateButton } from './components/TranslateButton';
import { SignOutButton } from './components/SignOutButton';
import styles from './Header.module.scss';

export function Header() {
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
              <WelcomeButton />
              <HomeButton />
              <SingnInButton />
              <SingnUpButton />
              <SignOutButton />
              <TranslateButton />
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
