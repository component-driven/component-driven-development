import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mixed, space } from 'styled-system';

const Base = ({ is: Component, ...props }) => <Component {...props} />;

/**
 * A text heading.
 */
const Heading = styled(Base).attrs({
	is: props => props.is,
	m: 0,
})`
	${({ theme, size }) =>
		mixed({
			theme,
			color: 'base',
			lineHeight: 'heading',
			fontFamily: 'heading',
			fontWeight: 'normal',
			fontSize: size,
		})};
	${space};
`;

Heading.propTypes = {
	/** Custom component or HTML tag */
	is: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	size: PropTypes.oneOf(['xxl', 'xl', 'l', 'm']),
	children: PropTypes.node,
};

Heading.defaultProps = {
	is: 'h1',
	size: 'xxl',
};

/** @component */
export default Heading;
