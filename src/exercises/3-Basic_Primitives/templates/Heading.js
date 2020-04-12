import PropTypes from 'prop-types';
import styled from 'styled-components';
// FINAL_START
import { variant } from 'styled-system';
import Text from '../../../components/primitives/Text';
import theme from '../../../theme';
// FINAL_END

/**
 * A text heading.
 */
// WORKSHOP_START
const Heading = styled(Text)({
	/* Your styles here */
});
// WORKSHOP_END
// FINAL_START
const Heading = styled(Text)(
	variant({
		prop: 'size',
		variants: {
			xl: {
				...theme.textStyles.xl,
			},
			lg: {
				...theme.textStyles.lg,
			},
			md: {
				...theme.textStyles.md,
			},
		},
	})
);
// FINAL_END

Heading.propTypes = {
	/** Custom component or HTML tag */
	as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	/** Variant */
	size: PropTypes.oneOf(['xl', 'lg', 'md']),
	children: PropTypes.node,
};

Heading.defaultProps = {
	size: 'xl',
};

/** @component */
export default Heading;
