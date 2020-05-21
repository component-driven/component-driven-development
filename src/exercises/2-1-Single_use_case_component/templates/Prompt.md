```jsx
const [name, setName] = React.useState('');
// WORKSHOP_START
<>
  {/* <Prompt prop1={42} /> */}
  <p>Name: {name || 'Incognito'}</p>
  <button onClick={() => console.log('not implemented')}>
    Ask name
  </button>
</>;
// WORKSHOP_END
// FINAL_START
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
// FINAL_END
```
