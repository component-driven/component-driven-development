import styled from 'styled-components';
import Box from '../Box';

export const Flex = styled(Box)({});

Flex.defaultProps = {
	display: 'flex',
};

Flex.propTypes = Box.propTypes;

export default Flex;
