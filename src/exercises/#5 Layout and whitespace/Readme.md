To make components reusable we need to make sure they don't define the whitespace around them, otherwise it may be hard to use them in some contexts.

For example, if a `Button` would define a margin on the right hand side, it would be very tricky to create a `ButtonGroup` component that requires zero margins between buttons.

This means that the _white space between components should be controlled outside of components_.

## 5.1. Box primitive

We just learned how to use the [space](https://jxnblk.com/styled-system/api#space) function from styled-system, that adds margins and paddings props to your component. We could just add this function to all our primitives and start controlling white space using `m` and `p` props.

Even thought it can work in the beginnning, it will quickly make the code very verbose and hard to maintain. What we actually want are primitives that would control layout and white space _between_ our components.

The simplest layout primitive is a `Box`

### The task

1. Build the `Box` component that can control its padding, margin, width, and background color via styled-system.

### Result

```jsx noeditor
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

`Flex` is another useful primitive that allows us to use flexbox layout without writing CSS.

### The task

1. Create `Flex` primitive based on `Box` component and styled-system.
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
