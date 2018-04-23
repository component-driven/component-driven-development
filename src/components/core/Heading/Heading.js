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
	font-family: ${props => props.theme.fontFamily.heading};
	font-size: ${props => props.theme.fontSize[props.size]};
	color: ${props => props.theme.color.base};
	font-weight: normal;
`;

Heading.propTypes = {
	/** Custom component or HTML tag */
	is: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	size: PropTypes.oneOf(['xxlarge', 'xlarge', 'large', 'base', 'small']),
	children: PropTypes.node,
};

Heading.defaultProps = {
	is: 'h1',
	size: 'xxlarge',
};

/** @component */
export default Heading;
