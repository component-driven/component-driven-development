## 5.1 Creating a login form using primitives

In the previous exercise we learned how to manage whitespace around our primitives. Now it's time to use what we learned and create an application specific component.

Using `Box` and `Flex` components we can create really complex layouts without writing custom CSS. And since the values for the spacing are coming from our [spacing scale](https://cdds.netlify.com/styleguide/#/Foundation?id=spacing) we can be sure our layouts are consistent across the whole application.

Let’s create a login form four our app.

### The result

```js noeditor
import LoginForm from './final/LoginForm';
<LoginForm/>
```

### The task

1. Create a `LoginForm` component.
2. Use only primitives for layout, whitespace (`Box`, `Flex`, `Grid`, and `Stack`) and text (`Text`, `Heading`, `Button`, and `Link`).
3. The layout should be responsive and the labels should be placed above input fields on a narrow screen.

**Hint:** Use arrays for responsiveness, like this: `gridTemplateColumns={['1fr', '1fr auto']}`.


<details>
 <summary>Solution</summary>

```js {"file": "./final/LoginForm.js", "static": true}
```

</details>
