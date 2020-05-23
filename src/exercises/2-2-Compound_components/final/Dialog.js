import React from 'react';
import PropTypes from 'prop-types';

export function Dialog({ children }) {
	return (
		<div
			style={{
				position: 'fixed',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				zIndex: 9999,
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
			}}
		>
			{children}
		</div>
	);
}

Dialog.propTypes = {
	children: PropTypes.node.isRequired,
};

export function DialogContent({ children }) {
	return (
		<div
			style={{
				position: 'relative',
				backgroundColor: 'white',
				border: '1px solid gainsboro',
			}}
		>
			{children}
		</div>
	);
}

DialogContent.propTypes = {
	children: PropTypes.node.isRequired,
};

export function DialogBackdrop({ onClose }) {
	return (
		<div
			style={{
				position: 'fixed',
				zIndex: -1,
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
				backgroundColor: 'hsla(0,0%,0%,0.5)',
			}}
			onClick={onClose}
		/>
	);
}

DialogBackdrop.propTypes = {
	onClose: PropTypes.func.isRequired,
};

export function DialogCloseButton({ onClose }) {
	return (
		<button
			type="button"
			aria-label="Close"
			onClick={onClose}
			style={{
				position: 'absolute',
				top: '1rem',
				right: '1rem',
			}}
		>
			×
		</button>
	);
}

DialogCloseButton.propTypes = {
	onClose: PropTypes.func.isRequired,
};

export function DialogHeader({ children }) {
	return (
		<header style={{ padding: '1rem 3rem 1rem 1rem' }}>
			<h2 style={{ margin: 0 }}>{children}</h2>
		</header>
	);
}

DialogHeader.propTypes = {
	children: PropTypes.node.isRequired,
};

export function DialogBody({ children }) {
	return <div style={{ padding: '1rem' }}>{children}</div>;
}

DialogBody.propTypes = {
	children: PropTypes.node.isRequired,
};

export function DialogFooter({ children }) {
	return (
		<footer style={{ padding: '1rem', textAlign: 'right' }}>{children}</footer>
	);
}

DialogFooter.propTypes = {
	children: PropTypes.node.isRequired,
};
