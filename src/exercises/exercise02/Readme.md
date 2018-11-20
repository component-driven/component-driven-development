## Creating reusable components

### Getting started

Run `npm start` and navigate to _Exercise 2_ in the sidebar. Use files in the `src/exercises/exercise02` folder.

### Result

The result should look like this:

```js noeditor
const Button = require('../../components/core/Button').default;
<>
  <Button variant="primary">Primary</Button>{' '}
  <Button>Secondary</Button>{' '}
  <Button variant="primary" disabled>
    Disabled
  </Button>{' '}
  <Button disabled>Disabled</Button>
</>;
```

### 2.1. Introducing styled-components

If you’re not familiar with [styled-components](https://www.styled-components.com/), here’s the idea in five lines of code:

```js static
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2em;
`;

<Title>Hello components!</Title>;
```

The `Title` component will render an `h1` tag with an attached CSS that sets font size to 2 ems. Styles look almost identical to regular CSS, but instead of classes we have components.

**Hint:** [A 5-minute intro to styled-components](https://medium.freecodecamp.org/a-5-minute-intro-to-styled-components-41f40eb7cd55).

#### The task

1. Rewrite our button component to use styled-components.

2. Define basic styles like padding, text and background colors according to [the mockup](https://component-driven.github.io/component-driven-development/).

**Hint:** To fix PropTypes documentation in Styleguidist, add a `@component` JSDoc tag in front of your `export`:

```js static
/** @component */
export default Button;
```

<details>
 <summary>Solution</summary>

```js static
import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 16px;
  color: #fff;
  background-color: #8667a8;
  border: 0;
`;

/** @component */
export default Button;
```

</details>

### 2.2. Introducing design tokens

Design tokens are the single source of truth for project’s colors, whitespace, font sizes and other design decisions. We’ve already created tokens for our project. Check them out in [the style guide](https://component-driven.github.io/component-driven-development/styleguide/#/Foundation). Tokens are defined as JavaScript objects in the [theme.js file](https://github.com/component-driven/component-driven-development/blob/master/src/theme.js).

Design tokens are accessible in styled-components, thanks to [ThemeProvider](https://github.com/component-driven/component-driven-development/blob/master/src/Provider.js), and you can use them like this:

```js static
const Button = styled.button`
  background: ${props => props.theme.colors.primary};
`;
```

#### The task

1. Replace all hardcoded values with design tokens.

2. Add `base` font family, font size and border radius.

**Hint:** See [theme.js file](https://github.com/component-driven/component-driven-development/blob/master/src/theme.js) for all available tokens.

<details>
 <summary>Solution</summary>

```js static
import styled from 'styled-components';

const Button = styled.button`
  padding: ${props => props.theme.space[3]}px ${props =>
      props.theme.space[4]}px;
  color: ${props => props.theme.colors.bg};
  background: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.radii.base};
  font-family: ${props => props.theme.fonts.base};
  font-size: ${props => props.theme.fontSizes.base};
  border: 0;
`;

/** @component */
export default Button;
```

</details>

### 2.3. Add hover and active styles

Use `&` to refer to a component class name similar to Sass:

```js static
const Button = styled.button`
  background: salmon;
  &:hover {
    background: lightsalmon;
  }
`;
```

#### The task

1. Add hover and active styles.

**Bonus 1:** Add focus style.

**Bonus 2:** Add disabled style. Make sure that a button doesn’t have a hover state when it’s disabled.

<details>
 <summary>Solution</summary>

```js static
import styled from 'styled-components';

const Button = styled.button`
  /* Other styles */

  &:hover:enabled,
  &:active {
    background: ${props => props.theme.colors.hover};
    cursor: pointer;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme.colors.focus};
  }

  &:disabled {
    opacity: 0.6;
  }
`;

/** @component */
export default Button;
```

</details>

### 2.4. Prop-based styling

Styles in styled-components [can depend on props](https://www.styled-components.com/docs/basics#adapting-based-on-props) you pass to your component:

```js static
const Title = styled.h1`
  font-size: ${props => (props.huge ? '4em' : '2em')};
`;

<Title huge>Hello components!</Title>;
```

#### The task

1. Add a new variation of a button:

- Render the current style when the component rendered with a `variant="primary"` prop.
- Render a new, secondary, style (no background, just a border) when the component is rendered with a `variant="secondary"` prop.

2. Add the new `variant` prop to PropTypes.
3. Render a secondary button by default (when the `variant` prop is missed).

<details>
 <summary>Solution</summary>

```js static
import styled from 'styled-components';

const Button = styled.button`
  /* Other styles */
  color: ${props =>
    props.variant === 'primary'
      ? props.theme.colors.bg
      : props.theme.colors.primary};
  background-color: ${props =>
    props.variant === 'primary'
      ? props.theme.colors.primary
      : 'transparent'};
  border: 1px solid ${props => props.theme.colors.primary};
`;

Button.propTypes = {
  /** Button label */
  children: PropTypes.node,
  /** Button variation */
  variant: PropTypes.oneOf(['primary', 'secondary'])
};

Button.defaultProps = {
  variant: 'secondary'
};

/** @component */
export default Button;
```

</details>
