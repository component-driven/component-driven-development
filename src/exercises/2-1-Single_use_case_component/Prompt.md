```jsx
const [name, setName] = React.useState('');
<>
  {/* <Prompt prop1={42} /> */}
  <p>Name: {name || 'Incognito'}</p>
  <button onClick={() => console.log('not implemented')}>
    Ask name
  </button>
</>;
```
