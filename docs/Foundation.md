Colors, spacing, and typography are the building blocks of the design system. Those values are 
provided to the application via `ThemeProvider` and the `theme` object. Every element of the 
design system should be in relation to those values in order to be consistent.

So, intead of writing `color: #8667a8` you should use `theme` prop `color: ${props => props.theme
.color.primary}`
