import styled from 'styled-components';
import Box from '../../components/primitives/Box';

// WORKSHOP_START
const Grid = styled(Box)({
	// Your styles here
});
// WORKSHOP_END
// FINAL_START
export const Grid = styled(Box)({
	display: 'grid',
});
// FINAL_END

Grid.propTypes = Box.propTypes;

export default Grid;
