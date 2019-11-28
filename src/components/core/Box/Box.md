Box is the simplest _layout primitive_. By default it renders a `div` element but you can specify the HTML tag using `as` prop.

Box allows controlling its whitespace, layout, colors, etc. using design tokens.

Following example should render a `div` that has `width: 25%`, `padding`, `margin`, and `background-color` values set.

```jsx harmony
<Box p={4} m={3} width={1 / 4} bg="muted">
  Box content
</Box>
```

_Feel free to edit the example_
