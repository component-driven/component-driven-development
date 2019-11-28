In this exercise we’ll learn basics of React Styleguidist.

## 2.1. What are design tokens?

Design tokens are the single source of truth for project’s colors, whitespace, font styles and other design decisions.

We’ve prepared the basic structure for the design tokens file. Open the `theme.js` in the exercise directory (`src/exercises/2-Design_Tokens/theme.js`).

### The task

1. Add a few colors to the `theme.js` and see how the style guide going to render them.
1. Add a palette of grey colors to the `colors` object (_hint_: Use `Array` for that).
1. Change spacing scale to see how swatches react to this change. Continue with other values.
1. Update design tokens to fit our design (https://www.figma.com/file/cALZfCbmthI9VQz9MJR6JdPk/CDD-Workshop?node-id=1%3A2 & https://www.figma.com/file/cALZfCbmthI9VQz9MJR6JdPk/CDD-Workshop?node-id=1%3A40)
1. Check out [design tokens](https://cdds.netlify.com/styleguide/#/Foundation?id=colors) from the final style guide.

## Colors

```jsx noeditor
import { Colors } from '@component-driven/react-design-tokens';
import theme from './theme';

<Colors theme={theme} />;
```

## Spacing

```jsx noeditor
import { Spacing } from '@component-driven/react-design-tokens';
import theme from './theme';

<Spacing theme={theme} />;
```

## Typography

```jsx noeditor
import { Typography } from '@component-driven/react-design-tokens';
import theme from './theme';

<Typography theme={theme} />;
```
