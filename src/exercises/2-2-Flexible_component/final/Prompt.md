```jsx
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
```
