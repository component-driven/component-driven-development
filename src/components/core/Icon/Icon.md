Sizes and variants:

```js
<Icon name="dog" alt="" />
<Icon name="dog" size="l" alt="" />
<Icon name="dog" variant="secondary" alt="" />
<Icon name="dog" variant="secondary" size="l" alt="" />
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

A link with an icon

```js
import Link from '../Link';
import { Flex, Box } from '@rebass/grid';
<Link href="/">
  <Flex>
    <Icon name="star" variant="secondary" alt="" />
    <Box ml={2} as="span">
      Good girls and boys
    </Box>
  </Flex>
</Link>;
```
