In this exercise we’ll try to make a dialog component to ask some information from the user.

## 1.1 Creating a single use case Propmt component

Your project manager comes to your desk and says that they want to greet each app user by their name. To do that you need to implement a dialog that asks the user their name.

### The task

1. Build a dialog like `window.prompt` that asks the user their name. It should display a title, a text input, and a submit button. On submit of the form it the dialog closes, and displays the entered name on the screen.

![Prompt screenshot](assets/window-prompt.png)

Don’t bother much with styling and layout now — this isn’t the goal of today’s workshop. Focus on the architecture and the API.

Consider starting with prop types to think what kind of an API would be ideal for this component.

We’ve create some files and bootstrap code for you to make you focus on what’s important:

- `src/exercises/6-Single_use_case_component/Prompt.js`: a base for your component;
- `src/exercises/6-Single_use_case_component/Prompt.md`: code to run the component in Styleguidist.

Edit these files as you like: you’ll see the results immediately here, in Styleguidist — scroll down a bit to see it. Feel free to ask help, or check the solution below, if you’re stuck.

<details>
 <summary>Solution</summary>

The `Prompt` component (`src/exercises/2-1-Single_use_case_component/Prompt.js`):

```jsx {"file": "final/Prompt.js", "static": true}
```

</details>
