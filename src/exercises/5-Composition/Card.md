Card component is a component that renders an image, a body and a footer with a specific layout.

By using subcomponents `Card.Cover`, `Card.Body` and `Card.Footer` users can create different kinds of card for different use cases, because all subcomponents are optional and the card look good with any combination of them.

```jsx harmony
import Box from '../../components/core/Box';
import Heading from '../../components/core/Heading';
import Image from '../../components/core/Image';
import Text from '../../components/core/Text';
import Button from '../../components/core/Button';

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
