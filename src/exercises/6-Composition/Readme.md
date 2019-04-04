**TODO: Hero** **TODO: Card**

## 6.1. Extending styled components

Styled-components support [extending styles](https://www.styled-components.com/docs/basics#extending-styles). It’s something like inheritance: you can create a styled component, that’s based on another component, not necessarily styled (but it has to accpept `className` prop). Such component will keep all the styles and behavior or the original component, bu you’ll be able to add extra styles.

For example, a basic card may look like so:

```js static
import styled from 'styled-components';
import { Box } from '@rebass/grid';

const Card = styled(Box).attrs({
  p: 3
})`
  background: ghostwhite;
  border-radius: 3px;
`;
```

This `Card` component will accept all props of the `Box` component (for some we’ve defined default values: `p`), but also will have grayish background and rounded corners.

We can use this technique to implement a hero pattern. It’s a design pattern, where large text is displayed on top of a photo, and often used in site headers.

### The result

```jsx harmony
import Hero from '../../components/core/Hero';
import Heading from '../../components/core/Heading';
<Hero
  backgroundImage="url(https://source.unsplash.com/TBw3iQGdwbg/1000x600)"
  py="6"
>
  <Heading level={2}>
    The quick brown fox jumps over the lazy dog
  </Heading>
</Hero>;
```

### The task

Implement a `Hero` component, based on the `Box` component, we’ve created in the previous exercise.

- Accept any `background-image` CSS property value as background.
- Don’t make any assumptions, like font size, on the content, just render `children` as is.

**Hint:** Use [styled-system functions](https://styled-system.com/table#background) to create props for changing background.

<details>
 <summary>Solution</summary>

```js static
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  space,
  color,
  backgroundImage,
  backgroundPosition
} from 'styled-system';
import { Box } from '@rebass/grid';

/**
 * A hero
 */
const Hero = styled(Box)`
  ${color};
  ${backgroundImage};
  ${backgroundPosition};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-size: cover;
`;

Hero.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...backgroundImage.propTypes,
  ...backgroundPosition.propTypes,
  children: PropTypes.node
};

Hero.defaultProps = {
  px: 4,
  py: 3,
  bg: 'bg'
};

/** @component */
export default Hero;
```

</details>

## 6.2. Compound components

TODO: Props vs subscomponents

Often we want to render different kinds of content and style them differently, like an image, a heading and a body text of a card.

For example, a more functional card may look like so:

```jsx static
import styled from 'styled-components';
import { Box } from '@rebass/grid';
import {
  color,
  border,
  borderColor,
  borderRadius
} from 'styled-system';

const Card = styled(Box).attrs({
  bg: 'bg',
  border: 'thin',
  borderColor: 'light',
  borderRadius: 'base'
})`
  ${color};
  ${border};
  ${borderColor};
  ${borderRadius};
`;

Card.Image = props => <img {...props} />;
Card.Body = ({ children }) => <Box p={4}>{children}</Box>;
```

And then you’d use it like so:

```jsx static
<Card as={as}>
  <Card.Image src="tsiri.jpg" alt="Tsiri" />
  <Card.Body>
    <Heading size="m">Tsiri the saluki</Heading>
    <Text variant="secondary">The best dog in the world</Text>
  </Card.Body>
</Card>
```

We can use this technique to implement a feature component.

### The result

```jsx harmony
import Feature from '../../components/patterns/Feature';
import SvgFeatureDuck from '../../components/app/images/SvgFeatureDuck';
<Feature>
  <Feature.Icon>
    <SvgFeatureDuck width={80} />
  </Feature.Icon>
  <Feature.Heading>Rubberducking</Feature.Heading>
  <Feature.Body>
    Expain your problem to a dog, not to a rubber duck.
  </Feature.Body>
</Feature>;
```

### The task

Create a compound `Feature` component, that has three subcomponents:

- `Icon` that renders `children` centered with `secondary` color.
- `Heading` that renders a large centered heading.
- `Body` that renders centered text.

**Hint:** Use `Stack` component to create even spacing between subcomponents.

<details>
 <summary>Solution</summary>

```jsx static
import React from 'react';
import { Box } from '@rebass/grid';
import Stack from 'stack-styled';
import Heading from '../../core/Heading';
import Text from '../../core/Text';

const Feature = ({ as, children }) => (
  <Stack gap={2} as={as}>
    {children}
  </Stack>
);

Feature.Icon = ({ children }) => (
  <Box ml="auto" mr="auto" color="secondary">
    {children}
  </Box>
);

Feature.Heading = ({ children }) => (
  <Heading as="h3" size="l" align="center">
    {children}
  </Heading>
);

Feature.Body = ({ children }) => (
  <Text align="center">{children}</Text>
);

export default Feature;
```

</details>

## 6.3. Macro components

Compound components are easy to implement but have some drawbacks:

- The consumer can change the order of subcomponents (it can be a benefit depending on your use case).
- You can’t do complex layouts. For example, a button on the right side of a heading in a card.

TODO

We can use this technique to implement a perfect card component.

### The result

```jsx harmony
import { Box } from '@rebass/grid';
import Card from '../../components/core/Card';
import Text from '../../components/core/Text';
import Heading from '../../components/core/Heading';
<Box width={300}>
  <Card>
    <Card.Image src={`/images/tsiri.jpg`} alt="Alt text" />
    <Card.Body>
      <Heading size="m">Title of the card</Heading>
      <Text>Body of the card</Text>
    </Card.Body>
  </Card>
</Box>;
```

### The task

Create a `Card` component, that has three subcomponents:

- `Cover` that renders and image TODO
- `Body` that renders a body TODO
- `Footer` that renders a footer TODO

**Hint:** TODO

<details>
 <summary>Solution</summary>

```jsx static
```

</details>

---

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
