/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import Button from '../core/Button';
import Input from '../core/Input';
import Text from '../core/Text';

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
		{success ? (
			<Text>
				Thank you! <span aria-hidden="true">🍕</span>
			</Text>
		) : (
			<React.Fragment>
				<Flex mx={-1} mb={1}>
					<Box px={1} w={1}>
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
					</Box>
					<Box px={1}>
						<Button type="submit" disabled={loading}>
							Subscribe
						</Button>
					</Box>
				</Flex>
				<div id={`${id}-info`}>
					{error ? (
						<Text error role="alert">
							{error}
						</Text>
					) : (
						<Text tertiary>
							We won’t spam you. Actually we won’t send you anything.
						</Text>
					)}
				</div>
			</React.Fragment>
		)}
	</form>
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
