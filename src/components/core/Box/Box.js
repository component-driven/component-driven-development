import styled from 'styled-components';
import { space, color, layout, flexbox } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Box = styled('div')(
	{
		boxSizing: 'border-box',
	},
	space,
	color,
	layout,
	flexbox
);

Box.propTypes = {
	...propTypes.space,
	...propTypes.color,
	...propTypes.layout,
	...propTypes.flexbox,
};

/** @component */
export default Box;
