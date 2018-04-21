import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import Heading from '../Heading';

const CloseButton = styled.button.attrs({
	type: 'button',
	children: '×',
})`
	border: 0;
	background: transparent;
	color: ${props => props.theme.color.secondary};
	font-family: ${props => props.theme.fontFamily.base};
	font-size: 1.5rem;

	&:hover,
	&:focus,
	&:active {
		color: ${props => props.theme.color.hover};
		cursor: pointer;
	}

	&:focus {
		outline: 0;
		box-shadow: 0 0 0 2px ${props => props.theme.color.focus};
	}

	&::-moz-focus-inner {
		border: 0;
	}
`;

const Header = styled(Flex).attrs({
	is: 'header',
	mb: 2,
	p: 3,
})`
	border-bottom: 1px solid ${props => props.theme.color.light};
`;

/**
 * A modal content, should be used inside the `Modal` component.
 */
function ModalContent({ onRequestClose, title, children }) {
	return (
		<React.Fragment>
			<Header>
				<Heading size="gamma" is="h2" mr="2">
					{title}
				</Heading>
				<Box ml="auto">
					<CloseButton onClick={onRequestClose} />
				</Box>
			</Header>
			<Box p={3}>{children}</Box>
		</React.Fragment>
	);
}

ModalContent.propTypes = {
	title: PropTypes.node.isRequired,
	children: PropTypes.node,
	onRequestClose: PropTypes.func,
};

export default ModalContent;
