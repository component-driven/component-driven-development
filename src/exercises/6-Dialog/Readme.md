In this exercise we’ll try to make a dialog component to ask some information from the user.

## 1.1. TODO

Your project manager comes to your desk and says that they want to greet each app user by their name. To do that you need to implement a dialog that asks the user their name.

### The task

1. Build a dialog like `window.prompt` that asks the user their name. It should display a title, a text input, and a submit button. On submit of the form it the dialog closes, and displays the entered name on the screen.

![Prompt screenshot](assets/prompt.png)

Don’t bother much with styling and layout now — this isn’t the goal of today’s workshop. Focus on the architecture and the API.

<details>
 <summary>Solution</summary>

A component (`src/exercises/6-Dialog/Dialog.js`):

```js {"file": "final/Dialog.js", "static": true}
```

</details>
