import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * A component to render all text in the app.
 */
const Text = styled.p`
	/* Your styles here */
`;

Text.propTypes = {
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
