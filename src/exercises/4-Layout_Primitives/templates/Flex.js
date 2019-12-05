import styled from 'styled-components';
import Box from '../../components/primitives/Box';

// WORKSHOP_START
const Flex = styled(Box)({
	// Your styles here
});
// WORKSHOP_END
// FINAL_START
export const Flex = styled(Box)({
	display: 'flex',
});
// FINAL_END

Flex.propTypes = Box.propTypes;

export default Flex;
