import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mixed } from 'styled-system';

const Base = ({ is: Component, ...props }) => <Component {...props} />;

/**
 * A component to render all text in the app.
 */
const Text = styled(Base)`
	${({ theme, variant }) =>
		mixed({
			theme,
			m: 0,
			fontFamily: 'base',
			lineHeight: 'base',
			fontSize: {
				base: 'm',
				secondary: 'm',
				tertiary: 's',
				error: 'm',
			}[variant],
			color: {
				base: 'base',
				secondary: 'secondary',
				tertiary: 'secondary',
				error: 'error',
			}[variant],
		})};
`;

Text.propTypes = {
	/** Custom component or HTML tag */
	is: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	/** Variation */
	variant: PropTypes.oneOf(['base', 'secondary', 'tertiary', 'error']),
	children: PropTypes.node,
};

Text.defaultProps = {
	is: 'p',
	variant: 'base',
};

export default Text;
