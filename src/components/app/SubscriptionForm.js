/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Stack from 'stack-styled';
import Button from '../core/Button';
import Input from '../core/Input';
import Text from '../core/Text';

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
	<React.Fragment>
		{success ? (
			<Text>
				Thank you! <span aria-hidden="true">🍕</span>
			</Text>
		) : (
			<Form onSubmit={onSubmit}>
				<Stack gap={2} mb={1} gridTemplateColumns={['1fr', '1fr auto']}>
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
				<div id={`${id}-info`}>
					{error ? (
						<Text variant="error" role="alert">
							{error}
						</Text>
					) : (
						<Text variant="tertiary">
							We won’t spam you. Actually we won’t send you anything.
						</Text>
					)}
				</div>
			</Form>
		)}
	</React.Fragment>
);

SubscriptionForm.propTypes = {
	id: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onEmailChange: PropTypes.func.isRequired,
	email: PropTypes.string.isRequired,
	loading: PropTypes.bool,
	success: PropTypes.bool,
	error: PropTypes.node,
};

export default SubscriptionForm;
