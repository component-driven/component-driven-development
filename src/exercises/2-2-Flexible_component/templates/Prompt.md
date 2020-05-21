```jsx
// WORKSHOP_START
const [name, setName] = React.useState('');
const [isVisible, setIsVisible] = React.useState(false);
<>
  {isVisible && (
    <Prompt
      title="The univers asks"
      message="What’s your name, yo?"
      defaultValue="Incognito"
      onSubmit={value => {
        setName(value);
        setIsVisible(false);
      }}
    />
  )}
  <p>Name: {name || 'Incognito'}</p>
  <button onClick={() => setIsVisible(true)}>Ask name</button>
</>;
// WORKSHOP_END
// FINAL_START
import Prompt from './final/Prompt';
const [name, setName] = React.useState('');
const [isVisible, setIsVisible] = React.useState(false);
<>
  {isVisible && (
    <Prompt
      title="The univers asks"
      message="What’s your name, yo?"
      defaultValue="Incognito"
      showClose
      showCancel
      showBackdrop
      onSubmit={value => {
        setName(value);
        setIsVisible(false);
      }}
      onClose={value => {
        setIsVisible(false);
      }}
    />
  )}
  <p>Name: {name || 'Incognito'}</p>
  <button onClick={() => setIsVisible(true)}>Ask name</button>
</>;
// FINAL_END
```
