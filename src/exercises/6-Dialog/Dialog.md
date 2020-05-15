```jsx
const [isVisible, setIsVisible] = React.useState(false);
const [name, setName] = React.useState('');
<>
  {isVisible && (
    <Dialog
      message="What’s your name, yo?"
      defaultValue="Incognito"
      onSubmit={value => {
        setName(value);
        setIsVisible(false);
      }}
      onClose={() => {
        setIsVisible(false);
      }}
    />
  )}
  <p>Name: {name || 'Incognito'}</p>
  <button onClick={() => setIsVisible(true)}>Ask name</button>
</>;
```
