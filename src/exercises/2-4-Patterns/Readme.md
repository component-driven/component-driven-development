In this exercise, we’ll create a new version of the Prompt component from the first exercise using our primitives.

## 4.1 Creating components for common patterns

With our primitive components and Hooks we can create all kinds of different dialogs, but once your app matures, you start noticing that you’re reimplementing the same things again and again. These are patterns, like the Prompt pattern from the very first exercise.

Once we’ve identified a pattern in our app, we can agree on how exactly it should look and behave, and create a component that will make sure this pattern always looks and behaves the same way. Primitives give us the flexibility to experiment and explore, and patterns give us rigid but easy to use tools to quickly solve particular tasks, and be sure they are consistent across the project.

### The result

The result should look like this:

```jsx {"file": "final/Prompt.md", "noeditor": true}
```

### The task

1. Create a Prompt component, similar to the one in the very first exercise: it should have a title, a text input with a label, submit, cancel and close buttons, and a backdrop. Only title, text input label, and text input default value should be configurable.

<details>
 <summary>Solution</summary>

The `Prompt` component (`src/exercises/2-4-Patterns/Prompt.js`):

```jsx {"file": "final/Prompt.js", "static": true}
```

The usage (`src/exercises/2-4-Patterns/Prompt.md`):

```md {"file": "final/Prompt.md", "static": true}
```

</details>
