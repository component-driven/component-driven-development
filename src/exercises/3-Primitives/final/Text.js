import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, variant } from 'styled-system';

/**
 * A component to render all text in the app.
 */
const Text = styled.p(
	{
		margin: 0,
	},
	space,
	variant({
		variants: {
			base: {
				fontWeight: 'normal',
				lineHeight: 'base',
				fontFamily: 'body',
				fontSize: 'md',
				color: 'primary',
			},
			secondary: {
				fontWeight: 'normal',
				lineHeight: 'base',
				fontFamily: 'body',
				fontSize: 'md',
				color: 'grey.5',
			},
			tertiary: {
				fontWeight: 'normal',
				lineHeight: 'base',
				fontFamily: 'body',
				fontSize: 'sm',
				color: 'grey.5',
			},
			error: {
				fontWeight: 'normal',
				lineHeight: 'base',
				fontFamily: 'body',
				fontSize: 'md',
				color: 'error',
			},
		},
	})
);

Text.propTypes = {
	/** Variation */
	variant: PropTypes.oneOf(['base', 'secondary', 'tertiary', 'error']),
	align: PropTypes.oneOf(['left', 'center', 'right']),
	children: PropTypes.node,
};

Text.defaultProps = {
	variant: 'base',
};

/** @component */
export default Text;
