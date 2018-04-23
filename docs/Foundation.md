Colors, spacing, and typography are the building blocks of the design system and are often referred to as design tokens. Design tokens are named entities that store visual design attributes.

Those values are provided to the application via `ThemeProvider` and the `theme` object.

Every element of the design system should be in relation to those values in order to be consistent. So, instead of hard coded color you should always use `theme` prop.

```diff
- color: #8667a8;
+ color: ${props => props.theme.color.primary};
```

and instead of using CSS values for spacing you should rely on design system primitives:

```diff
- const BoxWithSpacing = styled.article`
-   margin: 16px;
- `;
+ const BoxWithSpacing = styled(Box).attrs({ is: 'article', m: 3 })`
+   // Your additional styles go here
+ `;
```
