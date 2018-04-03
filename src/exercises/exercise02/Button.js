import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Styled button.
 */
const Button = styled.button`
	padding: 0.5rem 1rem;
	font-size: 1rem;
	background: ${props => (props.primary ? 'palevioletred' : 'oldlace')};
	color: ${props => (props.primary ? 'oldlace' : 'palevioletred')};
	border: 1px solid palevioletred;
	border-radius: 0.15rem;
	cursor: pointer;
`;

Button.propTypes = {
	primary: PropTypes.node,
};

/** @component */
export default Button;
