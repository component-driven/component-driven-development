import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * A text heading.
 */
const Heading = styled.h1`
	/* Your styles here */
`;

Heading.propTypes = {
	/** Custom component or HTML tag */
	is: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	size: PropTypes.oneOf(['xxl', 'xl', 'l', 'base']),
	children: PropTypes.node,
};

Heading.defaultProps = {
	is: 'h1',
	size: 'xxl',
};

export default Heading;
