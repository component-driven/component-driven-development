```jsx
// WORKSHOP_START
const [name, setName] = React.useState('');
<>
  {/* <Prompt prop1={42} /> */}
  <p>Name: {name || 'Incognito'}</p>
  <button onClick={() => console.log('not implemented')}>
    Ask name
  </button>
</>;
// WORKSHOP_END
// FINAL_START
import Prompt from './final/Prompt';
const [name, setName] = React.useState('');
const [isOpen, setIsOpen] = React.useState(false);
<>
  {isOpen && (
    <Prompt
      title="The universe asks"
      message="What’s your name, yo?"
      defaultValue="Incognito"
      showClose
      showCancel
      showBackdrop
      onSubmit={value => {
        setName(value);
        setIsOpen(false);
      }}
      onClose={value => {
        setIsOpen(false);
      }}
    />
  )}
  <p>Name: {name || 'Incognito'}</p>
  <button onClick={() => setIsOpen(true)}>Ask name</button>
</>;
// FINAL_END
```
