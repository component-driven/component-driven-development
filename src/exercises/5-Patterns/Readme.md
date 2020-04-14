## 5.1 Creating simple UI Patterns

Let's create a simple `Label` UI pattern.

### The task

1. When `required=true` display a red `*` next to the label
1. Use `label` HTML element and appropriate aria attributes

### The result

```jsx
<Label required>I'm a label</Label>
```

<details>
 <summary>Solution</summary>

```js {"file": "final/Label.js", "static": true}
```

</details>

## 5.2 Using primitives to compose UI patterns

In the previous exercise we learned how to manage whitespace around our primitives. Now it's time to use what we learned and create an application specific component.

Using `Box`, `Flex`, and `Grid` components we can create really complex layouts without writing custom CSS. And, since the values for the spacing are coming from our [spacing scale](https://cdds.netlify.com/styleguide/#/Foundation?id=spacing) we can be sure our layouts are consistent across the whole application.

Let's create a LoginForm with the primitives we created today.

### The result

```jsx
<LoginForm />
```

### The task

1. Create a `LoginForm` component.
1. Use only primitives for layout, whitespace (`Box`, `Flex`, `Grid`, and `Stack`) and text (`Text`, `Heading` and `Link`).
1. Bonus points: make the form responsive. On small screens, labels should be displayed over the input fields.

<details>
 <summary>Solution</summary>

```js {"file": "final/LoginForm.js", "static": true}
```

</details>
