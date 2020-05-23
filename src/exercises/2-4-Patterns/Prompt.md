```jsx
import { useDialogState } from './Dialog';
const [name, setName] = React.useState('');

<>
  <Prompt />
  <p>Name: {name || 'Incognito'}</p>
  <button onClick={() => alert('not implemented')}>Ask name</button>
</>;
```
