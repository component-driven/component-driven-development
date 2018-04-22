import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'grid-styled';

/**
 * A visually distinctive block of content.
 */
const Panel = styled(Box).attrs({
	p: 3,
})`
	border: 1px solid ${props => props.theme.color.light};
	border-radius: ${props => props.theme.borderRadius.base};
`;

Panel.propTypes = {
	children: PropTypes.node,
};

/** @component */
export default Panel;
