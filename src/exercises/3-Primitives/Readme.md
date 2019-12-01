In this exercise we’ll create reusable primitive components. We’ll create a button, an input field, a custom select, a text component and a heading component. We'll learn how to access design tokens (values we’ve defined in the `theme.js` file in the previous exercise).

## 3.1. Creating a basic heading component

We already know how to access design tokens in our styled components from the previous exercise. So now we can use these tokens to crate a generic heading component.

Styles in styled-components [can depend on props](https://www.styled-components.com/docs/basics#adapting-based-on-props) you pass to your component:

```js static
import styled from 'styled-components';
const Heading = styled.h1`
  color: ${props =>
    props.variant === 'primary'
      ? props.theme.colors.primary
      : props.theme.colors.base};
`;
```

## The result

The result should look like this:

```js noeditor
import Heading from '../../components/primitives/Heading';
<>
  <Heading size="xl" as="h1">
    Heading 1
  </Heading>
  <Heading size="lg" as="h2">
    Heading 2
  </Heading>
  <Heading size="md" as="h3">
    Heading 3
  </Heading>
</>;
```

Have a look at our [typography scale](https://cdds.netlify.com/styleguide/#/Foundation?id=typography):

```jsx noeditor
import { Typography } from '@component-driven/react-design-tokens';
import theme from '../../theme';

<Typography theme={theme} />;
```

## The task

Create a component that renders different levels of headings:

- `heading` font family;
- `normal` font weight;
- `base` color;
- font size is defined by a component prop (`size`, the value is `md`, `lg` or `xl`);
- HTML element can be changed independently from the font size.

**Hint:** We need to change heading styles and an HTML element independently, because heading level [depends on the context](https://medium.com/@Heydon/managing-heading-levels-in-design-systems-18be9a746fa3), where the heading is placed in an app, and doesn’t always match the style. Use styled-components [`as` props](https://www.styled-components.com/docs/api#as-polymorphic-prop) to change an HTML element, used to render a component.

<details>
 <summary>Solution</summary>

```js {"file_": "final/Heading-3.1.js", "static": true}
```

</details>

## 3.2. Introducing styled-system

Usually we need some whitespace above or below a component. We can hardcode some value, but often whitespace depends on the context, where the component is used.

We could create a new component with margin based on the original one:

```jsx static
import styled from 'styled-components';
import Heading from '../Heading';

const HeadingWithMargin = styled(Heading)`
  margin-bottom: ${props => props.theme.space[5]};
`
<HeadingWithMargin size="xl">The quick brown fox</HeadingWithMargin>
```

But that’s a lot of boilerplate and it's not reusable.

Let’s make the whitespace part of the component API so we can declare margins via props when using the component:

```jsx static
<Heading size="xl" mb={5}>
  The quick brown fox
</Heading>
```

[Styled-system](https://styled-system.com/) is a collection of utility functions that allow you to control styles of your component using props.

For example, the [space](https://styled-system.com/api#space) function does exactly what we’ve done in the previous task:

```js static
import styled from 'styled-components';
import { space } from 'styled-system';
const Heading = styled.h1`
  margin: 0;
  font-weight: normal;
  ${space};
`;
```

Or using the object notation instead of a template literal:

```js static
import styled from 'styled-components';
import { space } from 'styled-system';
const Heading = styled.h1(
  {
    margin: 0,
    fontWeight: 'normal'
  },
  space
);
```

**Note:** we’re overriding default margins on `h1` with `margin: 0` and then allow the user to customize them via component props using styled-system’s `space` function.

[Each styled-system function](https://styled-system.com/table) implements a group of component props. For example `space` adds padding and margins props, `typography` adds props like `fontFamily` and `fontSize`, etc.

Have a look at our [spacing scale](https://cdds.netlify.com/styleguide/#/Foundation?id=spacing):

```jsx noeditor
import { Spacing } from '@component-driven/react-design-tokens';
import theme from '../../theme';

<Spacing theme={theme} />;
```

## The task

Use the `space` function from styled-system to make margins or our Heading component customizable via props.

<details>
 <summary>Solution</summary>

```js {"file": "final/Heading.js", "static": true}
```

</details>

## 3.3. Creating a generic text component

Let’s create a more complex component, for rendering text with different styles in our app.

We already know how to control styles of component with props, styled-system can make it much simpler with [Variants](https://styled-system.com/variants/):

```js static
import styled from 'styled-components';
import { variant } from 'styled-system';
const variants = variant({
  variants: {
    primary: {
      color: 'primary'
    },
    secondary: {
      color: 'base'
    }
  }
});
const Heading = styled.h1`
  margin: 0;
  ${variants};
`;
Heading.defaultProps = {
  variant: 'secondary'
};
```

Or with an object notation:

```js static
import styled from 'styled-components';
import { variant } from 'styled-system';
const Heading = styled.h1(
  {
    margin: 0
  },
  variant({
    variants: {
      primary: {
        color: 'primary'
      },
      secondary: {
        color: 'base'
      }
    }
  })
);
Heading.defaultProps = {
  variant: 'secondary'
};
```

You can use design tokens directly in variants, like `primary` color above.

## The result

The result should look like this:

```js noeditor
import Text from '../../components/primitives/Text';
<>
  <Text>Normal text</Text>
  <Text variant="secondary">Secondary text</Text>
  <Text variant="tertiary">Tertiary text</Text>
  <Text variant="error">Error text</Text>
</>;
```

## The task

Create a component that renders text with default styles:

- Normal text (`base` font size, `base` color);
- Secondary text (`base` font size, `secondary` color);
- Small text (small (`sm`) font size, `secondary` color);
- Error message (`base` font size, `error` color).

The `variant` prop is used to change text style.

<details>
 <summary>Solution</summary>

```js {"file": "final/Text.js", "static": true}
```

</details>
