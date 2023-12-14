import { Link } from 'react-router-dom';
import { authorsData, linkToCourse } from '../../data/data';
import { AuthorData } from '../../types/types';
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
          <Link key={author.githubName} to={author.githubUrl} target="_blank">
            {author.githubName}
          </Link>
        ))}
      </div>
    </div>
  );
}
