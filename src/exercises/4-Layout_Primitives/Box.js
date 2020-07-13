import styled from 'styled-components';
import { space, color, border, layout, flexbox, grid } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Box = styled('div')(
	{
		// Your styles here
	}
	// styled-system functions
);

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
