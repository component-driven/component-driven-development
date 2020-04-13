import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { css } from '@styled-system/css';
import { Text } from '../../../components';

/**
 * A component to render all text in the app.
 */
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

Link.propTypes = {
	children: PropTypes.node,
};

/** @component */
export default Link;
