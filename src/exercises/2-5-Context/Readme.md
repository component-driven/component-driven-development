In this exercise, we’ll simplify the API even further.

## 5.1 Using React Context to simplify the API

We’ve solved consistency and flexibility issues in the previous exercises. However, there’s still some boilerplate code we need to write every time we want to show a prompt dialog — we need to wire the `useDialogState` Hook and the `Prompt` component:

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

Remember the `window.prompt` API? All we have to do is to call a single function, and save the result in a variable:

```js static
const name = window.prompt('What’s your name, yo?', 'Incognito');
```

What if we can have a similar API for our `Prompt` component? We can achieve comparable simplicity and convenience by using React Context and async/await.

The most tricky part here is the provider:

```jsx static
export const DialogContext = React.createContext({});

export function DialogProvider({ children }) {
  const [dialogs, setDialog] = React.useState([]);

  function openDialog(dialog) {
    setDialog(dialogs => [...dialogs, dialog]);
  }

  function closeDialog() {
    setDialog(dialogs => dialogs.slice(0, -1));
  }

  return (
    <DialogContext.Provider
      value={{
        openDialog,
        closeDialog
      }}
    >
      {children}
      {dialogs.map((dialog, index) =>
        React.cloneElement(dialog, { key: index })
      )}
    </DialogContext.Provider>
  );
}
```

We need to wrap our app into this provider to have access to this context in our components. We could use the context directly to show dialogs:

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

First, we need to add a new method, `prompt` to our context, that will open a Prompt dialog:

```jsx static
export const DialogContext = React.createContext({});

export function DialogProvider({ children }) {
  const [dialogs, setDialog] = React.useState([]);

  function openDialog(dialog) {
    setDialog(dialogs => [...dialogs, dialog]);
  }

  function closeDialog() {
    setDialog(dialogs => dialogs.slice(0, -1));
  }

  function prompt({ title, message, defaultValue }) {
    return new Promise(resolve => {
      openDialog(
        <Prompt
          isOpen
          title={title}
          message={message}
          defaultValue={defaultValue}
          onClose={closeDialog}
          onSubmit={resolve}
        />
      );
    });
  }

  return (
    <DialogContext.Provider
      value={{
        openDialog,
        closeDialog,
        prompt
      }}
    >
      {children}
      {dialogs.map((dialog, index) =>
        React.cloneElement(dialog, { key: index })
      )}
    </DialogContext.Provider>
  );
}
```

Then create a new React Hook, `useDialog` as a shortcut to `React.useContext(DialogContext)`:

```jsx static
export function useDialog() {
  return React.useContext(DialogContext);
}
```

### The result

The result should look like this:

```jsx {"file": "final/Prompt.md", "noeditor": true}
```

### The task

1. Create a new provider component that has renders all open dialogs, has functions to open and close dialogs, and a function to open a Prompt dialog.
2. Create a React Hook that uses the `DialogContext` and returns all context values.

**Hint:** To use a provider in a Styleguidist example, move it to its own component:

```jsx static
import { DialogProvider, useDialog } from './DialogProvider';

function PromptExample() {
  const { openDialog } = useDialog();
  return <></>;
}

<DialogProvider>
  <PromptExample />
</DialogProvider>;
```

<details>
 <summary>Solution</summary>

The `Prompt` component (`src/exercises/2-4-Patterns/Prompt.js`):

```jsx {"file": "final/Prompt.js", "static": true}
```

The usage (`src/exercises/2-4-Patterns/Prompt.md`):

```md {"file": "final/Prompt.md", "static": true}
```

</details>
