# Encapsulating complex styles in components

## Getting started

Run `npm start` and navigate to _Exercise 4_ in the sidebar. Open `src/exercises/exercise04` in your editor.

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
