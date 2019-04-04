import styled from 'styled-components';
import { color, space, width, flex, order, alignSelf } from 'styled-system';

const Box = styled('div')``;

Box.propTypes = {
	...color.propTypes,
	...space.propTypes,
	...width.propTypes,
};

/** @component */
export default Box;
