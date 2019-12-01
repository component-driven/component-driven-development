import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * A component to render all text in the app.
 */
const Text = styled.p({
	// Your styles here
});

Text.propTypes = {
	/** Variation */
	variant: PropTypes.oneOf(['base', 'secondary', 'tertiary', 'error']),
	align: PropTypes.oneOf(['left', 'center', 'right']),
	children: PropTypes.node,
};

Text.defaultProps = {
	variant: 'base',
};

/** @component */
export default Text;
