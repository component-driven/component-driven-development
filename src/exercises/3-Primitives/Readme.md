In this exercise we’ll create reusable primitive components. We’ll create a text and a heading component. We'll learn how to reduce boilerplate by using [styled-system](https://styled-system.com)

About 80% of every user interface is a text. Unsurprisingly, most of inconsistencies are coming from text styles. In order to reduce the amount of different text styles we should restrict our styling and only allow using design tokens.

## 3.1. Creating a generic text component

In the previous exercise we learned how to use design tokens instead of arbitrary CSS values in our components. Now we need a way to write styles and access design tokens inside our application code. I.e. we want to design a component that implements an API to our design system and doesn't require writing CSS.

We could approach this task naively:

```jsx static
const Text = styled.p`
  font-family: ${props => props.theme.fonts[props.fontFamily]};
  font-size: ${props => props.theme.fontSizes[props.fontSize]};
  font-weight: ${props => props.theme.fontWeights[props.fontWeight]};
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

## 3.4 Making your styles responsive

When working on the app or a website it's oftentimes desirable to handle responsive styles as well. There are different ways of handling responsive styles. Styled-system approach is simple yet very powerful: every prop accepts a value or an array of values.

### The task

- Make the font size of `Heading` component responsive. It should become smaller, on smaller screens.

**Hint:** Check out the documentation of [responsive styles](https://styled-system.com/responsive-styles)

## 3.5 Making primitives lean

It is not possible to account for all use cases for your design system. As with any software, requirements are going to change over time and it is crucial for primitives to be lean enough to adapt to those requirement. In other words, good primitives should be flexible enough to allow one-off "snowflakes" usages of unpredicted requirements.

### The task

- Refactor `Text` component so it could accept style overrides via `css` prop. All values should accept design tokens and not just CSS values.

**Hint:** Check out how to use [CSS prop](https://www.styled-components.com/docs/api#css-prop) in styled-components and [documentation of CSS function](https://styled-system.com/css)

## 3.6 Adding responsive styles via primitives

When working on the app or a website it's oftentimes desirable to handle responsive styles as well. There are different ways of handling responsive styles. Styled-system approach is simple yet very powerful: every prop accepts a value or an array of values.

## 3.7. Managing whitespace of primitives

Usually we need some whitespace around a component. Most of time, we get defaults by the user agent (the browser). For example, `0.5em` above and below a heading and paragraph. This is a good default if you're crating a document for reading but can make usage of primitives in different places of your app a nightmare since you'd need to override defaults every single time. Moreover those defaults are based on the current font size value that comes from CSS cascade.

In order to make primitives reusable, we should remove margins from the component by default and then add it where needed.

This also can be done differently. We could create a new component based on the original one but with an added margin:

```jsx static
import styled from 'styled-components';
import Heading from '../Heading';

const HeadingWithBottomMargin = styled(Heading)`
  margin-bottom: ${props => props.theme.space[5]};
`
<HeadingWithBottomMargin size="xl">The quick brown fox</HeadingWithBottomMargin>
```

Imagine doing this across all the app! 🤯 Not to mention it is not reusable.

Following the same principle as before, we should make the whitespace part of the component's API. This way we can add margins via props when using the component:

```jsx static
// This will add `margin-bottom: 0.5em` and `margin-top: 0.5em`
<Heading size="xl" marginBottom="0.5em" mt="0.5em">
  The quick brown fox
</Heading>
```

But as we learned already, our goal is to restrict developer's choice and to achieve that we should use design tokens.

## The task

Refactor `Text` component so that we can customize its `margin` via props. Keep in mind that values should be coming from our [spacing scale](https://cdds.netlify.com/styleguide/#/Foundation?id=spacing):

```jsx noeditor
import { Spacing } from '@component-driven/react-design-tokens';
import theme from '../../theme';

<Spacing theme={theme} />;
```

## Solutions

<details>
 <summary>Text</summary>

```js {"file": "final/Text.js", "static": true}
```

</details>

<details>
 <summary>Heading</summary>

```js {"file": "final/Heading.js", "static": true}
```

</details>

## Takeaways

1. All text in the UI should be rendered using `Text` component
1. Do not rely on global CSS since it is error prone and may differ depending on where the component is rendered.
1. Use design tokens from the design system to reduce the amount of choice.
1. When creating primitives, first think of the API (i.e. imagine how the component is going to be used, then code it).
1. styled-system simplifies creating primitives with constraint-based APIs.
1. Compose complex components out of primitives.
