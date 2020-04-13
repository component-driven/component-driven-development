Card component is a component that renders an image, a body and a footer with a specific layout.

By using subcomponents `Card.Cover`, `Card.Body` and `Card.Footer` users can create different kinds of card for different use cases, because all subcomponents are optional and the card look good with any combination of them.

```jsx
import Box from '../../components/primitives/Box';
import Text from '../../components/primitives/Text';
import Button from '../../components/primitives/Button';
import Heading from '../../components/patterns/Heading';

<Box width={300}>
  <Card>
    <Card.Body>
      <Heading>Title of the card</Heading>
      <Text>Body of the card</Text>
    </Card.Body>
    <Card.Footer>
      <Button>Rent Tsiri</Button>
    </Card.Footer>
  </Card>
</Box>;
```
