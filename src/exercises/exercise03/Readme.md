## Creating a generic text component

### Getting started

Run Styleguidist: `npm run exercise 3`. Use files in the `src/exercises/exercise03` folder.

### Result

The result should look like this:

```js noeditor
const Text = require('../../components/core/Text').default;
<>
  <Text>Oh dear! Oh dear! I shall be late!</Text>
  <Text secondary>Secondary text</Text>
  <Text tertiary>Tertiary text</Text>
  <Text error>Error text</Text>
</>;
```

### Background

Have a look at [colors](https://component-driven.github.io/component-driven-development/styleguide/#colors) and [typography scale](https://component-driven.github.io/component-driven-development/styleguide/#typography) docs.

### Task

Create a component that renders text in different styles:

- Normal text (base font size, base color);
- Secondary text (base font size, secondary color);
- Small text (small font size, secondary color);
- Error message (base font size, error color).

Props are used to change text style.

<details>
 <summary>Solution</summary>

```jsx static
import styled from 'styled-components';

const Text = styled.p`
  margin: 0;
  font-family: ${props => props.theme.fontFamily.base};
  font-size: ${props =>
    props.theme.fontSize[props.tertiary ? 's' : 'base']};
  color: ${props =>
    props.theme.color[
      (props.secondary && 'secondary') ||
        (props.tertiary && 'secondary') ||
        (props.error && 'error') ||
        'base'
    ]};
`;

/** @component */
export default Text;
```

</details>

#### Bonus

The user can change a component or an HTML tag that is used to render text.

**Hint:** see the next exercise for an example.

<details>
 <summary>Solution</summary>

```jsx static
import styled from 'styled-components';

const Base = ({ is: Component, ...props }) => (
  <Component {...props} />
);

const Text = styled(Base)`
  /* Base styles */
`;

Text.propTypes = {
  /** Custom component or HTML tag */
  is: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
  // Rest of the props
};

/** @component */
export default Text;
```

</details>
