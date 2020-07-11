## 2.1. Defining design tokens

UI Inventory is the process of splitting the existing UI into smaller chunks. Many people only do UI inventory until the component level but there is more to it. By analyzing the UI we can see even smaller patterns of colors, font styles, borders, etc. being used. We call those patterns _design tokens_.

> Design tokens are the single source of truth for project’s colors, whitespace, font styles and other design decisions.

We’ve prepared the basic structure for the design tokens file. Open the `theme.js` in the exercise directory (`src/exercises/1-2-Design_Tokens/theme.js`).

### The task

1. Add a few colors to the `theme.js` and see how they are updated in the styleguide.
1. Add a palette of grey colors to the `colors` object (_hint_: Use `Array` for that).
1. Change spacing scale to see how swatches react to this change. Continue with other values.
1. Update color tokens to match the final [styleguide](https://cdds.netlify.com/styleguide/#/Foundation?id=colors).

> **Hint:** Use [ColorSnapper](https://colorsnapper.com) if you're on macOS to grab colors from the screen.

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

Theme values can be accessed everywhere in the app via [ThemeProvider](https://github.com/component-driven/component-driven-development/blob/master/src/ThemeProvider.js) and the `theme` object.

To ensure UI consistency, always use values from the `theme` object, instead of hardcoded values.

For example, render small text with the `primary` color:

```diff
const Message = styled.p`
-   color: #8667a8;
-   font-family: Helvetica;
-   font-size: 13px;
+   color: ${props => props.theme.colors.primary};
+   font-family: ${props => props.theme.fonts.body};
+   font-size: ${props => props.theme.fontSizes.sm};
`;
```

### The task

1. Replace all hardcoded values with design tokens.

<details>
 <summary>Solution</summary>

The `Button` component (`src/exercises/2-Design_Tokens/Button.js`):

```jsx {"file": "final/Button.js", "static": true}
```

The `LoginForm` component (`src/exercises/2-Design_Tokens/LoginForm.js`):

```jsx {"file": "final/LoginForm.js", "static": true}
```

</details>
