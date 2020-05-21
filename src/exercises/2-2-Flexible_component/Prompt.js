import React from 'react';
import PropTypes from 'prop-types';

export default function Prompt({ message, defaultValue, onSubmit }) {
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
			}}
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
				<header
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<h2>{title}</h2>
					{showClose && (
						<button type="button" aria-label="Close" onClick={onClose}>
							×
						</button>
					)}
				</header>
				<label>
					{message}
					<br />
					<input
						type="text"
						value={value}
						onChange={event => setValue(event.target.value)}
					/>
				</label>
				<div>
					<button type="submit">OK</button>
				</div>
			</form>
		</div>
	);
}

Prompt.propTypes = {
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	defaultValue: PropTypes.string,
	onSubmit: PropTypes.func.isRequired,
};
