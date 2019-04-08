Card component is a component that renders an image, a body and a footer with a specific layout.

By using subcomponents `Card.Cover`, `Card.Body` and `Card.Footer` users can create different kinds of card for different use cases, because all subcomponents are optional and the card look good with any combination of them.

```jsx harmony
import Box from '../Box';
import Heading from '../Heading';
import Image from '../Image';
import Text from '../Text';
import Button from '../Button';

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
