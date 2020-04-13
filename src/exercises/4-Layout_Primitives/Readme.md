To be truly reusable, components shouldn’t define any whitespace around them, otherwise it may become hard to compose such components. Imagine a `Button` would have `margin-right` predefined. This would make it tricky to create a `ButtonGroup` component where buttons are placed next to each other.

This means that the _whitespace between components should be controlled outside of components_. This can be achieved in a few different ways:

1. adding spacing props directly to components;
2. a first-class layout primitive that controls layout of its children.

Both methods are valid and have their use cases.

In this exercise we’ll learn how to create primitive components more flexible by making whitespace around them customizable. We’ll also learn how to add whitespace separately. We’ll learn how to create first-class layout primitives that control layout of its children: `Box`, `Flex`, `Grid` and `Stack`.

## 4.1. Box primitive

We can define a new component with required whitespace and use it:

```jsx static
import styled from 'styled-components';

const H1 = styled.h1`
  margin-bottom: ${props => props.theme.space[4]};
`;

<H1>Heading with the margin bottom set</H1>;
```

That’s a lot of boilerplate just to add a margin below the component, and it's not really reusable: what if we want to adjust the margin or add margin on other sides of the component? What if, instead, we could make the whitespace part of the component’s API? This way we can add margins via props when using the component:

```jsx static
// This will add `margin-bottom: 0.5em` and `margin-top: 0.5em`
<Heading marginBottom="0.5em" mt="0.5em">
  The quick brown fox
</Heading>
```

Alternatively, we could have a special component called `Box` that would have props to define `margin`, `padding`, `width` etc.

Box is a rectangular area (basically a `<div>`) that can contain other components.

### The result

The result should look like this:

```jsx
<Box p={2} m={3} width={1 / 4} bg="primary">
  Box content
</Box>
```

Play around with props in the example below to see how the `Box` reacts to the change.

**Note:** See how [the value of the `width` prop is calculated](https://styled-system.com/api#layout).

### The task

1. Build the `Box` component that can control its padding, margins, width, and colors using props.
2. By default, it should render a `div` without any spacing applied.
3. Add `box-sizing: border-box` as the only default styles.
4. Add support for Flexbox and CSS Grid props like `alignItems` and `flexDirection`: we’ll need them for the next exercise.

**Hint:** use [styled-system functions](https://styled-system.com/api), like the `space` function we’ve used in the previous exercise, to create props.

**Hint:** check out [Build a Box](https://styled-system.com/guides/build-a-box/) article by the creator of styled-system.

**Bonus:** Add PropType using [@styled-system/prop-types](https://github.com/styled-system/styled-system/tree/master/packages/prop-types) package.

<details>
 <summary>Solution</summary>

```js {"file": "./final/Box.js", "static": true}
```

</details>

## 4.2 Flex primitive

`Flex` is another useful primitive that allows us to create Flexbox layouts without writing CSS. Basically it’s `Box` with `display: flex` applied by default.

### The result

The result should look like this:

```jsx
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
</Flex>
```

### The task

1. Create the `Flex` component based on `Box` component and styled-system.

2. Add `display: flex` as the only default styles.

<details>
 <summary>Solution</summary>

```js {"file": "./final/Flex.js", "static": true}
```

</details>

**Note:** We could use [Rebass Grid](https://rebassjs.org/grid/) instead of custom components: it’s based on styled-system and implements the same API but it’s a good thing we keep our primitives abstracted from the implementation details, so we can always change implementation without refactoring application’s code.

## 4.3 Grid primitive

`Grid` is similar to `Flex` and allows us to create CSS Grid layouts without writing CSS. Basically it’s `Box` with `display: grid` applied by default.

### The result

The result should look like this:

```jsx
<Grid
  gridGap={2}
  gridTemplateColumns="1fr 2fr 1fr"
  alignItems="center"
>
  <Box p={4} bg="grey.2">
    Grid Item
  </Box>
  <Box p={4} bg="grey.3">
    Grid Item
  </Box>
  <Box p={4} bg="grey.4">
    Grid Item
  </Box>
</Grid>
```

### The task

1. Create the `Grid` component based on `Box` component and styled-system.

2. Add `display: grid` as the only default styles.

<details>
 <summary>Solution</summary>

```js {"file": "./final/Grid.js", "static": true}
```

</details>

## 4.4 Stack primitive

`Stack` is the layout primitive to create _stacking layouts_ i.e. when children evenly distributed vertically. Think of it as a designer-friendly component that doesn't require understanding of CSS Grid Layout even though our implementation is based on `Grid`.

In order to create custom props that are coupled with our design system, styled-system’s offers [system](https://styled-system.com/api#system) function.

### The result

The result should look like this:

```jsx
<Stack gap={2}>
  <Box p={4} bg="grey.2">
    Stack Item
  </Box>
  <Box p={4} bg="grey.3">
    Stack Item
  </Box>
  <Box p={4} bg="grey.4">
    Stack Item
  </Box>
</Stack>
```

### The task

1. Create the `Stack` component based on `Grid` component and styled-system.
2. Add `gap` prop to apply the CSS `grid-gap` property based on our [spacing scale](http://localhost:6060/#/Foundation?id=section-spacing).

<details>
 <summary>Solution</summary>

```js {"file": "./final/Stack.js", "static": true}
```

</details>

**Note:** the Stack component is also available as an npm package, [stack-styled](https://stack-styled.js.org).
