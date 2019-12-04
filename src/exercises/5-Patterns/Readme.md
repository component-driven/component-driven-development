## 5.1 Using layout and basic primitive to compose UI patterns

In the previous exercise we learned how to manage whitespace around our primitives. Now it's time to use what we learned and create an application specific component.

### The result

```jsx noeditor
import SubscriptionForm from '../../../src/components/patterns/SubscriptionForm';

<SubscriptionForm
  id="sf1"
  email=""
  onSubmit={() => {}}
  onEmailChange={() => {}}
/>;
```

### The task

1. Create a `SubscriptionForm` component using the `Grid` component.
2. The layout should be responsive and the button should be placed below the input field on a narrow screen.

**Hint:** Use `grid-template-columns` CSS property for responsiveness, like this: `gridTemplateColumns={['1fr', '1fr auto']}`.

<details>
 <summary>Solution</summary>

```js {"file": "solutions/5.1.js", "static": true}
```

</details>

## 5.2 Adding spacing to any primitive

Using `Box` and `Flex` components we can create really complex layouts only using our primitives without writing HTML or CSS. And since the values for the spacing are coming from our [spacing scale](https://cdds.netlify.com/styleguide/#/Foundation?id=spacing) we can be sure our layouts are consistent across the whole application.

### The result

```jsx noeditor
import Footer from '../../../src/components/patterns/Footer';
<Footer />;
```

### The task

1. Create a `Footer` component.

2. Use only primitives for layout, whitespace (`Box`, `Flex`, `Grid`, and `Stack`) and text (`Text`, `Heading` and `Link`).

<details>
 <summary>Solution</summary>

```js {"file": "solutions/5.2.js", "static": true}
```

</details>
