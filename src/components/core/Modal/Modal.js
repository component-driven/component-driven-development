import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import ModalContent from '../ModalContent';

// Connect with the app root element for accessibility
// ModalBase.setAppElement('#root');

/**
 * A modal.
 */
function ModalBase({ title, isOpen, onRequestClose, children, ...props }) {
	return (
		<ReactModal isOpen={isOpen} onRequestClose={onRequestClose} {...props}>
			<ModalContent title={title} onRequestClose={onRequestClose}>
				{children}
			</ModalContent>
		</ReactModal>
	);
}

ModalBase.propTypes = {
	title: PropTypes.node.isRequired,
	isOpen: PropTypes.bool,
	onRequestClose: PropTypes.func,
	children: PropTypes.node,
};

const Modal = styled(ModalBase)`
	top: ${themeGet('space.5')};
	left: ${themeGet('space.5')};
	right: ${themeGet('space.5')};
	bottom: ${themeGet('space.5')};
	position: absolute;
	background-color: ${themeGet('colors.bg')};
	border: 1px solid ${themeGet('colors.light')};
	border-radius: ${themeGet('radii.base')};
	overflow: auto;
	outline: none;
`;

/** @component */
export default Modal;
