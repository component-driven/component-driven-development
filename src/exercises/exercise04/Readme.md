## Hiding complex styles in components

### Getting started

Run `npm start` and navigate to _Exercise 4_ in the sidebar. Use files in the `src/exercises/exercise04` folder.

### 4.1. Truncating long lines of text

Truncating long lines of text with an ellipsis is a common task that requires a hard to remember [CSS snippet](https://css-tricks.com/snippets/css/truncate-string-with-ellipsis/):

```css static
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
```

By creating a component, we can hide the complexity from the user, reduce code duplication and allow ourselves to change the implementation in the future (for example, we may use a gradient instead of an ellipsis).

#### The result

The result should look like this:

```jsx
import TruncatedText from '../../components/core/TruncatedText';
<TruncatedText width={200}>
  The quick brown fox jumps over the lazy dog
</TruncatedText>;
```

#### The task

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

### 4.2. Creating a sticky footer

Sticky footer is another common task. It has [dozens of different solutions](https://css-tricks.com/couple-takes-sticky-footer/), many are tricky and hard to remember.

We’ll [use Flexbox](https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/) and [viewport units](https://css-tricks.com/fun-viewport-units/):

```html static
<style>
  .container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .footer {
    margin-top: auto;
  }
</style>
<div class="container">
  <main>Main content</main>
  <footer class="footer">Our sticky footer</footer>
</div>
```

#### The result

The result should look like this:

```jsx
import Page from '../../components/core/Page';
<div
  style={{
    height: 100,
    overflow: 'auto',
    border: '1px solid #e8e8e8',
    borderRadius: 3
  }}
>
  <Page>
    <main>Main content (scroll down)</main>
    <Page.Footer>Footer</Page.Footer>
  </Page>
</div>;
```

#### The task

Create two components (`Page` and `Page.Footer`) that implement a sticky footer.

<details>
 <summary>Solution</summary>

```js static
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Footer = styled.footer`
  margin-top: auto;
`;

Page.Footer = Footer;

/** @component */
export default Page;
```

</details>

### 4.3. Implementing the Media object pattern

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

#### The result

The result should look like this:

```jsx
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

#### The task

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
