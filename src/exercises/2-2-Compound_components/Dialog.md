```jsx
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
```
