To be truly reusable, components shouldn’t define any whitespace around them, otherwise it may become hard to compose such components. Imagine a `Button` would have `margin-right` predefined. This would make it tricky to create a `ButtonGroup` component there buttons are placed next to each other.

This means that the _whitespace between components should be controlled outside of components_. This can be achieved in a few different ways:

1. adding spacing props directly to components;
2. a first-class layout primitive that controls layout of its children.

Both methods are valid and have their use cases.

In this exercise we’ll learn how to work with styled-system and how to do make our primitive components more flexible by making whitespace around them customizable. We’ll also learn about adding a whitespace separately. We’ll learn how to create first-class layout primitives that control layout of its children: Box, Flex, Grid, Stack, etc.

## 4.1. Box primitive

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

Let’s start with the simplest layout primitive — a `Box`. Box is a rectangular area (basically `<div>`) that can contain other components.

### The result

Update some props in the example below to see how the `Box` reacts to the change.

```jsx
import Box from '../../components/primitives/Box';

<Box p={2} m={3} width={1 / 4} bg="primary">
  Box content
</Box>;
```

**Note:** See how [the value of the `width` prop is calculated](https://styled-system.com/api#layout).

### The task

1. Build the `Box` component that can control its padding, margins, width, and colors using props.

2. By default it should just render a `div` without any spacing applied.

3. Add `box-sizing: border-box` as the only default styles.

4. Add support for Flexbox and CSS Grid props like `alignItems` and `flexDirection`: we’ll need them for the next exercise.

**Hint:** use [styled-system functions](https://styled-system.com/api), like the `space` function we’ve used in the previous exercise, to create props.

**Hint:** check out [Build a Box](https://styled-system.com/guides/build-a-box/) article by creator of styled-system.

**Bonus:** Add PropType using [@styled-system/prop-types](https://github.com/styled-system/styled-system/tree/master/packages/prop-types) package.

<details>
 <summary>Solution</summary>

```js {"file": "../../components/primitives/Box/Box.js", "static": true}
```

</details>

## 4.2 Flex primitive

`Flex` is another useful primitive that allows us to control Flexbox-related layout without writing CSS. Basically it’s `Box` with `display: flex` applied by default.

### The result

```jsx
import Flex from '../../components/primitives/Flex';
import Box from '../../components/primitives/Box';

<Flex flexDirection="row">
  <Flex alignItems="center" p={3} flex={1} bg="grey.3">
    Row 1
  </Flex>
  <Box>
    <Box p={3} bg="grey.4">
      Row 2
    </Box>
    <Box p={3} bg="grey.5">
      Row 3
    </Box>
  </Box>
</Flex>;
```

### The task

1. Create the `Flex` component based on `Box` component and styled-system.

2. Set default value for `justify-content: center` and `flex-direction: row` using component’s `defaultProps`, so they can be overridden using component’s props.

3. Create a simple three rows layout using `Flex` and `Box` primitives.

<details>
 <summary>Solution</summary>

```js {"file": "../../components/primitives/Flex/Flex.js", "static": true}
```

</details>

**Note:** We could use [Rebass Grid](https://rebassjs.org/grid/) instead of custom components: it’s based on styled-system and implements the same API but it’s a good thing we keep our primitives abstracted from the implementation details so we can always change implementation without refactoring application’s code.
