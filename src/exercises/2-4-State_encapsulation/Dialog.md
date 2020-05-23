```jsx
import {
  Dialog,
  DialogContent,
  DialogBackdrop,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogCloseButton
} from './Dialog';
const [name, setName] = React.useState('');
const [draftName, setDraftName] = React.useState('');
const [isOpen, setIsOpen] = React.useState(false);
const onClose = () => setIsOpen(false);
<>
  {isOpen && (
    <Dialog>
      <DialogBackdrop onClose={onClose} />
      <DialogContent>
        <DialogCloseButton onClose={onClose} />
        <form
          onSubmit={event => {
            event.preventDefault();
            setName(draftName);
            onClose();
          }}
        >
          <DialogHeader>The universe asks</DialogHeader>
          <DialogBody>
            <label>
              What’s your name, yo?
              <br />
              <input
                type="text"
                value={draftName}
                onChange={event => setDraftName(event.target.value)}
              />
            </label>
          </DialogBody>
          <DialogFooter>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">OK</button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )}
  <p>Name: {name || 'Incognito'}</p>
  <button onClick={() => setIsOpen(true)}>Ask name</button>
</>;
```
