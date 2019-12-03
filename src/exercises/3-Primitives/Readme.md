In this exercise we’ll create reusable primitive components. We’ll create a text and a heading component. We'll learn how to reduce boilerplate by using [styled-system](https://styled-system.com)

About 80% of every user interface is a text. Unsurprisingly, most of inconsistencies are coming from text styles. In order to reduce the amount of different text styles we should restrict our styling and only allow using design tokens.

## 3.1. Creating a generic text component

In the previous exercise we learned how to use design tokens instead of arbitrary CSS values in our components. Now we need a way to write styles and access design tokens inside our application code. I.e. we want to design a component that implements an API to our design system and doesn't require writing CSS.

We could approach this task naively:

```jsx static
const Text = styled.p`
  fontfamily: ${props => props.theme.fonts[props.fontFamily]};
  fontsize: ${props => props.theme.fontSizes[props.fontSize]};
  fontweight: ${props => props.theme.fontWeights[props.fontWeight]};
  color: ${props => props.theme.colors[props.color]};
`;
```

As you can see, there is a lot of repetition going on. Also this method doesn't cover lots of edge cases. Luckily for us, [styled-system](https://styled-system.com) is a library designed specifically for our needs.

> Styled System lets you quickly build custom UI components with constraint-based style props based on scales defined in your theme.

### The task

1. Refactor the `Text` component so that it can render different font styles that are defined in the `theme.js`
1. Provide following API via props: `fontFamily`, `fontSize`, `fontWeight`, `lineHeight`, `letterSpacing`, `textAlign`, and `fontStyle`.
1. The component should use `fontFamily: "body"`, `fontSize: 2`, `fontWeight: "normal"`, and should render `p` tag by default
1. Allow using design tokens directly via string literals, like `"primary"`, `"muted"`.

### The result

The result should allow rendering such text:

```jsx harmony
import Text from '../../components/primitives/Text';

<Text color="error" fontWeight="bold">
  Bold red text
</Text>;
```

## 3.2. Using style variations

Now we already have a much better way of styling any text in the application but it doesn't prevent developers from using "wrong" combinations of tokens. I.e. you can still end up with a barely readable text or a font style that doesn't exist anywhere else in the app.

To prevent that, we can make our primitives more rigid by only allowing certain pre-defined font styles.

### The task

Refactor `Text` component to allow rendering text with following styles:

- Normal text (`base` font size, `base` color);
- Secondary text (`base` font size, `secondary` color);
- Small text (small (`sm`) font size, `secondary` color);
- Error message (`base` font size, `error` color).

### The result

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

<details>
 <summary>Solution</summary>

```js {"file": "final/Text.js", "static": true}
```

</details>

## 3.3 Making your styles responsive

When working on the app or a website it's oftentimes desirable to handle responsive styles as well. There are different ways of handling responsive styles. Styled-system approach is simple yet very powerful: every prop accepts a value or an array of values. If the array is provided,

## 3.3. Extending primitives

Now that we have our `Text` component, let's create a `Heading` primitive that should help rendering all headings across the app. In this case, it's important to keep in mind that in UIs headings won't follow document outline, because heading level [depends on the context](https://medium.com/@Heydon/managing-heading-levels-in-design-systems-18be9a746fa3). In other words we need to change heading styles and an HTML element independently. This means, we have to create the API that's doesn't couple HTML tag and the look of the heading. We can leverage [`as` prop](https://www.styled-components.com/docs/api#as-polymorphic-prop) to render a desired HTML element.

### The result

The result and the API should look like this:

```js
import Heading from '../../components/primitives/Heading';
<>
  <Heading size="xl" as="h1">
    Hero Heading
  </Heading>
  <Heading size="lg" as="h2">
    Big Heading
  </Heading>
  <Heading size="md" as="h3">
    Small Heading
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

Create a component that renders different levels of headings using `Text` component:

- `heading` font family;
- `heading` line height;
- different sizes are defined by a component prop (`size`, the value is `md`, `lg` or `xl`);
- HTML element can be changed independently from the font size.

<details>
 <summary>Solution</summary>

```js {"file": "final/Heading.js", "static": true}
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

## Takeaways

1. All text in the UI should be rendered using `Text` component
1. Do not rely on global CSS since it is error prone and may differ depending on where the component is rendered.
1. Use design tokens from the design system to reduce the amount of choice.
1. When creating primitives, first think of the API (i.e. imagine how the component is going to be used, then code it).
1. styled-system allows creating primitives with constraint-based APIs easily.
1. Compose higher order components out of primitives.
