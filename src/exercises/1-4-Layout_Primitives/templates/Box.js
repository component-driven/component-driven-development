import styled from 'styled-components';
import { space, color, border, layout, flexbox, grid } from 'styled-system';
import propTypes from '@styled-system/prop-types';

// WORKSHOP_START
const Box = styled('div')(
	{
		// Your styles here
	}
	// styled-system functions
);
// WORKSHOP_END
// FINAL_START
const Box = styled('div')(
	{
		boxSizing: 'border-box',
	},
	space,
	color,
	border,
	layout,
	flexbox,
	grid
);
// FINAL_END

Box.propTypes = {
	...propTypes.space,
	...propTypes.color,
	...propTypes.border,
	...propTypes.layout,
	...propTypes.flexbox,
	...propTypes.grid,
};

/** @component */
export default Box;
