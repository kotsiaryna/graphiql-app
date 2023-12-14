import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';
import { ElevationScroll } from './handler';
import { Path } from '../../router/types';
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
              <Link to={Path.SignIn}>Sign In</Link>
              <Link to={Path.SignUp}>Sign Up</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
