/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import styled from 'styled-components';
import Stack from 'stack-styled';
import Button from '../../../src/components/core/Button';
import Input from '../../../src/components/core/Input';

const Form = styled.form`
	width: 100%;
`;

const SubscriptionForm = ({
	id,
	onSubmit,
	onEmailChange,
	email,
	loading,
	success,
	error,
}) => (
	<Form onSubmit={onSubmit}>
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
	</Form>
);

export default SubscriptionForm;
