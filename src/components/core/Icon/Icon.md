Sizes and variants:

```js
<Icon name="dog" variant="primary" alt="" />
<Icon name="dog" variant="primary" size="l" alt="" />
<Icon name="dog" variant="secondary" alt="" />
<Icon name="dog" variant="secondary" size="l" alt="" />
<Icon name="dog" variant="currentColor" size="l" alt="" />
```

Icons:

```js
<Icon name="dog" size="l" alt="" />
<Icon name="github" size="l" alt="" />
<Icon name="pin" size="l" alt="" />
<Icon name="star" size="l" alt="" />
<Icon name="starHalf" size="l" alt="" />
<Icon name="starOutline" size="l" alt="" />
<Icon name="twitter" size="l" alt="" />
```

Accessible label:

```js
<Icon name="dog" alt="a good girl" />
```

A link with an icon:

```js
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

```js
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
