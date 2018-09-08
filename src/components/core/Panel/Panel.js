import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { Flex } from 'grid-styled';

/**
 * A visually distinctive block of content.
 */
const Panel = styled(Flex).attrs({
	p: 3,
})`
	border: 1px solid ${themeGet('colors.light')};
	border-radius: ${themeGet('radii.base')};
`;

Panel.propTypes = {
	children: PropTypes.node,
};

/** @component */
export default Panel;
