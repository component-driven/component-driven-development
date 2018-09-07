import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ellipsis } from 'polished';

const Base = ({ is: Component, ...props }) => <Component {...props} />;

/**
 * Truncate text with an ellipsis.
 */
const TruncatedText = styled(Base).attrs({
	title: props => props.children,
})`
	${props => ellipsis(props.width + 'px')};
`;

TruncatedText.propTypes = {
	width: PropTypes.number,
	/** Custom component or HTML tag */
	is: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

TruncatedText.defaultProps = {
	is: 'div',
};

export default TruncatedText;
