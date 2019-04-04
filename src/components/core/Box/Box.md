Box is the simplest layout primitive that renders a `div` element

Box allows controlling its padding, margin, width, etc. with design tokens.

The following will render a `div` with `padding`, `margin`, `width`, and `backgroundColor` props set to values from our design system.

```jsx harmony
<Box p={2} m={3} width={1 / 4} bg="primary">
  Box content
</Box>
```
