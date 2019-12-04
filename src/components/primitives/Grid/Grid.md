Grid is a [Box](#/Primitives?id=box) with the CSS grid layout applied.

See https://styled-system.com/api#grid for more information.

Using Grid we can create a complex grid layouts:

```jsx harmony
import Box from '../Box';

<Grid gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))">
  <Box p={4} bg="grey.1">
    Grid Item
  </Box>
  <Box p={4} bg="grey.2">
    Grid Item
  </Box>
  <Box p={4} bg="grey.3">
    Grid Item
  </Box>
  <Box p={4} bg="grey.4">
    Grid Item
  </Box>
</Grid>;
```
