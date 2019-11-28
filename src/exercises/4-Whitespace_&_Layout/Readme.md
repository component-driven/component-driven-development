To be truly reusable, components shouldn't define any whitespace around them,
otherwise it may become hard to compose such components. Imagine a `Button`
would have `margin-right` predefined. This would make it tricky to create a
`ButtonGroup` component there buttons are placed next to each other.

This means that the _whitespace between components should be controlled outside
of components_. This can be achieved in a few different ways:

1. adding spacing props directly to components;
2. a first-class layout primitive that controls layout of its children.

Both methods are valid and have their use cases.

In this exercise we’ll learn how to work with styled-system and how to do make
our primitive components more flexible by making whitespace around them
customizable. We’ll also learn about adding a whitespace separately. We’ll learn
how to create first-class layout primitives that control layout of its children:
Box, Flex, Grid, Stack, etc.

## 4.1. Controlling whitespace with props

Usually we need some whitespace above or below a component. We can hardcode some
value, but often whitespace depends on the context, where the component is used.

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

Let’s make the whitespace part of the component API so we can declare margins
via props when using the component:

```jsx static
<Heading size="xl" mb={5}>
  The quick brown fox
</Heading>
```

## The task

Add props `m`, `mt`, `mr`, `mb`, and `ml` to change `margin`, `margin-top`,
`margin-right`, `margin-bottom`, and `margin-left` respectively.

<details>
 <summary>Solution</summary>

```js {"file": "solutions/4.1.js", "static": true}
```

</details>

## 4.2. Introducing styled-system

[Styled-system](https://styled-system.com/) is a collection of utility functions
that allow you to control styles of your component using props.

For example, the [space](https://styled-system.com/api#space) function does
exactly what we’ve done in the previous task:

```js static
import { space } from 'styled-system';
const Heading = styled.h1`
  font-weight: normal;
  ${space};
`;
```

Or using the object notation instead of a template literal:

```js static
import { space } from 'styled-system';
const Heading = styled.h1(
  {
    fontWeight: 'normal'
  },
  space
);
```

[Each styled-system function](https://styled-system.com/table) implements a
group of component props. For example `space` adds padding and margins props,
`typography` adds props like `fontFamily` and `fontSize`, etc.

**Note:** Have a look at the
[default spacing scale](https://styled-system.com/api/#defaults).

## The task

Replace all custom margins with the `space` function from styled-system.

<details>
 <summary>Solution</summary>

```js {"file": "solutions/4.2.js", "static": true}
```

</details>

## 4.3. Box primitive

We can define a new component with needed whitespace and use it:

```jsx static
const Container = styled.div`
  margin-bottom: ${props => props.theme.space[6]};
`
<Container>
  <Heading size="xl">The quick brown fox</Heading>
</Container>
```

But that’s also a lot of boilerplate code.

Let’s start with the simplest layout primitive — a `Box`. Box is a rectangular
area (basically `<div>`) that can contain other components.

### The result

Update some props in the example below to see how the `Box` reacts to the
change.

```jsx
import Box from '../../components/primitives/Box';

<Box p={2} m={3} width={1 / 4} bg="primary">
  Box content
</Box>;
```

**Note:** See how
[the value of the `width` prop is calculated](https://styled-system.com/api#layout).

### The task

1. Build the `Box` component that can control its padding, margins, width, and
   colors using props.

2. By default it should just render a `div` without any spacing applied.

3. Add `box-sizing: border-box` as the only default styles.

4. Add support for Flexbox and CSS Grid props like `alignItems` and
   `flexDirection`: we’ll need them for the next exercise.

**Hint:** use [styled-system functions](https://styled-system.com/api), like the
`space` function we’ve used in the previous exercise, to create props.

**Hint:** check out [Build a Box](https://styled-system.com/guides/build-a-box/)
article by creator of styled-system.

**Bonus:** Add PropType using
[@styled-system/prop-types](https://github.com/styled-system/styled-system/tree/master/packages/prop-types)
package.

<details>
 <summary>Solution</summary>

```js {"file": "../../components/primitives/Box/Box.js", "static": true}
```

</details>

## 4.4 Flex primitive

`Flex` is another useful primitive that allows us to control Flexbox-related
layout without writing CSS. Basically it’s `Box` with `display: flex` applied by
default.

### The result

```jsx
import Flex from '../../components/primitives/Flex';
import Box from '../../components/primitives/Box';

<Flex flexDirection="row">
  <Flex alignItems="center" p={3} flex={1} bg="purple.1">
    Row 1
  </Flex>
  <Box>
    <Box p={3} bg="purple.2">
      Row 2
    </Box>
    <Box p={3} bg="purple.3">
      Row 3
    </Box>
  </Box>
</Flex>;
```

### The task

1. Create the `Flex` component based on `Box` component and styled-system.

2. Set default value for `justify-content: center` and `flex-direction: row`
   using component’s `defaultProps`, so they can be overridden using component’s
   props.

3. Create a simple three rows layout using `Flex` and `Box` primitives.

<details>
 <summary>Solution</summary>

```js {"file": "../../components/primitives/Flex/Flex.js", "static": true}
```

</details>

**Note:** We could use [Rebass Grid](https://rebassjs.org/grid/) instead of
custom components: it’s based on styled-system and implements the same API but
it’s a good thing we keep our primitives abstracted from the implementation
details so we can always change implementation without refactoring application’s
code.

## 4.5 Stack primitive

We’ve just learned that [space](https://styled-system.com/api#space) function of
styled-system, that adds `margin` and `padding` props to any of our primitives,
is a powerful tool. Now we could add this function to all our primitives and
start controlling whitespace using `m` and `p` props on every component in our
app like this:

```jsx static
/* List of buttons */
<>
  <Button mr={1}>First button</Button>
  <Button mr={1}>Second button</Button>
  <Button>Third button</Button>
</>
```

Even though this works for some cases, sometimes it will make our code very
verbose and hard to maintain. Imagine you want to change the margin to a
different value or make this responsive!

What we actually want is _a component that controls layout and whitespace_
between our components:

```jsx static
/* List of buttons */
<Stack gridGap={1}>
  <Button>First button</Button>
  <Button>Second button</Button>
  <Button>Third button</Button>
</Stack>
```

This is often called _stacking layout_. There are many ways to implement it:
[lobotomized owl selector](https://css-tricks.com/lobotomized-owls/), negative
margins, CSS Grid, etc. Each has its own pros and cons. If you don’t need to
support old versions of Internet Explorer, we recommend
[CSS Grid based stacking](https://gridbyexample.com/examples/example28/).

We’re going to use [Stack Styled](https://sapegin.github.io/stack-styled/)
library that implements stacking layout using CSS Grid. It’s based on
styled-system and uses the same spacing values that our `Box` component.

### The result

```jsx noeditor
import SubscriptionForm from '../../../src/components/patterns/SubscriptionForm';

<SubscriptionForm
  id="sf1"
  email=""
  onSubmit={() => {}}
  onEmailChange={() => {}}
/>;
```

### The task

1. Create a `SubscriptionForm` component using the `Stack` component from
   stack-styled.

2. The layout should be responsive and the button should be placed below the
   input field on a narrow screen.

**Hint:** Use `grid-template-columns` CSS property for responsiveness, like
this: `gridTemplateColumns={['1fr', '1fr auto']}`.

<details>
 <summary>Solution</summary>

```js {"file": "solutions/4.5.js", "static": true}
```

</details>

## 4.6 Adding spacing to any primitive

Using `Box` and `Flex` components we can create really complex layouts only
using our primitives without writing HTML or CSS. And since the values for the
spacing are coming from our
[spacing scale](https://cdds.netlify.com/styleguide/#/Foundation?id=spacing) we
can be sure our layouts are consistent across the whole application.

### The result

```jsx noeditor
import Footer from '../../../src/components/patterns/Footer';
<Footer />;
```

### The task

1. Create a `Footer` component.

2. Use only primitives for layout, whitespace (`Box`, `Flex` and `Stack`) and
   text (`Text`, `Heading` and `Link`).

<details>
 <summary>Solution</summary>

```js {"file": "solutions/4.6.js", "static": true}
```

</details>
