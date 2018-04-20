import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import { Button } from '../../components/core/Button';
import { Input } from '../../components/core/Input';
import { Text } from '../../components/core/Text';

const SubscriptionForm = ({
	id,
	onSubmit,
	onEmailChange,
	email,
	loading,
	success,
	error,
}) => <form onSubmit={onSubmit} />;

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
