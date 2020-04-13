// COMMENT_START
// This is an exercise about using styled-components
// COMMENT_END
// WORKSHOP_START
import React from 'react';
// WORKSHOP_END
import PropTypes from 'prop-types';
// FINAL_START
import styled from 'styled-components';
// FINAL_END

// WORKSHOP_START
const Button = props => <button {...props} />;
// WORKSHOP_END
// FINAL_START
const Button = styled.button`
	padding: 8px 16px;
	color: #fff;
	background-color: #8667a8;
	border: 0;
	border-radius: 5px;
`;
// FINAL_END

Button.propTypes = {
	/** Button label */
	children: PropTypes.node,
};

// This will let react-styleguidist know that we're exporting a React component
// so it can generate the PropTypes table. This is only needed when used
// with styled-components and such.
/** @component */
export default Button;
