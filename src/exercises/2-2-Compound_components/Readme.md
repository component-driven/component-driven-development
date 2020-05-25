In this exercise, we’ll split our Prompt component into multiple primitive components.

## 2.1 Creating compound components

Monolithic components with many props to support many different use cases are hard to learn and use, and they make impossible states possible — not all combinations of props make sense. They are also harder to maintain. Even with many props, the flexibility is still limited. For example, in our Prompt component, there’s no way to change the submit button label.

To solve these issues, we’re going to split our single monolithic component into multiple primitive components, and use composition of these small components to implement different use cases.

Such primitive components give us enough flexibility but maintain some level of consistency (more about consistency in later exercises) and reduce code duplication.

We’ll also make our component (now a group of components) even more flexible, and instead of making it tied to our original prompt dialog use case, we’ll make a generic Dialog component, so the prompt would be one of its use cases.

For example, we have a `Button` component, and we want to add an icon on the left or the right side of a button. We can either use props:

```jsx static
<Button leftIcon="pizza">Order pizza</Button>
<Button rightIcon="coffee">Buy coffee</Button>
```

But that means we need to make a separate prop for each side, cluttering the API, or we can create a _compound component_, a complex component composed of simpler primitive components:

```jsx static
<Button><ButtonIcon icon="pizza" /> Order pizza</Button>
<Button>Buy coffee <ButtonIcon icon="coffee" /></Button>
```

The benefit is that it creates a more straightforward and flexible API: we can place the `ButtonIcon` component on either side of the `Button`.

**Note:** This exercise is inspired by the [Chakra UI Modal component](https://chakra-ui.com/modal).

### The result

The result should look like this:

```jsx {"file": "final/Dialog.md", "noeditor": true}
```

### The task

1. Split the component input multiple smaller components to avoid using props to switch between variations.

This time you could think about layout and styles, and what would make sense to encapsulate in the primitives.

**Tip:** Explicitly import multiple components to use them in Styleguidist Markdown files:

```jsx static
import { House, HouseRoom } from './House';
<>
  <House>
    <HouseRoom size="tiny" />
    <HouseRoom size="large" />
  </House>
</>;
```

<details>
 <summary>Solution</summary>

The `Dialog` component (`src/exercises/2-2-Compound_components/Dialog.js`):

```jsx {"file": "final/Dialog.js", "static": true}
```

The usage (`src/exercises/2-2-Compound_components/Dialog.md`):

```md {"file": "final/Dialog.md", "static": true}
```

</details>
