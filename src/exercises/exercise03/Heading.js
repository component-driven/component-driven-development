import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, mixed } from 'styled-system';

const Base = ({ is: Component, ...props }) => <Component {...props} />;

/**
 * A text heading.
 */
const Heading = styled(Base)`
	${space};
	${({ theme, size }) =>
		mixed({
			theme,
			color: 'base',
			lineHeight: 'heading',
			fontFamily: 'heading',
			fontWeight: 'normal',
			fontSize: size,
		})};
`;

Heading.propTypes = {
	/** Custom component or HTML tag */
	is: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	size: PropTypes.oneOf(['xxl', 'xl', 'l', 'm']),
	children: PropTypes.node,
};

Heading.defaultProps = {
	m: 0,
	is: 'h1',
	size: 'xxl',
};

/** @component */
export default Heading;
