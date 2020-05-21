In this exercise we’ll make our Prompt component more flexible.

## 2.1 Creating a flexible Propmt component

Your project manager wants to test the conversion of different variations of the Propmt component.

### The result

The result should look like this:

```jsx {"file": "final/Prompt.md", "noeditor": true}
```

### The task

1. Add an option to render close button (`×`) in the top rigth corner of the dialog. On click it should close the dialog without submitting the form.
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
