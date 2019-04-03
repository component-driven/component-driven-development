# Encapsulating complex styles in components

## Getting started

Run `npm start` and navigate to _Exercise 4_ in the sidebar. Open `src/exercises/exercise04` in your editor.

## 4.1. Truncating long lines of text

Truncating long lines of text with an ellipsis is a common task that requires a hard to remember [CSS snippet](https://css-tricks.com/snippets/css/truncate-string-with-ellipsis/):

```css static
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
```

By creating a component, we can hide the complexity from the user, reduce code duplication and allow ourselves to change the implementation in the future (for example, we may use a gradient instead of an ellipsis).

### The result

The result should look like this:

```jsx harmony
import TruncatedText from '../../components/core/TruncatedText';
<TruncatedText width={200}>
  The quick brown fox jumps over the lazy dog
</TruncatedText>;
```

### The task

Create a component (`TruncatedText`) that renders its children with an ellipsis at the end, if the content can’t fit on a single line.

**Bonus 1:** Add a prop to define component’s `max-width`.

**Bonus 2:** Use [ellipsis](https://polished.js.org/docs/#ellipsis) mixin from polished instead of custom CSS.

<details>
 <summary>Solution</summary>

```js static
import styled from 'styled-components';

const TruncatedText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/** @component */
export default TruncatedText;
```

</details>

## 4.3. Implementing the Media object pattern

[Media object](https://css-tricks.com/media-object-bunch-ways/) is a simple pattern, where an image is placed on a left or right side of text.

Again, we’ll use Flexbox to implement it:

```html static
<style>
  .container {
    display: flex;
    align-items: flex-start;
  }
  .image {
    margin-right: 16px;
  }
  .body {
    flex: 1;
  }
</style>
<div class="container">
  <img class="image" src="dachshund.jpg" />
  <p class="body">Main content</p>
</div>
```

### The result

The result should look like this:

```jsx harmony
import Media from '../../components/core/Media';
import Text from '../../components/core/Text';
import Image from '../../components/core/Image';
<Media>
  <Media.Image>
    <Image src="images/tsiri.jpg" alt="Saluki" />
  </Media.Image>
  <Media.Body>
    <Text>
      The Saluki is classed as a sighthound and is typically
      deep-chested and long-legged. Salukis are "sight" hounds—hunting
      by sight—and run their quarry down to kill or retrieve it.
    </Text>
  </Media.Body>
</Media>;
```

### The task

Create three components (`Media`, `Media.Image` and `Media.Body`) that implement the Media object pattern.

**Bonus:** Add a prop to position an image on the right side.

<details>
 <summary>Solution</summary>

```js static
import styled from 'styled-components';

const Media = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Image = styled.div`
  margin-right: ${props => props.theme.space[4]}px;
`;

const Body = styled.footer`
  flex: 1;
`;

Media.Image = Image;
Media.Body = Body;

/** @component */
export default Media;
```

</details>
