Flex is a [Box](#/Primitives?id=box) with the flexbox layout props.

See https://styled-system.com/api#flexbox for more information.

Using Flex we can create a simple columns layout:

```jsx harmony
import Box from '../Box';

<Flex>
  <Box flex="1 1 auto" p={3} bg="purple.1">
    Column 1
  </Box>
  <Box flex="1 1 auto" p={3} bg="purple.2">
    Column 2
  </Box>
  <Box flex="1 1 auto" p={3} bg="purple.3">
    Column 3
  </Box>
</Flex>;
```

or rows:

```jsx harmony
import Box from '../Box';

<Flex flexDirection="column">
  <Box p={3} bg="purple.1">
    Column 1
  </Box>
  <Box p={3} bg="purple.2">
    Column 2
  </Box>
  <Box p={3} bg="purple.3">
    Column 3
  </Box>
</Flex>;
```
