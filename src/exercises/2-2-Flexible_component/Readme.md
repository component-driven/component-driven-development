In this exercise we’ll make our Prompt component more flexible.

## 2.1 Creating a flexible Propmt component

Your project manager wants to test the conversion of different variations of the Propmt component.

### The task

1. Add an option to render close button (`×`) at the top of the dialog. On click it should close the dialog without submitting the form.
2. Add an option to show a semitransparent backdrop that also should close the dialog on click.
3. Add an option to add a “Cancel” button that’s displayed after the the submit button. On click it should close the dialog without submitting the form.

Again, consider starting with prop types to think what kind of an API would be ideal for these changes, and don’t bother with styles and layout.

<details>
 <summary>Solution</summary>

The `Prompt` component (`src/exercises/2-2-Flexible_component/Prompt.js`):

```jsx {"file": "final/Prompt.js", "static": true}
```

</details>
