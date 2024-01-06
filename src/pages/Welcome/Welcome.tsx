import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Path } from '../../router/types';
import { authorsData } from '../../data/data';
import { AuthorData } from '../../types/types';
import ghIcon from '../../assets/images/gh.png';
import styles from './Welcome.module.scss';
import { LangContext } from '../../context/langContext';
import { l10n } from '../../data/localization';
import { auth } from '../../firebase';
import { SkeletonList } from '../../components/SkeletonList/SkeletonList';

export function Welcome() {
  const { lang } = useContext(LangContext);
  const [user, loading] = useAuthState(auth);
  const [isUserLoaded, setIsUserLoaded] = useState(false);

  useEffect(() => {
    if (!loading) {
      setIsUserLoaded(true);
    }
  }, [loading]);
  return (
    <div className={styles.welcomePage}>
      <div className={styles.links}>
        {isUserLoaded ? (
          <>
            {!user && <Link to={Path.SignIn}>{l10n[lang].signIn}</Link>}
            {!user && <Link to={Path.SignUp}>{l10n[lang].signUp}</Link>}
            {user && <Link to={Path.Main}>{l10n[lang].main}</Link>}
          </>
        ) : (
          <SkeletonList variant="text" count={2} width={45} height={25} />
        )}
      </div>
      <div className={styles.content}>
        <div>
          <h3 className={styles.heading}>{l10n[lang].greeting}</h3>
          {l10n[lang].about}
        </div>

        <ul className={styles.list}>
          <h3 className={styles.heading}>{l10n[lang].team}</h3>
          {authorsData.map((author: AuthorData) => (
            <li key={author.githubName} className={styles.listItem}>
              {`${author.name[lang]}: `}
              <img className={styles.gh_icon} src={ghIcon} alt="" />
              <Link to={author.githubUrl} target="_blank">
                {author.githubName}
              </Link>
            </li>
          ))}
        </ul>

        <div>{l10n[lang].completed}</div>

        <div>
          <h3 className={styles.heading}>RSSchool</h3>
          {l10n[lang].rs}
        </div>

        <div>
          <h3 className={styles.heading}>{l10n[lang].ft}</h3>
          {l10n[lang].task}
        </div>
      </div>
    </div>
  );
}
