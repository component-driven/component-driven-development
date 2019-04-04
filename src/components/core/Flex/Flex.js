import styled from 'styled-components';
import {
	flexWrap,
	flexDirection,
	alignItems,
	justifyContent,
} from 'styled-system';
import Box from '../Box';

const Flex = styled(Box)(
	{
		display: 'flex',
	},
	flexWrap,
	flexDirection,
	alignItems,
	justifyContent
);

Flex.propTypes = {
	...flexWrap.propTypes,
	...flexDirection.propTypes,
	...alignItems.propTypes,
	...justifyContent.propTypes,
};

/** @component */
export default Flex;
