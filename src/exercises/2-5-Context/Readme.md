In this exercise, we’ll TODO

## 5.1 Using React Context to simplify the API

We’ve solved consitency and flexibility issues in the previous exercises but there’s still some boilerplate code we need to write every time we want to show a prompt modal — we need to wire the `useDialogState` Hook and the `Prompt` component:

```jsx static
import { useDialogState } from './Dialog';
import Prompt from './Prompt';

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
```

Remember the `window.prompt` API? All we have to do it to call a single function, and save the result in a variable:

```js static
const name = window.prompt('What’s your name, yo?', 'Incognito');
```

What if we can have a similar API for our `Prompt` component? We can achieve similar simplicity and convenience by using React Context and async/await:

```jsx static
import { useDialog } from './Dialog';

const { prompt } = useDialog();
const [name, setName] = React.useState('');

<>
  <p>Name: {name || 'Incognito'}</p>
  <button
    onClick={async () => {
      const name = await prompt('What’s your name, yo?', 'Incognito');
      setName(name);
    }}
  >
    Ask name
  </button>
</>;
```

TODO

### The result

The result should look like this:

```jsx {"file": "final/Prompt.md", "noeditor": true}
```

### The task

1. Create React Context provider that render active dialogs and has functions to open and close a dialog.
2. Create a React Hook that returns a function that returns function to open and close dialogs, as well as shortcut function that opens a prompt dialog.

<details>
 <summary>Solution</summary>

The `Prompt` component (`src/exercises/2-4-Patterns/Prompt.js`):

```jsx {"file": "final/Prompt.js", "static": true}
```

The usage (`src/exercises/2-4-Patterns/Prompt.md`):

```md {"file": "final/Prompt.md", "static": true}
```

</details>
