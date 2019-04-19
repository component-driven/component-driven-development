In this exercise we’ll create reusable form components. We’ll create a button, an input field and a custom select. We’ll learn how to work with styled-components, how to do prop-based styling and how to access design tokens (values we’ve defined in the `theme.js` file in the previous exercise).

## 6.1. Extending styled components

Styled-components support [extending styles](https://www.styled-components.com/docs/basics#extending-styles). It’s something like inheritance: you can create a styled component, that’s based on another component, not necessarily styled (but it has to accpept `className` prop). Such component will keep all the styles and behavior or the original component, bu you’ll be able to add extra styles.

For example, a basic card may look like so:

```js static
import styled from 'styled-components';
import Box from '../../components/core/Box';

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
import Heading from '../../components/core/Heading';
import Hero from '../../components/patterns/Hero';
<Hero
  backgroundImage="url(https://source.unsplash.com/TBw3iQGdwbg/1000x600)"
  py={6}
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

**Bonus:** Make padding and background position customizable.

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
import Box from '../../components/core/Box';

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

Often we want to render different kinds of content and style them differently, like an image, a heading and a body text of a card.

For example, a more functional card may look like so:

```jsx static
import styled from 'styled-components';
import Box from '../../components/core/Box';
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
import Box from '../../components/core/Box';
import Stack from 'stack-styled';
import Heading from '../../core/Heading';
import Text from '../../core/Text';

const Feature = ({ children }) => <Stack gap={2}>{children}</Stack>;

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
- You can’t do complex layouts, where subcomponents should be placed in particular containers.

When these things are important, we can use the [macro-components](https://github.com/jxnblk/macro-components) library. For the consumer it works the same way as compound components, but the component developer has absolute control over order and layout of subcomponents.

For example, we want to place a button on the right side of a heading:

```jsx harmony
import Flex from '../../components/core/Flex';
import Box from '../../components/core/Box';
import Heading from '../../components/core/Heading';
import Button from '../../components/core/Button';
<Flex alignItems="baseline">
  <Heading size="l">The most interesting article</Heading>
  <Box ml="auto">
    <Button>Delete</Button>
  </Box>
</Flex>;
```

We can make this component using macro-components like so:

```jsx static
import Macro from 'macro-components';
import Flex from '../../components/core/Flex';
import Box from '../../components/core/Box';
import Heading from '../../components/core/Heading';
import Button from '../../components/core/Button';

const Title = ({ children }) => (
  <Heading size="l">{children}</Heading>
);
const Button = ({ children }) => <Box ml="auto">{children}</Box>;

const Header = Macro({ Title, Button })(({ Title, Button }) => (
  <Flex alignItems="baseline">
    {Title}
    {Button}
  </Flex>
));
```

And we can later use it like so:

```jsx static
<Header>
  <Header.Title>The most interesting article</Header.Title>
  <Header.Button>
    <Button>Delete</Button>
  </Header.Button>
</Header>
```

We can use this technique to implement a perfect card component.

### The result

```jsx harmony
import Box from '../../components/core/Box';
import Card from '../../components/core/Card';
import Text from '../../components/core/Text';
import Heading from '../../components/core/Heading';
import Image from '../../components/core/Image';
import Button from '../../components/core/Button';
<Box width={300}>
  <Card>
    <Card.Cover>
      <Image src="/images/tsiri.jpg" alt="Tsiri the saluki" />
    </Card.Cover>
    <Card.Body>
      <Heading size="m">Title of the card</Heading>
      <Text>Body of the card</Text>
    </Card.Body>
    <Card.Footer>
      <Button fullWidth>Rent Tsiri</Button>
    </Card.Footer>
  </Card>
</Box>;
```

### The task

Create a `Card` component, that has three subcomponents:

- `Cover` that renders and image (no extra styles or layout needed);
- `Body` that renders a card body;
- `Footer` that renders a card footer;

Cover is optional, and either a body or a footer. A cover should occupy full width of the card without any padding, a body and a footer should have padding around and between them: 16px.

<details>
 <summary>Solution</summary>

```jsx static
import React from 'react';
import Flex from '../Flex';
import Box from '../Box';
import Stack from '../Stack';
import {
  color,
  border,
  borderColor,
  borderRadius
} from 'styled-system';
import styled from 'styled-components';
import Macro from 'macro-components';

const CardBase = styled(Flex).attrs({
  bg: 'bg',
  border: 'thin',
  borderColor: 'light',
  borderRadius: 'base',
  flexDirection: 'column'
})`
  ${color};
  ${border};
  ${borderColor};
  ${borderRadius};
  list-style: none;
`;

const Cover = ({ children }) => children;
const Body = ({ children }) => <div>{children}</div>;
const Footer = ({ children }) => <Box mt="auto">{children}</Box>;

const Card = Macro({ Cover, Body, Footer })(
  ({ Cover, Body, Footer }, props) => (
    <CardBase {...props}>
      {Cover}
      <Stack height="100%" p={4} gap={4}>
        {Body}
        {Footer}
      </Stack>
    </CardBase>
  )
);

export default Card;
```

</details>
