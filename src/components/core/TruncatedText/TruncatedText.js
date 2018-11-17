import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ellipsis } from 'polished';

/**
 * Truncate text with an ellipsis.
 */
const TruncatedText = styled.div.attrs({
	title: props => props.children,
})`
	${props => ellipsis(props.width + 'px')};
`;

TruncatedText.propTypes = {
	width: PropTypes.number,
	/** Custom component or HTML tag */
	as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default TruncatedText;
