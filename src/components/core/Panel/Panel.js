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
	border-radius: ${themeGet('radii.base')};
	background: ${themeGet('colors.bg')};
`;

Panel.propTypes = {
	children: PropTypes.node,
};

/** @component */
export default Panel;
