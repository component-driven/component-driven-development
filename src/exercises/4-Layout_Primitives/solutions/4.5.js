/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import Stack from 'stack-styled';
import Button from '../../../../src/components/primitives/Button';
import Input from '../../../../src/components/primitives/Input';

const SubscriptionForm = ({
	id,
	onSubmit,
	onEmailChange,
	email,
	loading,
	success,
	error,
}) => (
	<Stack
		gridGap={3}
		mb={2}
		gridTemplateColumns={['1fr', '1fr auto']}
		as="form"
		onSubmit={onSubmit}
	>
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
	</Stack>
);

export default SubscriptionForm;
