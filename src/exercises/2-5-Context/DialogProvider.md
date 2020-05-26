```jsx
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

<PromptExample />;
```
