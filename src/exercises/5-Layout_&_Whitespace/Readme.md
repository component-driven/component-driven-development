To make components truly reusable they shouldn't define their margins otherwise it may become hard to compose such components. Imagine a `Button` would have `margin-right` pre-defined. This would make it tricky to create a `ButtonGroup` component there buttons are placed next to each other.

This means that the _white space between components should be controlled outside of components_. This can be achived in a few different ways:

1. Controlling spacing props directly via primitives with props
1. A first-class layout primitive that controls layout of its children

Both methods are valid and have their use cases.

## 5.1. Box primitive

Let's start with the simplest layout primitive — a `Box`. Box is a rectangular area that can contain other children.

### The task

1. Build the `Box` component that can control its padding, margin, width, and background color via styled-system.

### Result

Update some props in the example below to see how the `Box` reacts to the change.

```jsx
import Box from '../../components/core/Box';

<Box p={2} m={3} width={1 / 4} bg="primary">
  Box content
</Box>;
```

<details>
 <summary>Solution</summary>

```js static
import styled from 'styled-components';
import { space, color, width } from 'styled-system';

const Box = styled('div')(
  {
    boxSizing: 'border-box'
  },
  space,
  color,
  width
);

Box.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...width.propTypes
};

/** @component */
export default Box;
```

</details>

## 5.2 Flex primitive

`Flex` is another useful primitive that allows us to control flexbox-related layout without writing CSS.

### The task

1. Create `Flex` primitive based on `Box` component and styled-system.
1. Update `Box` component to accept `flex` and differnt alignment props.

### Result

```jsx
import Flex from '../../components/core/Flex';
import Box from '../../components/core/Box';

<Flex flexDirection="column">
  <Box p={3} bg="secondary">
    Row 1
  </Box>
  <Box p={3} bg="light">
    Row 2
  </Box>
  <Box p={3} bg="lighter">
    Row 3
  </Box>
</Flex>;
```

<details>
 <summary>Solution</summary>

```js static
import styled from 'styled-components';
import {
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
} from 'styled-system';
import Box from '../Box';

const Flex = styled(Box)(
  {
    display: 'flex'
  },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
);

Flex.propTypes = {
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes
};

/** @component */
export default Flex;
```

</details>

> We could use [Rebass Grid](https://grid.rebassjs.org/) directly since it is based on styled-system and implements the same API but it's a good thing we keep our primitives abstracted from the implementation details so we can always change implementation without refactoring application's code.

## 5.3 Adding spacing to any primitive

After we've built `Box` and `Flex` we now can create complex layouts using these two primitives.

### Task

1. Create Hero component

### Result

```jsx
// TODO
```

## 5.4 Stack primitive

We just learned how to use the [space](https://jxnblk.com/styled-system/api#space) function from styled-system, that adds `margin` and `padding` props to any of our primitives. We could just add this function to all our primitives and start controlling white space using `m` and `p` props on every instance in our app like this:

```jsx static
/* Button group */
<>
  <Button mr={1}>First button</Button>
  <Button mr={1}>Second button</Button>
  <Button>Third button</Button>
</>
```

Even thought this works, it will quickly make the code very verbose and hard to maintain. Imagine you want to change the margin to a different value or make this reposnsive!

What we actually want is _a component that controls layout and white space_ between our components.

```jsx static
/* Button group */
<Stack gap={1}>
  <Button>First button</Button>
  <Button>Second button</Button>
  <Button>Third button</Button>
</Stack>
```

### The task

1. Create `Stack` primitive based on `Box` component and styled-system.
1. Update `Box` component to accept `flex` and differnt alignment props.

### Result

```jsx noeditor
import Flex from '../../components/core/Flex';
import Box from '../../components/core/Box';

<Flex flexDirection="column">
  <Box p={3} bg="secondary">
    Row 1
  </Box>
  <Box p={3} bg="light">
    Row 2
  </Box>
  <Box p={3} bg="lighter">
    Row 3
  </Box>
</Flex>;
```

<details>
 <summary>Solution</summary>

```js static
import styled from 'styled-components';
import {
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
} from 'styled-system';
import Box from '../Box';

const Flex = styled(Box)(
  {
    display: 'flex'
  },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
);

Flex.propTypes = {
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes
};

/** @component */
export default Flex;
```

</details>

> [Rebass Grid](https://grid.rebassjs.org/) is based on styled-system and allows you to define margins and paddings and create responsive Flexbox layouts using React components, like the [Layout](https://github.com/rebassjs/grid#box) component:

**Note:** Have a look at the [default spacing scale](https://jxnblk.com/styled-system/api#space-1).
