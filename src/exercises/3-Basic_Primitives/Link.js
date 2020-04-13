import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * A component to render all text in the app.
 */
const Link = styled.a`
	&,
	&:link,
	&:visited {
		color: ${props => props.theme.colors.primary};
	}
	&:hover,
	&:focus,
	&:active {
		color: ${props => props.theme.colors.accent};
	}
	&:focus {
		outline: 1px dashed ${props => props.theme.colors.focus};
		outline-offset: 2px;
	}
`;

Link.propTypes = {
	children: PropTypes.node,
};

/** @component */
export default Link;
