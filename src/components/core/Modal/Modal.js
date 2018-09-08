import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import { themeGet, mixed } from 'styled-system';
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
	${({ theme }) =>
		mixed({
			theme,
			top: 5,
			left: 5,
			right: 5,
			bottom: 5,
			bg: 'bg',
			borderColor: 'light',
			borderRadius: 'base',
		})};
	top: ${themeGet('space.5')}px;
	left: ${themeGet('space.5')}px;
	right: ${themeGet('space.5')}px;
	bottom: ${themeGet('space.5')}px;
	position: absolute;
	border-width: 1px;
	border-style: solid;
	overflow: auto;
	outline: none;
`;

/** @component */
export default Modal;
