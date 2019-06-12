In this exercise we’ll learn basics of React Styleguidist.

## 2.1. What are design tokens?

Design tokens are the single source of truth for project’s colors, whitespace, font sizes and other design decisions.

We’ve prepared the basic structure for the design tokens file. Open the `theme.js` in the exercise directory (`src/exercises/2-Design_Tokens/theme.js`).

### The task

1. Add a few colors to the `theme.js` and see how the style guide going to render them.

2. Define appropriate names for colors (group exercise).

3. Check out [design tokens](https://cdds.netlify.com/styleguide/#/Foundation?id=colors) from the final style guide.

## Colors

```jsx noeditor
import { Colors } from '@component-driven/react-design-tokens';
import theme from './theme';

<Colors theme={theme} />;
```
