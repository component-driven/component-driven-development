/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import PropTypes from 'prop-types';
import Stack from '../../core/Stack';
import Button from '../../core/Button';
import Input from '../../core/Input';
import Text from '../../core/Text';

const SubscriptionForm = ({
	id,
	onSubmit,
	onEmailChange,
	email,
	loading,
	success,
	error,
}) => (
	<>
		{success ? (
			<Text>
				Thank you! <span aria-hidden="true">🍕</span>
			</Text>
		) : (
			<form onSubmit={onSubmit}>
				<Stack gridGap={3} mb={2} gridTemplateColumns={['1fr', '1fr auto']}>
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
			</form>
		)}
	</>
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
