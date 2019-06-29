Colors, spacing, and typography are the building blocks of the design system and are often referred to as design tokens. Design tokens are named entities that store visual design attributes.

Those values are accessible in the app via [ThemeProvider](https://github.com/component-driven/component-driven-development/blob/master/src/ThemeProvider.js) and the `theme` object. To ensure consistency, always use values from the `theme` object, instead of hardcoded values.

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

You can also use [themeGet](https://github.com/styled-system/styled-system/tree/master/packages/theme-get) helper from styled-system to access theme values:

```diff
import themeGet from '@styled-system/theme-get';
const Message = styled.p`
-   color: #8667a8;
-   font-family: Helvetica;
-   font-size: 13px;
+   color: ${themeGet('colors.primary')};
+   font-family: ${themeGet('fonts.base')};
+   font-size: ${themeGet('fontSizes.s')};
`;
```

_Prefer_ the [Text](/#/Primitives?id=text) and [Heading](/#/Primitives?id=heading) components to render any text inside the app:

```diff
- const Small = styled.p`
-   font-family: ${props => props.theme.fonts.base};
-   font-size: ${props => props.theme.fontSizes.s};
- `;
- <Small>Oh dear! Oh dear! I shall be late!</Small>
+ <Text variant="secondary">Oh dear! Oh dear! I shall be late!</Text>
```

Check out the [theme.js](https://github.com/component-driven/component-driven-development/blob/master/src/theme.js) file for all available design tokens.
