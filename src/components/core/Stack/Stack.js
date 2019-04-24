import styled from 'styled-components';
import Flex from '../Flex';

const Stack = styled(Flex).attrs(props => ({
	m: -(props.gap - 1),
}))`
	flex-wrap: wrap;
	> * {
		padding: ${props => props.theme.space[props.gap - 1]};
	}
`;

Stack.defaultProps = {
	gap: 0,
	flexDirection: 'column',
};

/** @component */
export default Stack;
