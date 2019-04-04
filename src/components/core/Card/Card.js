import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@rebass/grid';
import { color, border, borderColor, borderRadius } from 'styled-system';
import styled from 'styled-components';
import Image from '../Image';

const Card = styled(Box).attrs({
	bg: 'bg',
	border: 'thin',
	borderColor: 'light',
	borderRadius: 'base',
})`
	${color};
	${border};
	${borderColor};
	${borderRadius};
	list-style: none;
`;

Card.propTypes = {
	children: PropTypes.node, // We could validate children of specific type here
};

Card.Image = props => <Image {...props} />;
Card.Body = ({ children }) => <Box p={4}>{children}</Box>;

/** @component */
export default Card;
