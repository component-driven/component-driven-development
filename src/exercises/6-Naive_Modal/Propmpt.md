```jsx
import Button from '../../components/primitives/Button';
const [isVisible, setIsVisible] = React.useState(false);
<>
  {isVisible && (
    <Prompt
      message="How many?"
      defaultValue="0"
      onSubmit={value => {
        setIsVisible(false);
        console.log('submitted', value);
      }}
      onClose={() => {
        setIsVisible(false);
        console.log('closed');
      }}
    />
  )}
  <Button onClick={() => setIsVisible(true)}>Show prompt</Button>
</>;
```
