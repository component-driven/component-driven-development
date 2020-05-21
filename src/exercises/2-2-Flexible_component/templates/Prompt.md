```jsx
const [name, setName] = React.useState('');
const [isVisible, setIsVisible] = React.useState(false);
<>
  {isVisible && (
// WORKSHOP_START
    <Prompt
      title="The univers asks"
      message="What’s your name, yo?"
      defaultValue="Incognito"
      onSubmit={value => {
        setName(value);
        setIsVisible(false);
      }}
    />
// WORKSHOP_END
// FINAL_START
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
// FINAL_END
  )}
  <p>Name: {name || 'Incognito'}</p>
  <button onClick={() => setIsVisible(true)}>Ask name</button>
</>;
```
