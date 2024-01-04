import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Path } from '../../router/types';
import { authorsData } from '../../data/data';
import { AuthorData } from '../../types/types';
import styles from './Welcome.module.scss';
import { LangContext } from '../../context/langContext';
import { l10n } from '../../data/localization';

export function Welcome() {
  const { lang } = useContext(LangContext);
  return (
    <div className={styles.welcomePage}>
      <div className={styles.welcomePage_links}>
        <Link to={Path.SignIn}>{l10n[lang].signIn}</Link>
        <Link to={Path.SignUp}>{l10n[lang].signUp}</Link>
        <Link to={Path.Main}>{l10n[lang].main}</Link>
      </div>

      <div className={styles.welcomePage_content}>
        <div>
          <h3>{l10n[lang].greeting}</h3>
          {l10n[lang].about}
        </div>

        <ul className={styles.welcomePage_list}>
          <h3>{l10n[lang].team}</h3>
          {authorsData.map((author: AuthorData) => (
            <li key={author.githubName} className={styles.welcomePage_listItem}>
              {author.name[lang]}
              <div>
                GitHub:
                <Link to={author.githubUrl} target="_blank">
                  {author.githubName}
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <div>{l10n[lang].completed}</div>

        <div>
          <h3>RSSchool</h3>
          {l10n[lang].rs}
        </div>

        <div>
          <h3>{l10n[lang].ft}</h3>
          {l10n[lang].task}
        </div>
      </div>
    </div>
  );
}
