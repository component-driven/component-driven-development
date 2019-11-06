import styled from '@emotion/styled';
import {
	alignItems,
	justifyContent,
	flex,
	flexWrap,
	flexDirection,
	flexBasis,
} from 'styled-system';
import Box from './Box';

export const Flex = styled(Box)(
	{
		display: 'flex',
	},
	alignItems,
	justifyContent,
	flex,
	flexWrap,
	flexDirection,
	flexBasis
);

Flex.defaultProps = {
	justifyContent: 'center',
	flexDirection: 'row',
};

export default Flex;
