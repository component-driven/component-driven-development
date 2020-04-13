Stack is a layout primitive that adds space around their children.

```jsx
<Stack gridGap={4}>
  <Button>Button</Button>
  <Button>Button</Button>
  <Button>Button</Button>
</Stack>
```

Since Stack is based on [Grid](/#/Primitives?id=grid), all of `Grid` props are available:

```jsx
<Stack gridGap={3} gridAutoFlow="column">
  <Button>Button</Button>
  <Button>Button</Button>
  <Button>Button</Button>
  <Button>Button</Button>
  <Button>Button</Button>
  <Button>Button</Button>
  <Button>Button</Button>
</Stack>
```
