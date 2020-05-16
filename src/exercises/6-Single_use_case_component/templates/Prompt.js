import React from 'react';
import PropTypes from 'prop-types';

// WORKSHOP_START
export default function Prompt(props) {
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
			<div
				style={{
					padding: '1rem',
					backgroundColor: 'white',
					border: '1px solid gainsboro',
				}}
			></div>
		</div>
	);
}

Prompt.propTypes = {};
// WORKSHOP_END
// FINAL_START
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
				</div>
			</form>
		</div>
	);
}

Prompt.propTypes = {
	message: PropTypes.string.isRequired,
	defaultValue: PropTypes.string,
	onSubmit: PropTypes.func.isRequired,
};
// FINAL_END
