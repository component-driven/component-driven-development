import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
	padding: 8px 16px;
	color: #fff;
	background-color: #8667a8;
	border: 0;
`;

Button.propTypes = {
	/** Button label */
	children: PropTypes.node,
};

// This will let react-styleguidist know that we're exporting a React component
// so it can generate the PropTypes table. This is only needed when used
// with styled-components and such.
/** @component */
export default Button;
