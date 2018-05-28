## Creating reusable components

### Getting started

Run Styleguidist: `npm run exercise 2`.

### Tasks

#### 2.1. Introducing styled-components

##### Background

If you’re not familiar with [styled-components](https://www.styled-components.com/), here’s the idea in five lines of code:

```js static
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2em;
`;

<Title>Hello components!</Title>
```

The `Title` component will render an `h1` tag with an attached CSS that sets font size to 2 ems. Styles look almost identical to regular CSS, but instead of classes we have components.

**Hint:** [A 5-minute intro to styled-components](https://medium.freecodecamp.org/a-5-minute-intro-to-styled-components-41f40eb7cd55)

##### The task

1.  Rewrite our button component to use styled-components.

2.  Define basic styles like padding, text and background colors according to the mockup.

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

#### 2.2. Introducing design tokens

##### Background

Design tokens are the single source of truth for project’s colors, whitespace, font sizes and other design decisions. We’re already created tokens for our project. Check them out in [the style guide](https://sapegin.github.io/component-driven-development/styleguide/#foundation). Tokens defined as JavaScript objects in the [theme.js file](https://github.com/sapegin/component-driven-development/blob/master/src/theme.js).

Design tokens are accessible in styled-components, thanks to [ThemeProvider](https://github.com/sapegin/component-driven-development/blob/master/src/Provider.js), and you can use them like this:

```js static
const Button = styled.button`
  background: ${props => props.theme.color.primary};
`;
```

##### The task

1.  Replace all hardcoded values with design tokens.

2.  Add base font family, font size and border radius.

**Hint:** See [theme.js file](https://github.com/sapegin/component-driven-development/blob/master/src/theme.js) for all available tokens.

<details>
 <summary>Solution</summary>

```js static
import styled from 'styled-components';

const Button = styled.button`
  padding: ${props => props.theme.space[2]}px ${props => props.theme.space[3]}px;
  color: ${props => props.theme.color.bg};
  background: ${props => props.theme.color.primary};
  border-radius: ${props => props.theme.borderRadius.base};
  font-family: ${props => props.theme.fontFamily.base};
  font-size: ${props => props.theme.fontSize.base};
  border: 0;
`;

/** @component */
export default Button;
```

</details>

#### 2.3. Add hover and active styles

##### Background

Use `&` to refer to a component class name:

```js static
const Button = styled.button`
  background: salmon;
  &:hover {
    background: lightsalmon;
  }
`;
```

##### The task

1.  Add hover and active styles.

**Bonus 1:** Add focus styles.

**Bonus 2:** Add disabled styles. Make sure that a button doesn’t have a hover state when it’s disabled.

<details>
 <summary>Solution</summary>

```js static
import styled from 'styled-components';

const Button = styled.button`
  /* Other styles */

  &:hover:enabled,
  &:active {
   background: ${props => props.theme.color.hover};
   cursor: pointer;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme.color.focus};
  }

  &:disabled {
    opacity: 0.6;
  }
`;

/** @component */
export default Button;
```

</details>

#### 2.3. Prop-based styling

##### Background

Styles in styled-components [can depend on props](https://www.styled-components.com/docs/basics#adapting-based-on-props) you pass to your component:

```js static
const Title = styled.h1`
  font-size: ${props => props.huge ? '4em' : '2em'};
`;

<Title huge>Hello components!</Title>
```

##### The task

1.  Add a secondary variation of a button that should be enabled by rendering a component with a `secondary` prop.

2.  Add a new prop to PropTypes.

<details>
 <summary>Solution</summary>

```js static
import styled from 'styled-components';

const Button = styled.button`
  /* Other styles */
  color: ${props =>
    props.secondary ? props.theme.color.primary : props.theme.color.bg};
  background-color: ${props =>
    props.secondary ? 'transparent' : props.theme.color.primary};
  border: 1px solid ${props => props.theme.color.primary};
`;

/** @component */
export default Button;
```

</details>

#### 2.4. Introducing Grid Styled

##### Background

[Grid Styled](http://jxnblk.com/grid-styled/) allows you to define margins and paddings, and create responsive flexbox layouts using React components:

```js static
import { Box } from 'grid-styled';

<Box is="section" p={2} mb={4}>Hello components!</Box>
```

This code will render a `<section>` with padding of 8 pixels and bottom margin of 32 pixels.

You can add extra styles using styled-components:

```js static
import styled from 'styled-components';
import { Box } from 'grid-styled';

const Card = styled(Box).attrs({
	is: 'section',
	p: 2,
	mb: 4,
})`
  background: ghostwhite;
  border-radius: 3px;
`;
```

##### The task

1.  Replace custom whitespace styles with a `Box` component from Grid Styled.

<details>
 <summary>Solution</summary>

```js static
import styled from 'styled-components';
import { Box } from 'grid-styled';

const Button = styled(Box).attrs({
  is: 'button',
  px: 3,
  py: 2,
})`
  /* All styles except padding */
`;

/** @component */
export default Button;
```

</details>
