import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { css } from '@styled-system/css';
import Flex from '../Flex';
import IconBase from '../Icon';

const Icon = styled(IconBase)({
	pointerEvents: 'none',
});

/**
 * A select.
 */
const SelectInput = styled.select(
	css({
		appearance: 'none',
		userSelect: 'none',
		display: 'block',
		width: '100%',
		height: '2.5rem',
		paddingTop: 3,
		paddingRight: 5,
		paddingBottom: 3,
		paddingLeft: 3,
		border: 'thin',
		borderColor: 'primary',
		borderRadius: 'base',
		fontFamily: 'body',
		fontSize: 'md',
		color: 'text',
		backgroundColor: 'background',

		'&:hover:enabled, &:active:enabled, &:focus': {
			outline: 0,
			boxShadow: 'focus',
			cursor: 'pointer',
		},

		'&:disabled': {
			opacity: 0.6,
			filter: 'saturate(60%)',
		},
	})
);

const Select = props => (
	<Flex>
		<SelectInput {...props} />
		<Icon
			name="downArrow"
			color="secondary"
			size="md"
			alignSelf="center"
			ml={-5}
			alt=""
		/>
	</Flex>
);

Select.propTypes = {
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	disabled: PropTypes.bool,
};

Select.defaultProps = {};

/** @component */
export default Select;
