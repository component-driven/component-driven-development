Secondary and primary buttons:

```jsx padded
<Button>Push me</Button>
<Button variant="primary">Push me</Button>
```

Disabled buttons:

```jsx padded
<Button disabled>Can’t touch this</Button>
<Button variant="primary" disabled>
  Can’t touch this
</Button>
```

Button as a link:

```jsx padded
<Button as="a" href="/">
  Click me
</Button>
<Button as="a" href="/" variant="primary">
  Click me
</Button>
```

Full width button:

```jsx padded
<>
  <Flex flexDirection="column" mb={4}>
    <Button>Loooongcat is long</Button>
  </Flex>
  <Flex flexDirection="column">
    <Button variant="primary">Loooongcat is long</Button>
  </Flex>
</>
```
