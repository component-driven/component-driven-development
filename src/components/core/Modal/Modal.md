```jsx
import Button from '../Button';
<>
  <Button onClick={() => setState({ isOpen: true })}>
    Open modal
  </Button>
  <Modal
    title="Our awesome modal"
    isOpen={state.isOpen}
    onRequestClose={() => setState({ isOpen: false })}
  >
    Content
  </Modal>
</>;
```
