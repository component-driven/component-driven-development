import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Base = ({ is: Component, ...props }) => <Component {...props} />;

/**
 * Truncate text with an ellipsis.
 */
const TruncatedText = styled(Base)`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

TruncatedText.propTypes = {
	/** Custom component or HTML tag */
	is: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

TruncatedText.defaultProps = {
	is: 'div',
};

export default TruncatedText;
