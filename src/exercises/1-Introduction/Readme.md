In this exercise we’ll learn basics of React Styleguidist.

## 1.1. Exploring React Styleguidist

[React Styleguidist](https://react-styleguidist.js.org/) is a tool we’re using
as a workbench to develop components, and to generate a style guide.

### The task

1. Explore React Styleguidist interface, try to switch to isolated mode (a
   button in the top right corner), try to edit code of the examples in the
   browser.

2. Edit examples in the `Button.md` file, add a new example. See how examples in
   the browser update.

3. Edit a component source in the `Button.js` file. See how all examples update
   every time you save a file.

4. Edit component’s `PropTypes` definition. See how “Props & methods” section
   reacts to the updates.

5. Add a new component and an example Markdown file in the
   `src/exercises/1-Introduction` folder (both, `.js` and `.md`, files should
   have the same name) and see how it’s automatically added to the style guide
   (restart the style guide if the new component doesn’t appear).

<details>
 <summary>Solution</summary>

A component (`src/exercises/1-Introduction/Pizza.js`):

```jsx static
import React from 'react';
export default function Pizza() {
  return <h1>Hello, pizza! 🍕</h1>;
}
```

An example file (`src/exercises/1-Introduction/Pizza.md`):

````md static
The most delicious pizza in the world:

```jsx
<Pizza />
```
````

</details>
