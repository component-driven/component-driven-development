Secondary and primary buttons:

```js padded
<Button>Push me</Button>
<Button variant="primary">Push me</Button>
```

Disabled buttons:

```js padded
<Button disabled>Can’t touch this</Button>
<Button variant="primary" disabled>
  Can’t touch this
</Button>
```

Button as a link:

```js padded
<Button as="a" href="/">
  Click me
</Button>
<Button as="a" href="/" variant="primary">
  Click me
</Button>
```

Full width button:

```js padded
import Flex from '../Flex';
<>
  <Flex flexDirection="column" mb={4}>
    <Button>Loooongcat is long</Button>
  </Flex>
  <Flex flexDirection="column">
    <Button variant="primary">Loooongcat is long</Button>
  </Flex>
</>;
```
