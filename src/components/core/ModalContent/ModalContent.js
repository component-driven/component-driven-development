import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from '@rebass/grid';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Heading from '../Heading';

const CloseButton = styled.button.attrs({
	type: 'button',
	children: '×',
	'aria-label': 'Close',
})`
	border: 0;
	background: transparent;
	color: ${themeGet('colors.secondary')};
	font-family: ${themeGet('fonts.base')};
	font-size: 1.5rem;

	&:hover,
	&:focus,
	&:active {
		color: ${themeGet('colors.hover')};
		cursor: pointer;
	}

	&:focus {
		outline: 0;
		box-shadow: 0 0 0 2px ${themeGet('colors.focus')};
	}

	&::-moz-focus-inner {
		border: 0;
	}
`;

const Header = styled(Flex).attrs({
	as: 'header',
	mb: 3,
	p: 4,
})`
	border-bottom: 1px solid ${themeGet('colors.light')};
`;

/**
 * A modal content, should be used inside the `Modal` component.
 */
function ModalContent({ onRequestClose, title, children }) {
	return (
		<React.Fragment>
			<Header>
				<Heading size="l" as="h2" mr={3}>
					{title}
				</Heading>
				<Box ml="auto">
					<CloseButton onClick={onRequestClose} />
				</Box>
			</Header>
			<Box p={4}>{children}</Box>
		</React.Fragment>
	);
}

ModalContent.propTypes = {
	title: PropTypes.node.isRequired,
	children: PropTypes.node,
	onRequestClose: PropTypes.func,
};

export default ModalContent;
