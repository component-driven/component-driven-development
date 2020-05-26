In this exercise we’ll try to make a dialog component to ask for some information from the user.

## 1.1 Creating a Prompt component

Your project manager comes to your desk and says that they want to greet each app user by their name. To do that, you need to implement a dialog that asks the user their name.

### The result

The result should look like this:

```jsx noeditor
import Prompt from './final/Prompt';
const [name, setName] = React.useState('');
const [isOpen, setIsOpen] = React.useState(false);
<div
  style={{
    border: '1px solid #e8e8e8',
    borderRadius: 3,
    padding: 16
  }}
>
  {isOpen && (
    <Prompt
      title="The universe asks"
      message="What’s your name, yo?"
      defaultValue="Incognito"
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
</div>;
```

### The task

1. Build a dialog like `window.prompt` that asks the user their name. It should display a title, a text input with a label, and a submit button. On submit of the form, the dialog closes, and the entered name is displayed on the screen.

![Prompt screenshot](assets/window-prompt.png)

Don’t bother much with styling and layout now, add only the necessary styles — this isn’t the goal of today’s workshop. Focus on the architecture and the API. If you do add styles, feel free to use any way of adding styles to React components: styled-components are already available in the project but inline styles are fine too.

Consider starting with prop types to think about what kind of an API would be ideal for this component.

We’ve created some files and bootstrap code for you to make you focus on what’s important:

- `src/exercises/2-1-Conventional_implementation/Prompt.js`: a base for your component;
- `src/exercises/2-1-Conventional_implementation/Prompt.md`: code to run the component in Styleguidist.

Edit these files as you like: you’ll see the results immediately here, in Styleguidist — [scroll down a bit](/#/Conventional%20implementation?id=prompt) to see it. Feel free to ask help, or check the solution below, if you’re stuck.

**Tip:** You can use React Hooks in Styleguidist Markdown files:

```jsx static
const [name, setName] = React.useState('Batman');
<>
  <p>Name: {name}</p>
  <button onClick={() => setName('Not Batman')}>
    I’m not Batman
  </button>
</>;
```

Read more in [Styleguidist documentation](https://react-styleguidist.js.org/docs/documenting.html).

## 2.1 Extending the Prompt component

Your project manager wants to test the conversion of different variations of the Prompt component.

### The result

The result should look like this:

```jsx {"file": "final/Prompt.md", "noeditor": true}
```

### The task

<details>
 <summary>Task</summary>

1. Add an option to render a close button (`×`) in the top right corner of the dialog. On click, it should close the dialog without submitting the form.
2. Add an option to show a semi-transparent backdrop that also should close the dialog on click.
3. Add an option to add a “Cancel” button that’s displayed after the submit button. On click, it should close the dialog without submitting the form.

Again, consider starting with prop types to think about what kind of an API would be ideal for these changes.

</details>

<details>
 <summary>Solution</summary>

The `Prompt` component (`src/exercises/2-1-Single_use_case_component/Prompt.js`):

```jsx {"file": "final/Prompt.js", "static": true}
```

The usage (`src/exercises/2-1-Single_use_case_component/Prompt.md`):

```md {"file": "final/Prompt.md", "static": true}
```

</details>
