In this exercise we’ll create a custom React Hook to manage the state of our Dialog component.

## 2.3 Encapsulating state in a React Hook

In the previous exercise we’ve created a collection of stateless components. This gave us almost unlimited flexibility on how to compose these components. But since this components are stateless, we still have to manage the state (in our case the state of the modal opening) ourselves, and we have to duplicate this code every time we want to create a modal.

To solve this issue, we’re going to create a custom React Hook that encapsulates the state and returns its current value and a function to change this value. We’ll also need to move the condition from the caller code to our container `Dialog` component.

For example, we have a disclosure component, that consits of some content and a button that shows or hides the content. We can implement the state on the call site:

```jsx static
const [isExpanded, setIsExpanded] = React.useState(false);
<>
  <DisclosureButton onClick={() => setIsExpanded(x => !x)}>
    Toggle
  </DisclosureButton>
  {isExpanded && <DisclosureContent>Content</DisclosureContent>}
</>;
```

Or we can encapsulate the state management in a custom Hook, and spread the returned value to each primitive:

```jsx static
function useDisclosureState({ expanded = false } = {}) {
  const [isExpanded, setIsExpanded] = React.useState(expanded);
  return {
    isExpanded,
    onToggle: () => setIsExpanded(x => !x)
  };
}

const disclosure = useDisclosureState({ expanded: false });
<>
  <DisclosureButton {...disclosure}>Toggle</DisclosureButton>
  <DisclosureContent {...disclosure}>Content</DisclosureContent>
</>;
```

The benefit is that we don’t have to remember the API of each primitive component, and can spread the same props to each component, and let them deal with it. However, we still have access to all the values and function, and could use them in our custom components or extend with our own behavior. We also reduce code duplication and make the behaviour more consistent, which is especially important for components with more complex behavior.

**Note:** This exercise is inspired by the [Reakit Dialog component](https://reakit.io/docs/dialog/).

**Warning:** The implementation here is very basic, and only an example of the technique. It shouldn’t be used in production as is to create modal dialogs because we didn’t consider accessibility. Check our the [Reakit Dialog component](https://reakit.io/docs/dialog/#accessibility) to have an idea of what’s necessary to make a dialog accessible.

### The result

The result should look like this:

```jsx {"file": "final/Dialog.md", "noeditor": true}
```

### The task

1. Create a custom React Hook to manage Dialog opening state. The Hook should return the current opening state and function to show and hide the dialog.

<details>
 <summary>Solution</summary>

The `Dialog` component (`src/exercises/2-3-State_encapsulation/Dialog.js`):

```jsx {"file": "final/Dialog.js", "static": true}
```

The usage (`src/exercises/2-3-State_encapsulation/Dialog.md`):

```md {"file": "final/Dialog.md", "static": true}
```

</details>
