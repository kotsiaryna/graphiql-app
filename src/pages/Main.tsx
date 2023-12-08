import DocExplorer from '../components/main/DocExplorer';
import InputApi from '../components/main/InputEndpoint';

export function Main() {
  return (
    <div>
      <h2>GraphiQL Page</h2>
      <InputApi />
      <DocExplorer />
    </div>
  );
}
