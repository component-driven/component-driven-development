import styled from 'styled-components';
import {
	space,
	color,
	width,
	height,
	flex,
	order,
	alignSelf,
} from 'styled-system';

const Box = styled('div')(
	{
		boxSizing: 'border-box',
		listStyle: 'none',
	},
	space,
	color,
	width,
	height,
	flex,
	order,
	alignSelf
);

Box.propTypes = {
	...space.propTypes,
	...color.propTypes,
	...width.propTypes,
	...height.propTypes,
};

/** @component */
export default Box;
