## Creating generic typography components

### Getting started

Run Styleguidist: `npm run exercise 3`. Use files in the `src/exercises/exercise04` folder.

### Result

The result should look like this:

```js noeditor
const Heading = require('../../components/core/Heading').default;
const Text = require('../../components/core/Text').default;
<>
  <Heading size="xxl" is="h1">
    Heading 1
  </Heading>
  <Heading size="xl" is="h2">
    Heading 2
  </Heading>
  <Heading size="l" is="h3">
    Heading 3
  </Heading>
  <Heading size="base" is="h4">
    Heading 4
  </Heading>
  <Text>Normal text</Text>
  <Text secondary>Secondary text</Text>
  <Text tertiary>Tertiary text</Text>
  <Text error>Error message</Text>
</>;
```

### 3.1. Creating a basic heading component

Have a look at our [typography scale](https://component-driven.github.io/component-driven-development/styleguide/#typography):

```jsx noeditor
const Typography = require('../../styleguide/Typography').default;
<Typography />;
```

We already know how to access design tokens in our styled components from the previous exercise.

#### The task

Create a component that renders different levels of headings:

- heading font family;
- normal font weight;
- base color;
- font size is defined by a component prop (one of `base`, `l`, `xl` or `xxl`).

Render all sizes with `h1` element — we’ll fix that soon.

<details>
 <summary>Solution</summary>

```js static
import styled from 'styled-components';

const Heading = styled.h1`
  margin: 0;
  line-height: 1.2;
  font-weight: normal;
  font-family: ${props => props.theme.fontFamily.heading};
  font-size: ${props => props.theme.fontSize[props.size]};
  color: ${props => props.theme.color.base};
`;

/** @component */
export default Heading;
```

</details>

### 3.2. Making an HTML element configurable

We need to change heading styles and an HTML element independently, because heading level [depends on the context](https://medium.com/@Heydon/managing-heading-levels-in-design-systems-18be9a746fa3), where the heading is placed in an app, and doesn’t always match the style.

We can implement it like this:

```js static
const Base = ({ is: Component, ...props }) => (
  <Component {...props} />
);

const Heading = styled(Base)`
  /* Our styles */
`;
```

And then we’ll be able to use this component like so:

```jsx static
<Heading is="h2" />
```

#### The task

Add a prop (`is`) that will change an HTML element used to render the text.

<details>
 <summary>Solution</summary>

```js static
import React from 'react';
import styled from 'styled-components';

const Base = ({ is: Component, ...props }) => (
  <Component {...props} />
);

const Heading = styled(Base)`
  margin: 0;
  line-height: 1.2;
  font-weight: normal;
  font-family: ${props => props.theme.fontFamily.heading};
  font-size: ${props => props.theme.fontSize[props.size]};
  color: ${props => props.theme.color.base};
`;

/** @component */
export default Heading;
```

</details>

### 3.3. Making margins customizable

Usually we need some whitespace below the heading. We can hardcode values for each heading size, but often whitespace depends on the context, where the heading is used.

We can remove all whitespace and wrap our `Heading` component in the `Box` component from Grid Styled:

```jsx static
<Box mb={4}>
  <Heading size="xl">The quick brown fox</Heading>
</Box>
```

But that’s quite verbose.

We can use the `Box` component instead of our `Base` component:

```jsx static
const Heading = styled(Box).attrs({
  is: props => props.is,
  m: 0
})`
  /* Other styles */
`;
```

`attrs()` method defines default props of a styled component. Here we’re passing `Heading`’s `is` prop to the `Box` component, and remove margins. So no we can use our component like this:

```jsx static
<Heading size="xl" mb={4}>
  The quick brown fox
</Heading>
```

#### The task

Replace the `Base` component with the `Box` component from Grid Styled to allow passing `Box`’s props on our component.

<details>
 <summary>Solution</summary>

```js static
import { Box } from 'grid-styled';
import styled from 'styled-components';

const Heading = styled(Box).attrs({
  is: props => props.is,
  m: 0
})`
  font-weight: normal;
  line-height: 1.2;
  font-family: ${props => props.theme.fontFamily.heading};
  font-size: ${props => props.theme.fontSize[props.size]};
  color: ${props => props.theme.color.base};
`;

/** @component */
export default Heading;
```

</details>

### 3.4. Creating a mixin for text styles

Using theme properties in styled-components is quite verbose, especially if we want to use base values of our design system:

```css static
font-family: ${props => props.theme.fontFamily.base};
font-size: ${props => props.theme.fontSize.base};
color: ${props => props.theme.color.base};
```

We can extract these styles into a _mixin_ like this:

```js static
import { css } from 'styled-components';

const text = ({
  fontFamily = 'base',
  fontSize = 'base',
  color = 'base'
} = {}) => css`
  font-family: ${props => props.theme.fontFamily[fontFamily]};
  font-size: ${props => props.theme.fontSize[fontSize]};
  color: ${props => props.theme.color[color]};
`;
```

And then we can use it like this:

```jsx static
const Error = styled.p`
  ${text({ color: 'error' })} /* Other styles */;
`;
```

#### The task

1.  Expand the `text` mixin with `lineHeight` and `fontWeight` options (just pass values directly to CSS properties, we don’t have any tokens for them) and put it into a separate file.
2.  Update the `Heading` component to use the mixin.

<details>
 <summary>Solution</summary>

The mixin:

```js static
import { css } from 'styled-components';

export const text = ({
  lineHeight = 1,
  fontFamily = 'base',
  fontSize = 'base',
  fontWeight = 'normal',
  color = 'base'
} = {}) => css`
  line-height: ${lineHeight};
  font-weight: ${fontWeight};
  font-family: ${props => props.theme.fontFamily[fontFamily]};
  font-size: ${props => props.theme.fontSize[fontSize]};
  color: ${props => props.theme.color[color]};
`;
```

The component:

```js static
import { Box } from 'grid-styled';
import styled from 'styled-components';
import { text } from './mixins';

const Heading = styled(Box).attrs({
  is: props => props.is,
  m: 0
})`
  ${props =>
    text({
      fontFamily: 'heading',
      fontSize: props.size,
      lineHeight: 1.2
    })};
`;

/** @component */
export default Heading;
```

</details>

### 3.5. Creating a generic text component

Now we can use our `text` mixin to easily create components that render text.

### The task

Create a component that renders text in different styles:

- Normal text (base font size, base color);
- Secondary text (base font size, secondary color);
- Small text (small font size, secondary color);
- Error message (base font size, error color).

Props are used to change text style. The user can change a component or an HTML tag that is used to render text. Use the `text` mixin from the previous section.

<details>
 <summary>Solution</summary>

```jsx static
import React from 'react';
import styled from 'styled-components';

const Base = ({ is: Component, ...props }) => (
  <Component {...props} />
);

const Text = styled(Base)`
  margin: 0;
  ${props =>
    text({
      fontSize: props.tertiary ? 's' : 'base',
      lineHeight: 1.5,
      color:
        (props.secondary && 'secondary') ||
        (props.tertiary && 'secondary') ||
        (props.error && 'error') ||
        'base'
    })};
`;

/** @component */
export default Text;
```

</details>
