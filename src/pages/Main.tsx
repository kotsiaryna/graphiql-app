import { DocExplorer } from '../components/main/DocExplorer';
import { InputApi } from '../components/main/InputEndpoint';
import { Editor } from '../components/main/editor/Editor';
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
