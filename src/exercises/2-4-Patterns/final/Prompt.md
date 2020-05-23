```jsx
import { useDialogState } from './final/Dialog';
import Prompt from './final/Prompt';
const [name, setName] = React.useState('');
const dialog = useDialogState();

<>
  <Prompt
    {...dialog}
    title="The univers asks"
    message="What’s your name, yo?"
    defaultValue="Incognito"
    onSubmit={setName}
  />
  <p>Name: {name || 'Incognito'}</p>
  <button onClick={dialog.onOpen}>Ask name</button>
</>;
```
