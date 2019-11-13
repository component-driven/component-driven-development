import React from 'react';
import PropTypes from 'prop-types';

const delay = 500;

export default function Delay({ children }) {
	const [isVisible, setVisible] = React.useState(false);

	React.useEffect(() => {
		const timer = setTimeout(() => setVisible(true), delay);
		return () => clearTimeout(timer);
	});

	return (
		<span style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
			{children}
		</span>
	);
}
