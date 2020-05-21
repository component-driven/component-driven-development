In this exercise we’ll make our Prompt component more flexible.

## 2.1 Creating a flexible Propmt component

Your project manager wants to test the conversion of different variations of the Propmt component.

### The result

The result should look like this:

```jsx noeditor
import Prompt from './final/Prompt';
const [name, setName] = React.useState('');
const [isVisible, setIsVisible] = React.useState(false);
<div
  style={{
    border: '1px solid #e8e8e8',
    borderRadius: 3,
    padding: 16
  }}
>
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
</div>;
```

### The task

1. Add an option to render close button (`×`) at the top of the dialog. On click it should close the dialog without submitting the form.
2. Add an option to show a semitransparent backdrop that also should close the dialog on click.
3. Add an option to add a “Cancel” button that’s displayed after the the submit button. On click it should close the dialog without submitting the form.

Again, consider starting with prop types to think what kind of an API would be ideal for these changes.

<details>
 <summary>Solution</summary>

The `Prompt` component (`src/exercises/2-2-Flexible_component/Prompt.js`):

```jsx {"file": "final/Prompt.js", "static": true}
```

The usage (`src/exercises/2-2-Flexible_component/Prompt.md`):

```md {"file": "final/Prompt.md", "static": true}
```

</details>
