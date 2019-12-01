import PropTypes from 'prop-types';
import styled from 'styled-components';
// FINAL_START
import { space, variant } from 'styled-system';
// FINAL_END

/**
 * A component to render all text in the app.
 */
// WORKSHOP_START
const Text = styled.p({
	// Your styles here
});
// WORKSHOP_END
// FINAL_START
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
// FINAL_END

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
