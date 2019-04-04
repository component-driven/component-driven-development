**TODO: Hero** **TODO: Card**

You can add extra styles using styled-components:

```js static
import styled from 'styled-components';
import { Box } from '@rebass/grid';

const Card = styled(Box).attrs({
  as: 'section',
  p: 3,
  mb: 5
})`
  background: ghostwhite;
  border-radius: 3px;
`;
```

## The result

The result should look like this:

```jsx noeditor
import { Flex, Box } from '@rebass/grid';
import Button from '../../components/core/Button';
import Input from '../../components/core/Input';
<Flex>
  <Box flex={1}>
    <Input
      type="email"
      value=""
      required
      placeholder="Email"
      aria-label="Email"
      fullWidth
    />
  </Box>
  <Box pl={3}>
    <Button variant="primary" type="submit">
      Subscribe
    </Button>
  </Box>
</Flex>;
```

## The task

Implement a basic subscription form:

- An email text field, that occupies all available horizontal space.
- A submit button.
- A 8 pixel gap between the field and the button.

**Hint:** Use `flex-grow` on the text field container to make it occupy all available space (`<Box flex={1}>`).

<details>
 <summary>Solution</summary>

```js static
import React from 'react';
import { Flex, Box } from '@rebass/grid';
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
          fullWidth
        />
      </Box>
      <Box pl={3}>
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

## 5.2 Making the subscription form responsive

There's one issue with our form: on small screens the input field is too small to type anything. Let’s make our form responsive: wrap the button to the next line on narrow screens.

All Rebass Grid props are [responsive](https://github.com/rebassjs/grid#responsive-styles), meaning that they accept different values for different browser window widths, if you pass an array:

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

## The result

The result should look like this (change the browser window width to see the effect):

```jsx noeditor
import { Flex, Box } from '@rebass/grid';
import Button from '../../components/core/Button';
import Input from '../../components/core/Input';
<Flex flexWrap="wrap">
  <Box flex={1}>
    <Input
      type="email"
      value=""
      required
      placeholder="Email"
      aria-label="Email"
      fullWidth
    />
  </Box>
  <Box pl={[0, 3]} pt={[3, 0]} width={[1, 'auto']}>
    <Button variant="primary" type="submit">
      Subscribe
    </Button>
  </Box>
</Flex>;
```

## The task

Update the code from the previous exercise to make it responsive: render the input and the button on separate rows on narrow screens.

**Bonus:** Make the button full width on narrow screens.

**Hint:** Use `flexWrap="wrap"` on the container to let Flexbox put items on multiple rows.

<details>
 <summary>Solution</summary>

```js static
import React from 'react';
import { Flex, Box } from '@rebass/grid';
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
          fullWidth
        />
      </Box>
      <Box pl={[0, 3]} pt={[3, 0]} width={[1, 'auto']}>
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

## 5.3 Simplifying whitespace management

There are several solutions to the previous task, but the most obvious ones require switching a horizontal padding or margin to a vertical on narrow screens. There are better ways to implement a gap between elements.

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

## The result

The result should look like this:

```jsx noeditor
import { Flex, Box } from '@rebass/grid';
import Button from '../../components/core/Button';
import Input from '../../components/core/Input';
<Flex m={-2} flexWrap="wrap">
  <Box p={2} flex={1}>
    <Input
      type="email"
      value=""
      required
      placeholder="Email"
      aria-label="Email"
      fullWidth
    />
  </Box>
  <Box p={2} width={[1, 'auto']}>
    <Button variant="primary" type="submit">
      Subscribe
    </Button>
  </Box>
</Flex>;
```

## The task

Update the code from the previous exercise using the negative margin technique. There should be no visible changes.

**Hint:** Each item should have a half of the desired gap around it. So, instead of 8 pixel left padding on the button, we need 4 pixel padding around the button and the input. And a negative margin with the same value around the container.

<details>
 <summary>Solution</summary>

```js static
import React from 'react';
import { Flex, Box } from '@rebass/grid';
import Button from '../../components/core/Button';
import Input from '../../components/core/Input';

const SubscriptionForm = () => (
  <form>
    <Flex m={-2} flexWrap="wrap">
      <Box p={2} flex={1}>
        <Input
          type="email"
          value=""
          required
          placeholder="Email"
          aria-label="Email"
          fullWidth
        />
      </Box>
      <Box p={2} width={[1, 'auto']}>
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

## 5.4 Introducing Stack Styled

CSS Grid has a thing called _gap_ (`grid-gap` property), which is exactly what we need here: whitespace between items. No need to use negative margins:

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

[Stack Styled](https://sapegin.github.io/stack-styled/) has a `Stack` component similar to [Flex](https://github.com/rebassjs/grid#flex) component from Rebass Grid, but with CSS Grip props. It’s also based on styled-system, so the API is similar:

```jsx static
import Stack from 'stack-styled';

<Stack as="section" gap={5}>
  <Button>Hello React!</Button>
  <Button>Hello Stack Styled!</Button>
</Stack>;
```

## The result

The result should look like this:

```jsx noeditor
import Stack from 'stack-styled';
import Button from '../../components/core/Button';
import Input from '../../components/core/Input';
<Stack gap={3} gridTemplateColumns={['1fr', '1fr auto']}>
  <Input
    type="email"
    value=""
    required
    placeholder="Email"
    aria-label="Email"
    fullWidth
  />
  <Button variant="primary" type="submit">
    Subscribe
  </Button>
</Stack>;
```

## The task

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
    <Stack gap={3} gridTemplateColumns={['1fr', '1fr auto']}>
      <Input
        type="email"
        value=""
        required
        placeholder="Email"
        aria-label="Email"
        fullWidth
      />
      <Button variant="primary" type="submit">
        Subscribe
      </Button>
    </Stack>
  </form>
);

export default SubscriptionForm;
```

</details>
