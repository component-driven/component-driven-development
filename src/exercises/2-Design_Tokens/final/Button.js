import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
	padding: ${props => props.theme.space[3]} ${props => props.theme.space[4]};
	color: ${props => props.theme.colors.background};
	background-color: ${props => props.theme.colors.primary};
	border: 0;
	border-radius: ${props => props.theme.radii.round};
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
