To make components truly reusable they shouldn't define their margins otherwise it may become hard to compose such components. Imagine a `Button` would have `margin-right` predefined. This would make it tricky to create a `ButtonGroup` component there buttons are placed next to each other.

This means that the _whitespace between components should be controlled outside of components_. This can be achieved in a few different ways:

1. Controlling spacing props directly via primitives with props
2. A first-class layout primitive that controls layout of its children

Both methods are valid and have their use cases.

## 5.1. Box primitive

Let's start with the simplest layout primitive — a `Box`. Box is a rectangular area that can contain other children.

### Result

Update some props in the example below to see how the `Box` reacts to the change.

```jsx
import Box from '../../components/core/Box';

<Box p={2} m={3} width={1 / 4} bg="primary">
  Box content
</Box>;
```

### The task

1. Build the `Box` component that can control its padding, margin, width, and background color via styled-system.
2. By default it should just render a `div` without any spacing applied.

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

### The task

1. Create `Flex` primitive based on `Box` component and styled-system.
2. Update `Box` component to accept `flex` and different alignment props.
3. Create a simple three rows layout using `Flex` and `Box` primitives.

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

We already used similar technique in the [Typography](http://localhost:6061/#/Typography) exercises. Adding `Box` and `Flex` to the mix we now can create really complex layouts only using our primitives without writing HTML or CSS. And since the values for the spacing are coming from our [spacing scale](http://localhost:6060/#/Foundation?id=spacing) we can be sure our layouts are consistent across the whole application!

### Result

```jsx noeditor
import Footer from '../../../src/components/patterns/Footer';
<Footer />;
```

### Task

1. Create the `Footer` component using only primitives to adjust the layout

## 5.4 Stack primitive

We just learned that [space](https://styled-system.com/api#space) function of styled-system, that adds `margin` and `padding` props to any of our primitives, is a powerful tool. Now we could just add this function to all our primitives and start controlling whitespace using `m` and `p` props on every instance in our app like this:

```jsx static
/* List of buttons */
<>
  <Button mr={1}>First button</Button>
  <Button mr={1}>Second button</Button>
  <Button>Third button</Button>
</>
```

Even thought this works for some cases, sometimes it will make our code very verbose and hard to maintain. Imagine you want to change the margin to a different value or make this responsive!

What we actually want is _a component that controls layout and whitespace_ between our components.

```jsx static
/* List of buttons */
<Stack gap={1}>
  <Button>First button</Button>
  <Button>Second button</Button>
  <Button>Third button</Button>
</Stack>
```

### Result

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

1. Create `SubscriptionForm` component using the `Stack` component we’ve just created.
2. Make sure that the layout is responsive and the button is placed below the input field on a narrow screen.

<details>
 <summary>Solution</summary>

```js static
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import styled from 'styled-components';
import Stack from '../../../src/components/core/Stack';
import Box from '../../../src/components/core/Box';
import Button from '../../../src/components/core/Button';
import Input from '../../../src/components/core/Input';

const Form = styled.form`
  width: 100%;
`;

const SubscriptionForm = ({
  id,
  onSubmit,
  onEmailChange,
  email,
  loading,
  success,
  error
}) => (
  <Form onSubmit={onSubmit}>
    <Stack gap={3} mb={2} flexDirection="row">
      <Box flex={1}>
        <Input
          type="email"
          value={email}
          required
          placeholder="Email"
          aria-label="Email"
          aria-invalid={error && 'true'}
          aria-describedby={`${id}-info`}
          disabled={loading}
          onChange={onEmailChange}
        />
      </Box>
      <Box width={[1, 'auto']}>
        <Button variant="primary" type="submit" disabled={loading}>
          Subscribe
        </Button>
      </Box>
    </Stack>
  </Form>
);

export default SubscriptionForm;
```

</details>
