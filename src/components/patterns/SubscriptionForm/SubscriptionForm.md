Subscription form should be used to gather emails of users who are interested in the newlestter.

The component implements different states that can be activated during the process.

### Normal

```jsx harmony
<SubscriptionForm
  id="sf1"
  email=""
  onSubmit={() => {}}
  onEmailChange={() => {}}
/>
```

### Sending

```jsx harmony
<SubscriptionForm
  id="sf2"
  loading
  email=""
  onSubmit={() => {}}
  onEmailChange={() => {}}
/>
```

### Error

```jsx harmony
<SubscriptionForm
  id="sf3"
  error="Out of cheese error"
  email=""
  onSubmit={() => {}}
  onEmailChange={() => {}}
/>
```

### Success

```jsx harmony
<SubscriptionForm
  id="sf4"
  success
  email=""
  onSubmit={() => {}}
  onEmailChange={() => {}}
/>
```
