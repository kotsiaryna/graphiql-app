import { DocExplorer } from './components/DocExplorer/DocExplorer';
import { InputApi } from './components/InputEndpoint/InputEndpoint';
import { Editor } from './components/Editor/Editor';
import styles from './Main.module.scss';
import { ErrorPopUp } from './components/ErrorPopUp/ErrorPopUp';

export function Main() {
  return (
    <main className={styles.main}>
      <ErrorPopUp />
      <InputApi />
      <DocExplorer />
      <Editor />
    </main>
  );
}
