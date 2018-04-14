import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * A component to render all text in the app.
 */
const Text = styled.p`
	font-family: ${props => props.theme.fontFamily.base};
	/* Your styles here */
`;

Text.propTypes = {
	/** Custom component or HTML tag */
	is: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	/** Less important text */
	secondary: PropTypes.bool,
	/** Small copy */
	tertiary: PropTypes.bool,
	/** Error message */
	error: PropTypes.bool,
	children: PropTypes.node,
};

Text.defaultProps = {
	secondary: false,
	tertiary: false,
	error: false,
};

/** @component */
export default Text;
