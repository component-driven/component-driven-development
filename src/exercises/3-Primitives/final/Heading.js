import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variant } from 'styled-system';
import Text from '../../../components/primitives/Text';

/**
 * A text heading.
 */
const Heading = styled(Text)(
	{},
	variant({
		prop: 'size',
		variants: {
			xl: {
				fontSize: 'xl',
				fontFamily: 'heading',
				lineHeight: 'heading',
			},
			lg: {
				fontSize: 'lg',
				fontFamily: 'heading',
				lineHeight: 'heading',
			},
			md: {
				fontSize: 'md',
				fontFamily: 'heading',
				lineHeight: 'heading',
			},
		},
	})
);

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
