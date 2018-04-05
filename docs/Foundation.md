Colors, spacing, and typography are the building blocks of the design system. Those values are provided to the application via `ThemeProvider` and the `theme` object.

Every element of the design system should be in relation to those values in order to be consistent. So, intead of hard coded color you should always use `theme` prop.

```diff
- color: #8667a8;
+ color: ${props => props.theme.color.primary};
```

and instead of using CSS values for spacing you should rely on design system primitives:

```diff
- const BoxWithSpacing = styled.div`
-   margin: 16px;
- `;
+ const BoxWithSpacing = styled(Box).attrs({ m: 3 })`
+   // Your additional styles go here
+ `;
```
