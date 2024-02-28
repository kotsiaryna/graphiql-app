import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { DocExplorer } from './components/DocExplorer/DocExplorer';
import { InputApi } from './components/InputEndpoint/InputEndpoint';
import { Editor } from './components/Editor/Editor';
import styles from './Main.module.scss';
import { ErrorPopUp } from './components/ErrorPopUp/ErrorPopUp';
import { auth } from '../../firebase';
import { Path } from '../../router/types';

export function Main() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) navigate(Path.Welcome);
  }, [user, loading, navigate]);
  return (
    <main className={styles.main}>
      <InputApi />
      <DocExplorer />
      <Editor />
      <ErrorPopUp />
    </main>
  );
}
