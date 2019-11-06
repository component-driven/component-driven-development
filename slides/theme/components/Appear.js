import React from 'react';
import useSteps from '@mdx-deck/components/src/useSteps';

export const Appear = props => {
	const arr = React.Children.toArray(props.children);
	const step = useSteps(arr.length);
	const children = arr.map((child, i) =>
		React.cloneElement(child, {
			style: {
				...child.props.style,
				transition: 'opacity 1s ease-out',
				opacity: i < step ? 1 : 0,
			},
		})
	);

	return <>{children}</>;
};

export default Appear;
