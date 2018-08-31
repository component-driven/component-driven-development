## Layout and whitespace management

### Getting started

Run Styleguidist: `npm run exercise 5`. Use files in the `src/exercises/exercise05` folder.

### 5.1. Introducing Grid Styled

Ideally components shouldn’t have any predefined whitespace around them, otherwise it may be hard to use them in some contexts.

We have already used the `space` function from styled-system, that adds margins and paddings props to your component. [Grid Styled](http://jxnblk.com/grid-styled/) is based on styled-system and allows you to define margins and paddings and create responsive Flexbox layouts using React components, like the [Box](https://jxnblk.com/grid-styled/Box) component:

```js static
import { Box } from 'grid-styled';

<Box is="section" p={2} mb={4}>
  <Button>Hello React!</Button>
</Box>;
```

This code will render a `<section>` element with padding of 8 pixels and bottom margin of 32 pixels.

You can add extra styles using styled-components:

```js static
import styled from 'styled-components';
import { Box } from 'grid-styled';

const Card = styled(Box).attrs({
  is: 'section',
  p: 2,
  mb: 4
})`
  background: ghostwhite;
  border-radius: 3px;
`;
```

Grid Styled has another component — [Flex](http://jxnblk.com/grid-styled/Flex), that can do everything `Box` can do, but also has Flexbox props, like `alignItems` or `flexWrap`:

```jsx static
import { Box, Flex } from 'grid-styled'

<Flex justifyContent="space-between">
  <Box width={1/4}>
    Quarter width
  </Box>
  <Box width={1/4}>
    Quarter width
  </Box>
</Flex>
```

#### The result

The result should look like this:

```jsx noeditor
const { Flex, Box } = require('grid-styled');
const Button = require('../../components/core/Button').default;
const Input = require('../../components/core/Input').default;
<Flex>
  <Box flex={1}>
    <Input
      type="email"
      value=""
      required
      placeholder="Email"
      aria-label="Email"
    />
  </Box>
  <Box pl={2}>
    <Button variant="primary" type="submit">
      Subscribe
    </Button>
  </Box>
</Flex>;
```

#### The task

Implement a basic subscription form:

- An email text field, that occupies all available horizontal space.
- A submit button.
- A 8 pixel gap between the field and the button.

**Hint:** Use `flex-grow` on the text field container to make it occupy all available space (`<Box flex={1}>`).

<details>
 <summary>Solution</summary>

```js static
import React from 'react';
import { Flex, Box } from 'grid-styled';
import Button from '../../components/core/Button';
import Input from '../../components/core/Input';

const SubscriptionForm = () => (
  <form>
    <Flex>
      <Box flex={1}>
        <Input
          type="email"
          value=""
          required
          placeholder="Email"
          aria-label="Email"
        />
      </Box>
      <Box pl={2}>
        <Button type="submit" variant="primary">
          Subscribe
        </Button>
      </Box>
    </Flex>
  </form>
);

export default SubscriptionForm;
```

</details>

### 5.2 Making the subscription form responsive

There's one issue with our form: on small screens the input field is too small to type anything. Let’s make our form responsive: wrap the button to the next line on narrow screens.

All Grid Styled props are [responsive](https://jxnblk.com/grid-styled/responsive), meaning that they accept different values for different browser window widths, if you pass an array:

```jsx static
<Box
  width={[
    1, // 100% below the smallest breakpoint
    1 / 2, // 50% from the next breakpoint and up
    1 / 4 // 25% from the next breakpoint and up
  ]}
/>
```

**Note:** Have a look at the [default breakpoints](https://jxnblk.com/styled-system/api#breakpoints).

### The result

The result should look like this (change the browser window width to see the effect):

```jsx noeditor
const { Flex, Box } = require('grid-styled');
const Button = require('../../components/core/Button').default;
const Input = require('../../components/core/Input').default;
<Flex flexWrap="wrap">
  <Box flex={1}>
    <Input
      type="email"
      value=""
      required
      placeholder="Email"
      aria-label="Email"
    />
  </Box>
  <Box pl={[0, 2]} pt={[2, 0]} width={[1, 'auto']}>
    <Button variant="primary" type="submit">
      Subscribe
    </Button>
  </Box>
</Flex>;
```

#### The task

Update the code from the previous exercise to make it responsive: render the input and the button on separate rows on narrow screens.

**Bonus:** Make the button full width on narrow screens.

**Hint:** Use `flexWrap="wrap"` on the container to let Flexbox put items on multiple rows.

<details>
 <summary>Solution</summary>

```js static
import React from 'react';
import { Flex, Box } from 'grid-styled';
import Button from '../../components/core/Button';
import Input from '../../components/core/Input';

const SubscriptionForm = () => (
  <form>
    <Flex flexWrap="wrap">
      <Box flex={1}>
        <Input
          type="email"
          value=""
          required
          placeholder="Email"
          aria-label="Email"
        />
      </Box>
      <Box pl={[0, 2]} pt={[2, 0]} width={[1, 'auto']}>
        <Button type="submit" variant="primary">
          Subscribe
        </Button>
      </Box>
    </Flex>
  </form>
);

export default SubscriptionForm;
```

</details>

### 5.3 Simplifying whitespace management

There are several solutions to the previous task, but the most obvious ones require switching a horizontal padding or margin to a vertical on narrow screens. There are better ways to keep the gap between elements.

One solution is to use [a negative margin](https://medium.com/@justintulk/why-css-grid-frameworks-have-negative-margins-37d67cf6acc8) on the container to keep grid items close to the container edges:

```html static
<style>
.container {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}
.item {
  padding: 8px;
}
</style>
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

### The result

The result should look like this:

```jsx noeditor
const { Flex, Box } = require('grid-styled');
const Button = require('../../components/core/Button').default;
const Input = require('../../components/core/Input').default;
<Flex m={-1} flexWrap="wrap">
  <Box p={1} flex={1}>
    <Input
      type="email"
      value=""
      required
      placeholder="Email"
      aria-label="Email"
    />
  </Box>
  <Box p={1} width={[1, 'auto']}>
    <Button variant="primary" type="submit">
      Subscribe
    </Button>
  </Box>
</Flex>;
```

#### The task

Update the code from the previous exercise using the negative margin technique. There should be no visible changes.

**Hint:** Each item should have a half of the desired gap around it. So, instead of 8 pixel left padding on the button, we need 4 pixel padding around the button and the input. And a negative margin with the same value around the container.

<details>
 <summary>Solution</summary>

```js static
import React from 'react';
import { Flex, Box } from 'grid-styled';
import Button from '../../components/core/Button';
import Input from '../../components/core/Input';

const SubscriptionForm = () => (
  <form>
    <Flex m={-1} flexWrap="wrap">
      <Box p={1} flex={1}>
        <Input
          type="email"
          value=""
          required
          placeholder="Email"
          aria-label="Email"
        />
      </Box>
      <Box p={1} width={[1, 'auto']}>
        <Button type="submit" variant="primary">
          Subscribe
        </Button>
      </Box>
    </Flex>
  </form>
);

export default SubscriptionForm;
```

</details>

### 5.4 Introducing Stack Styled

CSS Grid has a thing called _gap_ (`grid-gap` attribute), which is exactly what we need here: whitespace between items. No need to use negative margins:

```html static
<style>
.container {
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr 1fr;
}
</style>
<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

[Stack Styled](https://sapegin.github.io/stack-styled/) has a `Stack` component similar to [Flex](http://jxnblk.com/grid-styled/Flex) component from Grid Styled, but with CSS Grip props. It’s also based on styled-system, so the API is similar:

```jsx static
import Stack from 'stack-styled'

<Stack is="section" gridGap={4}>
  <Button>Hello React!</Button>
  <Button>Hello Stack Styled!</Button>
</Stack>;
```

### The result

The result should look like this:

```jsx noeditor
const Stack = require('stack-styled').default;
const Button = require('../../components/core/Button').default;
const Input = require('../../components/core/Input').default;
<Stack gap={2} gridTemplateColumns={['1fr', '1fr auto']}>
  <Input
    type="email"
    value=""
    required
    placeholder="Email"
    aria-label="Email"
  />
  <Button variant="primary" type="submit">
    Subscribe
  </Button>
</Stack>;
```

#### The task

Update the code from the previous exercise using the [Stack](https://sapegin.github.io/stack-styled/#stack) component from Stack Styled.

**Hint:** Use responsive `gridTemplateColumns` prop to change the number of columns and their sizes.

<details>
 <summary>Solution</summary>

```js static
import React from 'react';
import Stack from 'stack-styled';
import Button from '../../components/core/Button';
import Input from '../../components/core/Input';

const SubscriptionForm = () => (
  <form>
    <Stack gap={2} gridTemplateColumns={['1fr', '1fr auto']}>
      <Input
        type="email"
        value=""
        required
        placeholder="Email"
        aria-label="Email"
      />
      <Button variant="primary" type="submit">
        Subscribe
      </Button>
    </Stack>;
  </form>
);

export default SubscriptionForm;
```

</details>
