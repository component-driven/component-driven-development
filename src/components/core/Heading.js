import PropTypes from 'prop-types';
import { Box } from 'grid-styled';
import styled from 'styled-components';

/**
 * A text heading.
 */
const Heading = styled(Box).attrs({
	is: props => props.is,
	m: 0,
})`
	font-family: ${props => props.theme.fontFamily.base};
	font-size: ${props => props.theme.fontSize[props.size]};
	color: ${props => props.theme.color.base};
	font-weight: normal;
`;

Heading.propTypes = {
	/** Custom component or HTML tag */
	is: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	size: PropTypes.oneOf(['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta'])
		.isRequired,
	children: PropTypes.node,
};

Heading.defaultProps = {
	is: 'div',
};

export default Heading;
