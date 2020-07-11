In this exercise we’ll create reusable primitive components. We’ll create a Text, Link, and a Heading components. We’ll learn how to reduce boilerplate by using [styled-system](https://styled-system.com) and how to compose primitives.

The majority of every user interface is a text. Unsurprisingly, most of the inconsistencies are coming from text styles. To reduce the amount of different text styles we should restrict our styling and only allow using design tokens.

## 3.1. Creating a generic text component

In the previous exercise we learned how to use design tokens instead of arbitrary CSS values in our components. Now we need a way to write styles and access design tokens inside our application code without writing custom CSS.

We could approach this task naively:

```jsx static
const Text = styled.p`
  font-family: ${props => props.theme.fonts[props.fontFamily]};
  font-size: ${props => props.theme.fontSizes[props.fontSize]};
  font-weight: ${props => props.theme.fontWeights[props.fontWeight]};
  color: ${props => props.theme.colors[props.color]};
`;
```

As you can see, there is a lot of repetition going on. Luckily for us, [styled-system](https://styled-system.com) is a library designed specifically for our needs.

> Styled System lets you quickly build custom UI components with constraint-based style props based on scales defined in your theme.

### The task

1. Refactor the `Text` component so that it can render different font styles that are defined in the `theme.js`
1. Provide following API via props: `fontFamily`, `fontSize`, `fontWeight`, `lineHeight`, `letterSpacing`, `textAlign`, and `fontStyle`.
1. The component should use `fontFamily: "body"`, `fontSize: "md"`, `fontWeight: "normal"`, and should render `p` tag by default
1. Allow using design tokens without importing `theme.js` via string literals, like `color: "primary"`.

### The result

The result should allow rendering such text:

```jsx
<Text color="error" fontWeight="bold">
  Bold red text
</Text>
```

## 3.2. Variants

Now we already have a much better way of styling any text in the application, but it doesn’t prevent developers from using "wrong" combinations of tokens. I.e. you can still end up with a barely readable text, or a font style that doesn’t exist anywhere else in the app.

To prevent that, we can make our primitives more rigid by only allowing certain pre-defined font styles.

### The task

Refactor `Text` component to allow rendering text with following styles:

- Heading text (`xl` font size, `heading` font family);
- Sub-heading text (`lg` font size, `heading` font family);
- Body text (`md` font size, `body` font family);
- Help text (`sm` font size, `secondary` color, `body` font family);
- Error text (`md` font size, `error` color, `body` font family).

### The result

The result should look like this:

```js noeditor
<>
  <Text variant="heading">Heading</Text>
  <Text variant="sub-heading">Sub-Heading</Text>
  <Text variant="body">Body text</Text>
  <Text variant="disclaimer">Help text</Text>
  <Text variant="error">Error text</Text>
</>
```

## 3.3. Using `css` function to access design tokens

When creating primitives it can be tedious to write `props => props.theme.colors.accent` all the time. In order to reduce the amount of code, styled-system has a separate package `@styled-system/css` that can be used to access design tokens as strings:

```diff
- {
-   color: props => props.theme.colors.accent
- }
+ css({
+   color: "accent"
+ })
```

### The task

Refactor `Link` component to use `css` function.

## 3.4. Composing primitives

Now that we have our `Text` component, let’s create a `Heading` primitive that should help rendering all headings across the app. In this case, it’s important to keep in mind that in UIs headings won’t follow document outline, because heading level [depends on the context](https://medium.com/@Heydon/managing-heading-levels-in-design-systems-18be9a746fa3). In other words we need to change heading styles and an HTML element independently. This means, we have to create the API that’s doesn’t couple HTML tag and the look of the heading. We can leverage [`as` prop](https://www.styled-components.com/docs/api#as-polymorphic-prop) to render a desired HTML element.

### The result

The result and the API should look like this:

```jsx
<Heading>Hero Heading</Heading>
```

## The task

Have a look at our [typography styles](https://cdds.netlify.com/styleguide/#/Foundation?id=typography) and create a `Heading` component that renders a heading using `Text` component:

- `heading` font family;
- `heading` line height;
- `lg` font size
- HTML element can be changed independently using `as` prop.

## Solutions

<details>
 <summary>Text</summary>

The `Text` component (`src/exercises/3-Basic_Primitives/Text.js`):

```jsx {"file": "final/Text.js", "static": true}
```

</details>

<details>
 <summary>Link</summary>

The `Link` component (`src/exercises/3-Basic_Primitives/Link.js`):

```jsx {"file": "final/Link.js", "static": true}
```

</details>

<details>
 <summary>Heading</summary>

The `Heading` component (`src/exercises/3-Basic_Primitives/Heading.js`):

```jsx {"file": "final/Heading.js", "static": true}
```

</details>

## Takeaways

1. All text in the app should be rendered using `Text` component.
1. Do not rely on the cascade from global CSS since may affect the styles depending on where the component is rendered.
1. Use design tokens from the design system to reduce the amount of choice.
1. When creating primitives, first think of the API (i.e. imagine how the component is going to be used, then code it).
1. styled-system simplifies creating primitives with constraint-based APIs.
1. Compose more complex components out of primitives.
