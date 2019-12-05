import styled from 'styled-components';
import Box from '../../components/primitives/Box';

export const Flex = styled(Box)({
	display: 'flex',
});

Flex.propTypes = Box.propTypes;

export default Flex;
