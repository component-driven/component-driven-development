import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { css } from '@styled-system/css';
import Text from '../Text';

/**
 * A text heading.
 */
const Heading = styled(Text)(
	css({
		fontFamily: 'heading',
		lineHeight: 'heading',
	}),
	variant({
		prop: 'size',
		variants: {
			xl: {
				fontSize: 'xl',
				fontWeight: 'light',
			},
			lg: {
				fontSize: 'lg',
			},
			md: {
				fontSize: 'md',
				fontWeight: 'bold',
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
