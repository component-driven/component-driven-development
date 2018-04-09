import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'grid-styled';

/**
 * A visually distinctive block of content.
 */
const Card = styled(Box).attrs({})``;

Card.propTypes = {
	children: PropTypes.node,
};

/** @component */
export default Card;
