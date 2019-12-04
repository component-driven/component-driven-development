Card component is a component that renders an image, a body and a footer with a specific layout.

By using subcomponents `Card.Cover`, `Card.Body` and `Card.Footer` users can create different kinds of card for different use cases, because all subcomponents are optional and the card look good with any combination of them.

```jsx harmony
import Box from '../../components/primitives/Box';
import Heading from '../../components/primitives/Heading';
import Image from '../../components/primitives/Image';
import Text from '../../components/primitives/Text';
import Button from '../../components/primitives/Button';

<Box width={300}>
  <Card>
    <Card.Cover>
      <Image src="/images/tsiri.jpg" alt="Tsiri the saluki" />
    </Card.Cover>
    <Card.Body>
      <Heading size="md">Title of the card</Heading>
      <Text>Body of the card</Text>
    </Card.Body>
    <Card.Footer>
      <Button fullWidth>Rent Tsiri</Button>
    </Card.Footer>
  </Card>
</Box>;
```
