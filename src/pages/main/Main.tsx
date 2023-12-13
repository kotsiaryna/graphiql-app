import { DocExplorer } from './components/DocExplorer/DocExplorer';
import { InputApi } from './components/InputEndpoint/InputEndpoint';
import { Editor } from './components/Editor/Editor';
import styles from './Main.module.scss';

export function Main() {
  return (
    <main className={styles.main}>
      <InputApi />
      <DocExplorer />
      <Editor />
    </main>
  );
}
