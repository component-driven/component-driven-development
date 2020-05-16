import React from 'react';
import PropTypes from 'prop-types';

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
