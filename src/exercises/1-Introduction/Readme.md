In this exercise we’ll learn principles of Component-driven Development. We'll learn to use React Styleguidist — a tool for documenting and developing reusable components. We’ll compare styling approaches based on class names with CSS-in-JS and how to do styling based on component props.

## 1.1. Exploring React Styleguidist

[React Styleguidist](https://react-styleguidist.js.org/) is a tool we’re using as a workbench to develop components, and to generate a style guide.

### The task

1. Explore React Styleguidist interface, try to switch to isolated mode (a button in the top right corner), try to edit code of the examples in the browser.
1. Add a new `Button.js` file (we already added the example Markdown file) in the `src/exercises/1-Introduction` folder (both, `.js` and `.md`, files should have the same name) and see how it’s automatically added to the style guide (restart the style guide if the new component did not appear automatically).
1. Edit a component source in the `Button.js` file. See how all examples update every time you save a file.
1. Edit component’s `PropTypes` definition. See how “Props & methods” section reacts to the updates.
1. Edit examples in the `Button.md` file, add a new example. See how examples in the browser update.

## 1.2. Introducing styled-components

If you’re not familiar with [styled-components](https://www.styled-components.com/), here’s the idea in five lines of code:

```js static
import styled from 'styled-components';

const Title = styled.h1`
  color: salmon;
`;

<Title>Hello components!</Title>;
```

The `Title` component will render an `h1` tag with an attached CSS that sets the color to `salmon`. Styles look almost identical to regular CSS, but instead of classes we have components.

You can also use object notation instead of tagged template literals:

```js static
import styled from 'styled-components';

const Title = styled('h1')({
  color: 'salmon'
});

<Title>Hello components!</Title>;
```

**Hint:** [A 5-minute intro to styled-components](https://medium.freecodecamp.org/a-5-minute-intro-to-styled-components-41f40eb7cd55).

### The result

The result should look like this:

```js noeditor
import Button from '../../components/primitives/Button';
<>
  <Button variant="primary">Primary</Button>{' '}
  <Button>Secondary</Button>{' '}
  <Button variant="primary" disabled>
    Disabled
  </Button>{' '}
  <Button disabled>Disabled</Button>
</>;
```

### The task

1. Rewrite a button component in `Button.js` using styled-components.

2. Define basic styles like padding, text and background colors according to [the mockup](https://cdds.netlify.com/), use primary button styles (like the “Place an order” button on the checkout page).

_Don’t try to be pixel perfect here, that’s not the goal of the exercise. Also exact values (like colors or font sizes) aren’t important at this stage — we’ll deal with that in the future exercises._

<details>
 <summary>Solution</summary>

A component (`src/exercises/1-Introduction/Button.js`):

```js {"file": "final/Button.js", "static": true}
```

</details>
