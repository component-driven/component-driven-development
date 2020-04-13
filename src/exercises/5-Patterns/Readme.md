## 5.1 Using layout and basic primitive to compose UI patterns

In the previous exercise we learned how to manage whitespace around our primitives. Now it's time to use what we learned and create an application specific component.

Using `Box` and `Flex` components we can create really complex layouts without writing custom CSS. And since the values for the spacing are coming from our [spacing scale](https://cdds.netlify.com/styleguide/#/Foundation?id=spacing) we can be sure our layouts are consistent across the whole application.

Let's create a LoginForm with the primitives we learned today.

### The result

```jsx noeditor
import Box from '../../components/primitives/Box';
import Grid from '../../components/primitives/Grid';
import Button from '../../components/primitives/Button';
import Link from '../../components/primitives/Link';
import Text from '../../components/primitives/Text';
import Input from '../../components/primitives/Input';
import Heading from '../../components/patterns/Heading';

<Grid as="form" gridGap={4}>
  <Heading mb={4}>Login</Heading>
  <Grid gridGap={[1, 4]} gridTemplateColumns={['1fr', '150px 1fr']}>
    <Text as="label" display="block">
      <Box mb={2}>Username</Box>
    </Text>
    <Input type="text" />
  </Grid>
  <Grid gridGap={[1, 4]} gridTemplateColumns={['1fr', '150px 1fr']}>
    <Text as="label" display="block">
      <Box mb={2}>Password</Box>
    </Text>
    <Input type="password" />
  </Grid>
  <Grid gridGap={[1, 4]} gridTemplateColumns={['1fr', '150px 1fr']}>
    <Grid gridColumn={[1, 2]} gridGap={3}>
      <Button variant="primary">Log in</Button>
      <Link href="#">Forgot your password?</Link>
    </Grid>
  </Grid>
</Grid>;
```

### The task

1. Create a `LoginForm` component.
2. Use only primitives for layout, whitespace (`Box`, `Flex`, `Grid`, and `Stack`) and text (`Text`, `Heading` and `Link`).

<details>
 <summary>Solution</summary>

```js {"file": "solutions/5.2.js", "static": true}
```

</details>
