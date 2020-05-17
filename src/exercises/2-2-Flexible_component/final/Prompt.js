import React from 'react';
import PropTypes from 'prop-types';

export default function Prompt({
	message,
	defaultValue,
	showClose,
	showCancel,
	showBackdrop,
	onSubmit,
	onClose,
}) {
	const [value, setValue] = React.useState(defaultValue);
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
				backgroundColor: showBackdrop ? 'hsla(0,0%,0%,0.5)' : undefined,
			}}
			onClick={showBackdrop ? onClose : undefined}
		>
			<form
				onSubmit={event => {
					event.preventDefault();
					onSubmit(value);
				}}
				style={{
					padding: '1rem',
					backgroundColor: 'white',
					border: '1px solid gainsboro',
				}}
			>
				{showClose && (
					<button type="button" aria-label="Close" onClick={onClose}>
						×
					</button>
				)}
				<label>
					<h2>{message}</h2>
					<input
						type="text"
						value={value}
						onChange={event => setValue(event.target.value)}
					/>
				</label>
				<div>
					<button type="submit">OK</button>
					{showCancel && (
						<button type="button" onClick={onClose}>
							Cancel
						</button>
					)}
				</div>
			</form>
		</div>
	);
}

Prompt.propTypes = {
	message: PropTypes.string.isRequired,
	defaultValue: PropTypes.string,
	showClose: PropTypes.bool,
	showCancel: PropTypes.bool,
	showBackdrop: PropTypes.bool,
	onSubmit: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired,
};
