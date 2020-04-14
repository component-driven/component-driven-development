Normal link:

```jsx
<Link href="/">Normal link</Link>
```

Since `Link` uses `Text` we can pass any prop of `Text` to tweak it. For example, if we want our link's color to match the paragraph color we can do the following:

```jsx
<Text>
  By using our site you agree to the following{' '}
  <Link href="/" color="inherit">
    Terms of Service
  </Link>
  .
</Text>
```
