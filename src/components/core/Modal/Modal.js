import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styled from 'styled-components';
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
	position: absolute;
	top: ${props => props.theme.space[5]}px;
	left: ${props => props.theme.space[5]}px;
	right: ${props => props.theme.space[5]}px;
	bottom: ${props => props.theme.space[5]}px;
	border: 1px solid ${props => props.theme.colors.light};
	background: ${props => props.theme.colors.bg};
	overflow: auto;
	border-radius: ${props => props.theme.radii.base};
	outline: none;
`;

/** @component */
export default Modal;
