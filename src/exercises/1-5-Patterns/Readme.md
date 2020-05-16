## 5.1 Rewrite the Button

To make our Button

### The task

1. Rewrite the Button we created before using Box
1. Make it less flexible: we don't want `padding` and `border` be customizable via props
1. Add `secondary` and `primary` variants to the button and allow choosing them via props

### The result

```jsx padded
<Button>Push me</Button>
<Button variant="primary">Push me</Button>
```

<details>
 <summary>Solution</summary>

The `Button` component (`src/exercises/1-5-Patterns/Button.js`):

```jsx {"file": "final/Button.js", "static": true}
```

</details>

## 5.2 Creating simple UI Patterns

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

The `Label` component (`src/exercises/1-5-Patterns/Label.js`):

```jsx {"file": "final/Label.js", "static": true}
```

</details>

## 5.3 Using primitives to compose UI patterns

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

The `LogingForm` component (`src/exercises/1-5-Patterns/LoginForm.js`):

```jsx {"file": "final/LoginForm.js", "static": true}
```

</details>
