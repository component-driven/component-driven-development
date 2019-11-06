import React from 'react';
import Box from './Box';

const Bar = props => (
	<Box
		bg="secondary"
		color="background"
		px="2px"
		py="1vh"
		height="6vh"
		fontSize="3.5vh"
		{...props}
	/>
);

export default Bar;
