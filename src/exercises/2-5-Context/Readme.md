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

What if we can have a similar API for our `Prompt` component? We can achieve similar simplicity and convenience by using React Context and async/await.

The most tricky part here is the provider. For simplicity, we’ll only allow one dialog at a time. So every time a new dialog is about to show, will close currently open dialog:

```jsx static
export const DialogContext = React.createContext({});

function DialogProvider({ chidlren }) {
  const [dialog, setDialog] = React.useState(null);

  function openDialog(dialog) {
    setDialog(dialog);
  }

  function closeDialog() {
    setDialog(null);
  }

  return (
    <DialogContext.Provider
      value={{
        openDialog,
        closeDialog
      }}
    >
      {children}
      {dialog}
    </DialogContext.Provider>
  );
}
```

We need to wrap our app into this provider to have access to this context in our components. We could use the context directly to show modals:

```jsx static
import { DialogContext } from './Dialog';
import Prompt from './Prompt';

const [name, setName] = React.useState('');
const { openDialog, closeDialog } = React.useContext(DialogContext);

<>
  <p>Name: {name || 'Incognito'}</p>
  <button
    onClick={() => {
      openDialog(
        <Prompt
          isOpen
          title="The universe asks"
          message="What’s your name, yo?"
          defaultValue="Incognito"
          onClose={closeDialog}
          onSubmit={setName}
        />
      );
    }}
  >
    Ask name
  </button>
</>;
```

But we can go two steps further and simplify it even more:

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

### The result

The result should look like this:

```jsx {"file": "final/Prompt.md", "noeditor": true}
```

### The task

1. Extend the `DialogProvider` component with a new method that open a `Prompt` dialog with given parameters.
2. Create a React Hook that uses the `DialogContext` and returns all functions from the context: functions to open and close dialog, and a function to open a prompt dialog.

<details>
 <summary>Solution</summary>

The `Prompt` component (`src/exercises/2-4-Patterns/Prompt.js`):

```jsx {"file": "final/Prompt.js", "static": true}
```

The usage (`src/exercises/2-4-Patterns/Prompt.md`):

```md {"file": "final/Prompt.md", "static": true}
```

</details>
