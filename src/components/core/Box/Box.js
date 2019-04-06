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
