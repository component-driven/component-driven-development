## Creating a subscription form

### Getting started

Run Styleguidist: `npm run exercise 10`.

### Task

Create a subscription form that consists of two components:

* A presentational component (`SubscriptionForm`) that renders all possible states of the subscription form:
  * default;
  * loading (disabled text input and a button);
  * error (error message below the form);
  * success (success message instead of the form).
* A container component (`SubscriptionFormContainer`) that:
  * holds current text input value in a state;
  * sends a network request on form submit;
  * controls the presentational component via its props.

### If you’re stuck

See the completed code of this example: [presentational](../../components/app/SubscriptionForm.js) and [container](../../components/app/SubscriptionFormContainer.js).
