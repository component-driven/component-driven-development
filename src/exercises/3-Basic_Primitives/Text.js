import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * A component to render all text in the app.
 */
const Text = styled.p({
	// Your styles here
});

Text.propTypes = {
	children: PropTypes.node,
};

/** @component */
export default Text;
