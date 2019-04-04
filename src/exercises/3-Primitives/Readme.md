## What are primitives

In this exercise we’ll create reusable form components. We’re create a button, an input field and a custom select. We’ll learn how to work with styled-components, how to do prop-based styling and how to access design tokens (values we’ve defined in `theme.js` in the previous exercise).

## Result

The result should look like this:

```js noeditor
import Button from '../../components/core/Button';
<>
  <Button variant="primary">Primary</Button>{' '}
  <Button>Secondary</Button>{' '}
  <Button variant="primary" disabled>
    Disabled
  </Button>{' '}
  <Button disabled>Disabled</Button>
</>;
```

```js noeditor
import Input from '../../components/core/Input';
<Input value="" />;
```

```js noeditor
import Select from '../../components/core/Select';
<Select>
  <option value="1">Dachshund</option>
  <option value="2">Saluki</option>
  <option value="3">Sheltie</option>
  <option value="4">Border Collie</option>
</Select>;
```

## 2.1. Introducing styled-components

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

### The task

1. Rewrite a button component in `Button.js` using styled-components.

2. Define basic styles like padding, text and background colors according to [the mockup](https://component-driven.github.io/component-driven-development/).

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

## 2.2. Using design tokens

We’ve already created design tokens for our project. Check them out in [the style guide](https://component-driven.github.io/component-driven-development/styleguide/#/Foundation). Tokens are defined as JavaScript objects in the [theme.js file](https://github.com/component-driven/component-driven-development/blob/master/src/theme.js).

styled-components makes it extremely simple to use design tokens, thanks to [ThemeProvider](https://github.com/component-driven/component-driven-development/blob/master/src/ThemeProvider.js). You can access them in your component like this:

```js static
const Button = styled.button`
  background: ${props => props.theme.colors.primary};
`;
```

### The task

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

## 2.3. Add hover and active styles

Use `&` to refer to a component class name similar to Sass:

```js static
const Button = styled.button`
  background: salmon;
  &:hover {
    background: lightsalmon;
  }
`;
```

### The task

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

## 2.4. Prop-based styling

Styles in styled-components [can depend on props](https://www.styled-components.com/docs/basics#adapting-based-on-props) you pass to your component:

```js static
const Title = styled.h1`
  font-size: ${props => (props.huge ? '4em' : '2em')};
`;

<Title huge>Hello components!</Title>;
```

### The task

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

## 2.5. Reusable input field component

1. Create an `Input` component, similar to the `Button` component, we’ve created in the previous tasks.

- An input should support disabled state (`disabled` prop).

**Bonus 1:** Add focus style.

<details>
 <summary>Solution</summary>

```js static
import styled from 'styled-components';
import { themeGet } from 'styled-system';

const Input = styled.input`
  box-sizing: border-box;
  display: block;
  margin: 0;
  height: 2.5rem;
  padding: ${themeGet('space.3')};
  border: 1px solid ${themeGet('colors.primary')};
  border-radius: ${themeGet('radii.base')};
  font-family: ${themeGet('fonts.base')};
  font-size: ${themeGet('fontSizes.base')};
  color: ${themeGet('colors.base')};
  background-color: ${themeGet('colors.bg')};

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${themeGet('colors.focus')};
  }

  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
  }
`;

/** @component */
export default Input;
```

</details>

## 2.6. Reusable custom select component

1. Create a `Select` component, similar to the `Button` and `Input` components, we’ve created in the previous tasks.

- An select should support disabled state (`disabled` prop).

**Bonus 1:** Add focus style.

<details>
 <summary>Solution</summary>

```js static
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { getDownArrowIcon } from '../../components/core/Select/icons';

const Select = styled.select`
  appearance: none;
  user-select: none;
  width: ${props => props.fullWidth && '100%'};
  height: 2.5rem;
  padding-top: ${themeGet('space.3')};
  padding-right: ${themeGet('space.5')};
  padding-bottom: ${themeGet('space.3')};
  padding-left: ${themeGet('space.3')};
  border: 1px solid ${themeGet('colors.primary')};
  border-radius: ${themeGet('radii.base')};
  font-family: ${themeGet('fonts.base')};
  font-size: ${themeGet('fontSizes.base')};
  color: ${themeGet('colors.base')};
  background-color: ${themeGet('colors.bg')};

  /* Down arrow icon */
  background-image: ${props =>
    getDownArrowIcon(props.theme.colors.secondary)};
  background-position: center right ${themeGet('space.3')};
  background-repeat: no-repeat;

  &:hover:enabled,
  &:active:enabled,
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${themeGet('colors.focus')};
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
  }
`;

/** @component */
export default Select;
```

</details>
