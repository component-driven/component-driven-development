import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { Flex } from '@rebass/grid';

/**
 * A visually distinctive block of content.
 */
const Panel = styled(Flex).attrs({
	p: 4,
})`
	border: 1px solid ${themeGet('colors.light')};
	border-radius: ${themeGet('radii.base')};
	background: transparent;
`;

Panel.propTypes = {
	children: PropTypes.node,
};

/** @component */
export default Panel;
