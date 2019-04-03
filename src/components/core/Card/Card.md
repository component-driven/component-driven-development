Card component is a component that renders image and body with a specific layout.

By using children components `Card.Image` and `Card.Body` users can change order of image and content inside card making it very flexible but still rigid enough since the layout is being managed inside the component.

```jsx harmony
import { Box } from '@rebass/grid';
import Heading from '../Heading';
import Text from '../Text';

<Box width={300}>
  <Card>
    <Card.Image src={`/images/tsiri.jpg`} alt="Alt text" />
    <Card.Body>
      <Heading size="m">Title of the card</Heading>
      <Text>Body of the card</Text>
    </Card.Body>
  </Card>
</Box>;
```

Not only the order, but also the amount of children is not limited. Here is an example with two bodies: one for the heading on top followed by an image and then by the body content.

```jsx harmony
import { Box } from '@rebass/grid';
import Heading from '../Heading';
import Text from '../Text';

<Box width={300}>
  <Card>
    <Card.Body>
      <Heading size="m">Title of the card</Heading>
    </Card.Body>
    <Card.Image src={`/images/tsiri.jpg`} alt="Alt text" />
    <Card.Body>
      <Text>
        Longer body of the card so it appears on multiple lines.
      </Text>
    </Card.Body>
  </Card>
</Box>;
```

For more complex example see [DogCard](#/Patterns?id=dogcard)
