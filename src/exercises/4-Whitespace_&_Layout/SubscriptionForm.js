import React from 'react';
import Stack from '../../components/core/Stack';
import Box from '../../components/core/Box';
import Button from '../../components/core/Button';
import Input from '../../components/core/Input';

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
