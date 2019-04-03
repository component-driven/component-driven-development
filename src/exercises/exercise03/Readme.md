# Creating generic typography components

## Getting started

Run `npm start` and navigate to _Exercise 3_ in the sidebar. Use files in the `src/exercises/exercise03` folder.

## Result

The result should look like this:

```js noeditor
import Heading from '../../components/core/Heading';
import Text from '../../components/core/Text';
<>
  <Heading size="xxl" as="h1">
    Heading 1
  </Heading>
  <Heading size="xl" as="h2">
    Heading 2
  </Heading>
  <Heading size="l" as="h3">
    Heading 3
  </Heading>
  <Heading size="base" as="h4">
    Heading 4
  </Heading>
  <Text>Normal text</Text>
  <Text variant="secondary">Secondary text</Text>
  <Text variant="tertiary">Tertiary text</Text>
  <Text variant="error">Error text</Text>
</>;
```

## 3.1. Creating a basic heading component

Have a look at our [typography scale](https://component-driven.github.io/component-driven-development/styleguide/#typography):

```jsx noeditor
import Typography from '../../styleguide/Typography';
<Typography />;
```

We already know how to access design tokens in our styled components from the previous exercise.

## The task

Create a component that renders different levels of headings:

- `heading` font family;
- `normal` font weight;
- `base` color;
- font size is defined by a component prop (one of `m`, `l`, `xl` or `xxl`);
- HTML element can be changed independently from the font size.

**Hint:** We need to change heading styles and an HTML element independently, because heading level [depends on the context](https://medium.com/@Heydon/managing-heading-levels-in-design-systems-18be9a746fa3), where the heading is placed in an app, and doesn’t always match the style. Use styled-components [`as` props](https://www.styled-components.com/docs/api#as-polymorphic-prop) to change an HTML element, used to render a component.

<details>
 <summary>Solution</summary>

```js static
import styled from 'styled-components';

const Heading = styled.h1`
  margin: 0;
  line-height: 1.2;
  font-weight: normal;
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes[props.size]};
  color: ${props => props.theme.colors.base};
`;

Heading.propTypes = {
  /** Custom component or HTML tag */
  as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  size: PropTypes.oneOf(['xxl', 'xl', 'l', 'm']),
  children: PropTypes.node
};
/** @component */
export default Heading;
```

</details>

## 3.2. Making margins customizable

Usually we need some whitespace below the heading. We can hardcode values for each heading size, but often whitespace depends on the context, where the heading is used.

We can remove margins from our `Heading` component and define them where we use the component:

```jsx static
const Container = styled.div`
  margin-bottom: ${props => props.theme.space[6]};
`
<Container>
  <Heading size="xl">The quick brown fox</Heading>
</Container>
```

But that’s a lot of boilerplate code.

We can [extend](https://www.styled-components.com/docs/basics#extending-styles) the `Heading` component:

```jsx static
const HeadingWithMargin = Heading.extend`
  margin-bottom: ${props => props.theme.space[6]};
`
<HeadingWithMargin size="xl">The quick brown fox</HeadingWithMargin>
```

But that's not much better.

Let’s make the whitespace part of the component API:

```jsx static
<Heading size="xl" mb={5}>
  The quick brown fox
</Heading>
```

## The task

Add props `m`, `mt`, `mr`, `mb` and `ml` to change `margin`, `margin-top`, `margin-right`, `margin-bottom` and `margin-left` respectively.

<details>
 <summary>Solution</summary>

```js static
import styled from 'styled-components';

const Heading = styled.h1`
  margin: ${props => props.theme.space[props.m]};
  margin-top: ${props => props.theme.space[props.mt]};
  margin-right: ${props => props.theme.space[props.mr]};
  margin-bottom: ${props => props.theme.space[props.mb]};
  margin-left: ${props => props.theme.space[props.ml]};
  line-height: 1.2;
  font-weight: normal;
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes[props.size]};
  color: ${props => props.theme.colors.base};
`;

Heading.defaultProps = {
  m: 0,
  size: 'xxl'
};

/** @component */
export default Heading;
```

</details>

## 3.3. Introducing styled-system

[Styled-system](http://jxnblk.com/styled-system/) is a collection of utility functions that allow you to control styles of your component using props.

For example, the [space](http://jxnblk.com/styled-system/api#space) function does exactly what we have done in the last task:

```js static
import { space } from 'styled-system';
const Heading = styled(Base)`
  ${space};
  /* ... */
`;
```

**Note:** Have a look at the [default spacing scale](https://jxnblk.com/styled-system/api#space-1).

## The task

Replace all custom margins with the `space` function from styled-system.

<details>
 <summary>Solution</summary>

```js static
import styled from 'styled-components';
import { space } from 'styled-system';

const Heading = styled.h1`
  ${space};
  /* Other styles */
`;

/** @component */
export default Heading;
```

</details>

## 3.4. Simplifying styles

Converting props to styles isn’t the only feature of styled-system: [themeGet](http://jxnblk.com/styled-system/api#themeget) function can save you a few keystrokes when accessing the theme values, so instead of writing `props => props.theme.colors.base` you could write:

```js static
import styled from 'styled-components';
import { themeGet } from 'styled-system';

const Heading = styled.h1`
  font-family: ${themeGet('fonts.heading')};
  color: ${themeGet('colors.base')};
`;
```

## The task

Replace direct access to `props.theme` with the `themeGet` function.

<details>
 <summary>Solution</summary>

```js static
import styled from 'styled-components';
import { space, themeGet } from 'styled-system';

const Heading = styled(Base)`
  ${space};
  font-family: ${themeGet('fonts.heading')};
  font-size: ${props => themeGet(`fontSizes.${props.size}`)};
  color: ${themeGet('colors.base')};
  /* Other styles */
`;

/** @component */
export default Heading;
```

</details>

## 3.5. Creating a generic text component

Now we know enough to easily create customizable components that use many theme values.

## The task

Create a component that renders text in different styles:

- Normal text (`base` font size, `base` color);
- Secondary text (`base` font size, `secondary` color);
- Small text (small (`s`) font size, `secondary` color);
- Error message (`base` font size, `error` color).

The `variant` prop is used to change text style.

**Bonus:** The user can change a component or an HTML element that is used to render text.

<details>
 <summary>Solution</summary>

```jsx static
import styled from 'styled-components';
import { themeGet } from 'styled-system';

const getFontSize = variant =>
  ({
    base: 'm',
    secondary: 'm',
    tertiary: 's',
    error: 'm'
  }[variant]);
const getColor = variant =>
  ({
    base: 'base',
    secondary: 'secondary',
    tertiary: 'secondary',
    error: 'error'
  }[variant]);

const Text = styled.p`
  margin: 0;
  line-height: ${themeGet('lineHeights.base')};
  font-family: ${themeGet('fonts.base')};
  font-size: ${props =>
    props.theme.fontSizes[getFontSize(props.variant)]};
  color: ${props => props.theme.colors[getColor(props.variant)]};
`;

Text.propTypes = {
  /** Custom component or HTML tag */
  as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /** Variation */
  variant: PropTypes.oneOf([
    'base',
    'secondary',
    'tertiary',
    'error'
  ]),
  children: PropTypes.node
};

Text.defaultProps = {
  variant: 'base'
};

/** @component */
export default Text;
```

</details>
