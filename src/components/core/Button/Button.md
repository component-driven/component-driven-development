Secondary and primary buttons:

```js
<>
  <Button>Push me</Button> <Button variant="primary">Push me</Button>
</>
```

Disabled buttons:

```js
<>
  <Button disabled>Can’t touch this</Button>{' '}
  <Button variant="primary" disabled>
    Can’t touch this
  </Button>
</>
```

Full width button:

```js
<>
  <Button fullWidth>First button</Button>
  <Button variant="primary" fullWidth>
    Second button
  </Button>
</>
```

Button as a link:

```js
<>
  <Button as="a" href="/">
    Click me
  </Button>{' '}
  <Button as="a" href="/" variant="primary">
    Click me
  </Button>
</>
```
