```jsx
// WORKSHOP_START
// import { DialogProvider, useDialog } from './DialogProvider';

function PromptExample() {
  const [name, setName] = React.useState('');

  return (
    <>
      <p>Name: {name || 'Incognito'}</p>
      <button onClick={() => alert('not implemented')}>
        Ask name
      </button>
    </>
  );
}

<PromptExample />
// WORKSHOP_END
// FINAL_START
import { DialogProvider, useDialog } from './DialogProvider';

function PromptExample() {
  const [name, setName] = React.useState('');
  const { prompt } = useDialog();

  return (
    <>
      <p>Name: {name || 'Incognito'}</p>
      <button
        onClick={async () => {
          const name = await prompt({
            title: 'The universe asks',
            message: 'What’s your name, yo?',
            defaultValue: 'Incognito'
          });
          setName(name);
        }}
      >
        Ask name
      </button>
    </>
  );
}

<DialogProvider>
  <PromptExample />
</DialogProvider>;
// FINAL_END
```
