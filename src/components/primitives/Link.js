import React from 'react';
import styled from 'styled-components';
import { css } from '@styled-system/css';
import { Text } from '../';

/**
 * A link is a `Text` rendered as `a` with additional styles.
 */
const Link = styled(props => <Text as="a" {...props} />)(props =>
	css({
		cursor: 'pointer',
		'&, &:link, &:visited': {
			color: props.color || 'primary',
		},
		'&:hover, &:focus, &:active': {
			color: 'accent',
		},
		'&:focus': {
			outline: '1px dashed',
			outlineColor: 'accent',
			outlineOffset: 2,
		},
	})
);

/** @component */
export default Link;
