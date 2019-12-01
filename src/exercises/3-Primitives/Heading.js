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
	as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	size: PropTypes.oneOf(['xl', 'lg', 'md']),
	children: PropTypes.node,
};

Heading.defaultProps = {
	size: 'xl',
};

/** @component */
export default Heading;
