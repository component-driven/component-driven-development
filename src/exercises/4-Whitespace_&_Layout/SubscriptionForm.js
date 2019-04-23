import React from 'react';
import Stack from 'stack-styled';
import Box from '../../../src/components/core/Box';
import Button from '../../../src/components/core/Button';
import Input from '../../../src/components/core/Input';

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
