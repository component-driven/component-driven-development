import React from 'react';
import Stack from '../../components/primitives/Stack';
import Box from '../../components/primitives/Box';
import Button from '../../components/primitives/Button';
import Input from '../../components/primitives/Input';

const SubscriptionForm = ({
	id,
	onSubmit,
	onEmailChange,
	email,
	loading,
	success,
	error,
}) => (
	<form onSubmit={onSubmit}>
		<Input
			type="email"
			value={email}
			required
			placeholder="Email"
			aria-label="Email"
			aria-invalid={error && 'true'}
			aria-describedby={`${id}-info`}
			disabled={loading}
			onChange={onEmailChange}
		/>
		<Button variant="primary" type="submit" disabled={loading}>
			Subscribe
		</Button>
	</form>
);

export default SubscriptionForm;
