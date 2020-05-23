```jsx
import {
  useDialogState,
  Dialog,
  DialogContent,
  DialogBackdrop,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogCloseButton
} from './final/Dialog';
const [name, setName] = React.useState('');
const [draftName, setDraftName] = React.useState('');
const dialog = useDialogState();
<>
  <Dialog {...dialog}>
    <DialogBackdrop {...dialog} />
    <DialogContent>
      <DialogCloseButton {...dialog} />
      <form
        onSubmit={event => {
          event.preventDefault();
          setName(draftName);
          dialog.onClose();
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
          <button type="button" onClick={dialog.onClose}>
            Cancel
          </button>
          <button type="submit">OK</button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
  <p>Name: {name || 'Incognito'}</p>
  <button onClick={dialog.onOpen}>Ask name</button>
</>;
```
