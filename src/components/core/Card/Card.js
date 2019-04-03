import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@rebass/grid';
import Stack from 'stack-styled';
import { color, border, borderColor, borderRadius } from 'styled-system';
import styled from 'styled-components';
import Image from '../Image';

const CardStack = styled(Stack)`
	${color};
	${border};
	${borderColor};
	${borderRadius};
`;

function Card({ children, ...rest }) {
	return (
		<CardStack
			{...rest}
			gap={0}
			bg="bg"
			border="thin"
			borderColor="light"
			borderRadius="base"
		>
			{children}
		</CardStack>
	);
}

Card.propTypes = {
	children: PropTypes.node, // We could validate children of specific type here
};

Card.Image = props => <Image {...props} />;
Card.Body = ({ children }) => <Box p={4}>{children}</Box>;

/**
 * Media object
 * @component
 */
export default Card;
