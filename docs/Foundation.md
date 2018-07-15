Colors, spacing, and typography are the building blocks of the design system and are often referred to as design tokens. Design tokens are named entities that store visual design attributes.

Those values are accessible in the app via [ThemeProvider](https://github.com/sapegin/component-driven-development/blob/master/src/Provider.js) and the `theme` object. To ensure consistency, always use values from the `theme` object, instead of hardcoded values.

For example:

```diff
const Message = styled.p`
-   color: #8667a8;
-   font-family: Helvetica;
-   font-size: 13px;
+   color: ${props => props.theme.colors.primary};
+   font-family: ${props => props.theme.fonts.base};
+   font-size: ${props => props.theme.fontSizes.s};
`;
```

You can also use [themeGet](https://jxnblk.com/styled-system/api#themeget) helper from styled-system to access theme values:

```diff
import { themeGet } from 'styled-system'
const Message = styled.p`
-   color: #8667a8;
-   font-family: Helvetica;
-   font-size: 13px;
+   color: ${themeGet('colors.primary')};
+   font-family: ${themeGet('fonts.base')};
+   font-size: ${themeGet('fontSizes.s')};
`;
```

_Prefer_ the [Text](#text) and [Heading](#heading) components to render any text inside the app:

```diff
- const Small = styled.p`
-   font-family: ${props => props.theme.fonts.base};
-   font-size: ${props => props.theme.fontSizes.s};
- `;
- <Small>Oh dear! Oh dear! I shall be late!</Small>
+ <Text variant="secondary">Oh dear! Oh dear! I shall be late!</Text>
```

_Prefer_ [Grid Styled](http://jxnblk.com/grid-styled/) components for whitespace:

```diff
- const Panel = styled.article`
-   padding: 16px;
- `;
+ import { Box } from 'grid-styled';
+ const Panel = styled(Box).attrs({ is: 'article', p: 3 })`
+   // Your additional styles go here
+ `;
```

Check out the [theme.js](https://github.com/component-driven/component-driven-development/blob/master/src/theme.js) file for all available design tokens.
