## 2.1. Defining design tokens

UI Inventory is the process of splitting the existing UI into smaller chunks. Many people only do UI inventory until the component level but there is more to it. By analyzing the UI we can see even smaller patterns of colors, font styles, borders, etc. being used. We call those patterns _design tokens_.

> Design tokens are the single source of truth for project’s colors, whitespace, font styles and other design decisions.

We’ve prepared the basic structure for the design tokens file. Open the `theme.js` in the exercise directory (`src/exercises/2-Design_Tokens/theme.js`).

### The task

1. Add a few colors to the `theme.js` and see how they are updated in the styleguide.
1. Add a palette of grey colors to the `colors` object (_hint_: Use `Array` for that).
1. Change spacing scale to see how swatches react to this change. Continue with other values.
1. Update design tokens to fit our design ([main page](https://www.figma.com/file/cALZfCbmthI9VQz9MJR6JdPk/CDD-Workshop?node-id=1%3A2) and [checkout page](https://www.figma.com/file/cALZfCbmthI9VQz9MJR6JdPk/CDD-Workshop?node-id=1%3A40)).
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

## 2.2. Accessing design tokens from components

styled-components makes it convenient to use design tokens, thanks to [ThemeProvider](https://github.com/component-driven/component-driven-development/blob/master/src/ThemeProvider.js) and React Context. You can access them in your component like this:

```js static
const Heading = styled.h1`
  font-size: ${props => props.theme.fontSizes.xl};
`;
```

### The task

1. Replace all hardcoded values with design tokens.

<details>
 <summary>Solution</summary>

```js {"file": "final/Button.js", "static": true}
```

</details>
