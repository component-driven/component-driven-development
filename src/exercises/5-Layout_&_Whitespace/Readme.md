To be truly reusable, components shouldn't define any whitespace around them, otherwise it may become hard to compose such components. Imagine a `Button` would have `margin-right` predefined. This would make it tricky to create a `ButtonGroup` component there buttons are placed next to each other.

This means that the _whitespace between components should be controlled outside of components_. This can be achieved in a few different ways:

1. adding spacing props directly to components;
2. a first-class layout primitive that controls layout of its children.

Both methods are valid and have their use cases.

## 5.1. Box primitive

Let’s start with the simplest layout primitive — a `Box`. Box is a rectangular area (basically `<div>`) that can contain other components.

### The result

Update some props in the example below to see how the `Box` reacts to the change.

```jsx
import Box from '../../components/core/Box';

<Box p={2} m={3} width={1 / 4} bg="primary">
  Box content
</Box>;
```

### The task

1. Build the `Box` component that can control its padding, margins, width, and background color using props.

2. By default it should just render a `div` without any spacing applied.

**Hint:** use [styled-system functions](https://styled-system.com/api), like the `space` function we’ve used in the previous exercise, to create props.

**Hint:** check out [Build a Box](https://styled-system.com/guides/build-a-box/) article by creator of styled-system.

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

`Flex` is another useful primitive that allows us to control Flexbox-related layout without writing CSS.

### The result

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

2. Update `Box` component to accept `flex` and different alignment props, like `alignSelf` and `order`.

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

> We could use [Rebass Grid](https://grid.rebassjs.org/) directly since it is based on styled-system and implements the same API but it’s a good thing we keep our primitives abstracted from the implementation details so we can always change implementation without refactoring application’s code.

## 5.3 Stack primitive

We’ve just learned that [space](https://styled-system.com/api#space) function of styled-system, that adds `margin` and `padding` props to any of our primitives, is a powerful tool. Now we could add this function to all our primitives and start controlling whitespace using `m` and `p` props on every component in our app like this:

```jsx static
/* List of buttons */
<>
  <Button mr={1}>First button</Button>
  <Button mr={1}>Second button</Button>
  <Button>Third button</Button>
</>
```

Even though this works for some cases, sometimes it will make our code very verbose and hard to maintain. Imagine you want to change the margin to a different value or make this responsive!

What we actually want is _a component that controls layout and whitespace_ between our components:

```jsx static
/* List of buttons */
<Stack gap={1}>
  <Button>First button</Button>
  <Button>Second button</Button>
  <Button>Third button</Button>
</Stack>
```

This is often called _stacking layout_. There are many ways to implement it: [lobotomized owl selector](https://css-tricks.com/lobotomized-owls/), negative margins, CSS Grid, etc. Each has its own pros and cons. If you don’t need to support old versions of Internet Explorer, we recommend [CSS Grid based stacking](https://gridbyexample.com/examples/example28/).

We’re going to use [stack-styled](https://sapegin.github.io/stack-styled/) library that implements stacking layout using CSS Grid. It’s based on styled-system and uses the same spacing values that our `Box` component.

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

1. Create a `SubscriptionForm` component using the `Stack` component from stack-styled.

2. The layout should be responsive and the button should be placed below the input field on a narrow screen.

**Hint:** Use `grid-template-columns` CSS property for responsiveness, like this: `gridTemplateColumns={['1fr', '1fr auto']}`.

<details>
 <summary>Solution</summary>

```js static
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import Stack from 'stack-styled';
import Box from '../../../src/components/core/Box';
import Button from '../../../src/components/core/Button';
import Input from '../../../src/components/core/Input';

const SubscriptionForm = ({
  id,
  onSubmit,
  onEmailChange,
  email,
  loading,
  success,
  error
}) => (
  <Stack
    gap={3}
    mb={2}
    gridTemplateColumns={['1fr', '1fr auto']}
    as="form"
    onSubmit={onSubmit}
  >
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
    <Button variant="primary" type="submit" disabled={loading}>
      Subscribe
    </Button>
  </Stack>
);

export default SubscriptionForm;
```

</details>

## 5.4 Adding spacing to any primitive

We’ve already used a similar technique in the [Typography](http://localhost:6061/#/Typography) exercises. Adding `Box` and `Flex` to the mix we now can create really complex layouts only using our primitives without writing HTML or CSS. And since the values for the spacing are coming from our [spacing scale](https://component-driven.github.io/component-driven-development/styleguide/#/Foundation?id=spacing) we can be sure our layouts are consistent across the whole application!

### The result

```jsx noeditor
import Footer from '../../../src/components/patterns/Footer';
<Footer />;
```

### The task

1. Create a `Footer` component.

2. Use only primitives for layout, whitespace (`Box`, `Flex` and `Stack`) and text (`Text`, `Heading` and `Link`).

<details>
 <summary>Solution</summary>

```js static
import React from 'react';
import Box from '../../../src/components/core/Box';
import Flex from '../../../src/components/core/Flex';
import Heading from '../../../src/components/core/Heading';
import Link from '../../../src/components/core/Link';
import Text from '../../../src/components/core/Text';
import { Inverted } from '../../../src/components/../ThemeProvider';
import SubscriptionForm from '../../../src/components/app/SubscriptionFormContainer';
import SvgDogPees from '../../../src/components/app/images/SvgDogPees';

const Footer = () => {
  return (
    <Inverted>
      <Flex
        px={5}
        py={4}
        flexDirection="column"
        bg="bg"
        color="secondary"
      >
        <Box mx="auto" mb={5}>
          <SvgDogPees width="100" />
        </Box>
        <Box mb={5} mx="auto" width={[1, 2 / 3, 1 / 2]}>
          <Heading size="l" as="h2" mb={4} align="center">
            Subscribe to our newsletter!
          </Heading>
          <SubscriptionForm />
        </Box>
        <Text variant="tertiary" align="center">
          © {new Date().getFullYear()}{' '}
          <Link href="https://okonet.ru/" shy>
            Andrey Okonetchnikov
          </Link>{' '}
          and{' '}
          <Link href="https://sapegin.me/" shy>
            Artem Sapegin
          </Link>
        </Text>
      </Flex>
    </Inverted>
  );
};

export default Footer;
```

</details>
