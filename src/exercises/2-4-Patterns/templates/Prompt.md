```jsx
// WORKSHOP_START
import { useDialogState } from './Dialog';
const [name, setName] = React.useState('');

<>
  <Prompt />
  <p>Name: {name || 'Incognito'}</p>
  <button onClick={() => alert('not implemented')}>Ask name</button>
</>;
// WORKSHOP_END
// FINAL_START
import { useDialogState } from './final/Dialog';
import Prompt from './final/Prompt';
const [name, setName] = React.useState('');
const dialog = useDialogState();

<>
  <Prompt
    {...dialog}
    title="The universe asks"
    message="What’s your name, yo?"
    defaultValue="Incognito"
    onSubmit={setName}
  />
  <p>Name: {name || 'Incognito'}</p>
  <button onClick={dialog.onOpen}>Ask name</button>
</>;
// FINAL_END
```
