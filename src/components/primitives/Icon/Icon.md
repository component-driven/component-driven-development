Sizes and colors:

```js
<>
  <Icon name="dog" color="primary" alt="" />
  <Icon name="dog" color="primary" size="lg" alt="" />
  <Icon name="dog" color="secondary" alt="" />
  <Icon name="dog" color="secondary" size="lg" alt="" />
  <Icon name="dog" size="lg" alt="" />
</>
```

Icons:

```js
<>
  <Icon name="dog" size="lg" alt="" />
  <Icon name="github" size="lg" alt="" />
  <Icon name="pin" size="lg" alt="" />
  <Icon name="star" size="lg" alt="" />
  <Icon name="starHalf" size="lg" alt="" />
  <Icon name="starOutline" size="lg" alt="" />
  <Icon name="twitter" size="lg" alt="" />
</>
```

Accessible label:

```jsx harmony
<Icon name="dog" alt="a good girl" />
```

A link with an icon:

```jsx harmony
import Box from '../Box';
import Flex from '../Flex';
import Icon from '../Icon';
import Link from '../Link';
import Text from '../Text';
<Text>
  <Flex as={Link} href="/" display="inline-flex" alignItems="center">
    <Icon name="star" alt="" />
    <Box ml={2} as="span">
      Good girls and boys
    </Box>
  </Flex>
</Text>;
```

A button with an icon:

```jsx harmony
import Box from '../Box';
import Flex from '../Flex';
import Icon from '../Icon';
import Button from '../Button';
<Button>
  <Flex href="/" alignItems="center">
    <Icon name="star" alt="" />
    <Box ml={2} as="span">
      Good girls and boys
    </Box>
  </Flex>
</Button>;
```
