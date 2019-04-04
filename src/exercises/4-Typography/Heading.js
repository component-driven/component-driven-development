import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';

/**
 * A text heading.
 */
const Heading = styled.h1`
	/* Your styles here */
`;

Heading.propTypes = {
	/** Custom component or HTML tag */
	as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	size: PropTypes.oneOf(['xxxl', 'xxl', 'xl', 'l', 'm']),
	children: PropTypes.node,
};

Heading.defaultProps = {
	m: 0,
	size: 'xxl',
};

/** @component */
export default Heading;
