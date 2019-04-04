## What are design tokens?

Design tokens are the single source of truth for project’s colors, whitespace, font sizes and other design decisions.

We're prepared the basic structure for the design tokens definition. Open `theme.js` in the exercise directory

### The task

1. Add a few colors to the `theme.js` and see how the styleguide going to render them
1. Define appropriate names for colors (group exrecise)
1. Check out [design tokens](http://localhost:6060/#/Foundation?id=colors) from the final styleguide

## Colors

```jsx noeditor
import Colors from '../../styleguide/Colors';
import theme from './theme';

<Colors theme={theme} />;
```
