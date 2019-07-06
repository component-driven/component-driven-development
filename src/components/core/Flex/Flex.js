import styled from 'styled-components';
import Box from '../Box';
import propTypes from '@styled-system/prop-types';

export const Flex = styled(Box)({});

Flex.defaultProps = {
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'row',
};

Flex.propTypes = {
	...propTypes.space,
	...propTypes.color,
	...propTypes.layout,
	...propTypes.flexbox,
};

export default Flex;
