import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Path } from '../../router/types';
import { authorsData } from '../../data/data';
import { AuthorData } from '../../types/types';
import styles from './Welcome.module.scss';
import { LangContext } from '../../context/langContext';
import { i18n } from '../../data/localization';

export function Welcome() {
  const { lang } = useContext(LangContext);
  return (
    <div className={styles.welcomePage}>
      <div className={styles.welcomePage_links}>
        <Link to={Path.SignIn}>{i18n[lang].signIn}</Link>
        <Link to={Path.SignUp}>{i18n[lang].signUp}</Link>
        <Link to={Path.Main}>{i18n[lang].main}</Link>
      </div>

      <div className={styles.welcomePage_content}>
        <div>
          <h3>{i18n[lang].greeting}</h3>
          {i18n[lang].about}
        </div>

        <ul className={styles.welcomePage_list}>
          <h3>{i18n[lang].team}</h3>
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

        <div>{i18n[lang].completed}</div>

        <div>
          <h3>RSSchool</h3>
          {i18n[lang].rs}
        </div>

        <div>
          <h3>{i18n[lang].ft}</h3>
          {i18n[lang].task}
        </div>
      </div>
    </div>
  );
}
