import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// FINAL_START
import { css } from '@styled-system/css';
import { Text } from '../../../components';
// FINAL_END

/**
 * A component to render all text in the app.
 */
// WORKSHOP_START
const Link = styled.a`
	&,
	&:link,
	&:visited {
		color: ${props => props.theme.colors.primary};
	}
	&:hover,
	&:focus,
	&:active {
		color: ${props => props.theme.colors.hover};
	}
	&:focus {
		outline: 1px dashed ${props => props.theme.colors.focus};
		outline-offset: 2px;
	}
`;
// WORKSHOP_END
// FINAL_START
/*
	We use `styled` function to create a new styled-component from `Text`
	but we want to pass some props to it. For that we can use function argument:
 */
const Link = styled(props => <Text as="a" {...props} />)(props =>
	/* Since we want colors to be coming from theme, we will use
		`css` function from `@styled-system/css` that maps values to theme.
	 */
	css({
		cursor: 'pointer',
		'&, &:link, &:visited': {
			/** If we pass `color` prop we'll use it as is otherwise link will have `primary` color */
			color: props.color || 'primary',
		},
		'&:hover, &:focus, &:active': {
			color: 'hover',
		},
		'&:focus': {
			outline: '1px dashed',
			outlineColor: 'focus',
			outlineOffset: 2,
		},
	})
);
// FINAL_END

Link.propTypes = {
	children: PropTypes.node,
};

/** @component */
export default Link;
