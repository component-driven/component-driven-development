```jsx
import Prompt from './final/Prompt';
const [name, setName] = React.useState('');
const [isOpen, setIsOpen] = React.useState(false);
<>
  {isOpen && (
    <Prompt
      title="The univers asks"
      message="What’s your name, yo?"
      defaultValue="Incognito"
      onSubmit={value => {
        setName(value);
        setIsOpen(false);
      }}
    />
  )}
  <p>Name: {name || 'Incognito'}</p>
  <button onClick={() => setIsOpen(true)}>Ask name</button>
</>;
```
