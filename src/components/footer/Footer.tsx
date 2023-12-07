import { Link } from 'react-router-dom';
import { authorsData, linkToCourse } from './data';
import { AuthorData } from './types';
import rssLogo from '../../assets/images/logo-rss.png';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <div className={styles.footer}>
      <span>© 2023 GraphiQL</span>

      <Link to={linkToCourse}>
        <img src={rssLogo} alt="rss-logo" />
      </Link>

      <div className={styles.footer_linksWrapper}>
        {authorsData.map((author: AuthorData) => (
          <Link key={author.name} to={author.githubUrl}>
            {author.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
