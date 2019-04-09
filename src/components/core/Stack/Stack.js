import styled from 'styled-components';
import Flex from '../Flex';

const Stack = styled(Flex).attrs(props => ({
	m: -(props.gap - 1),
	flexDirection: 'column',
}))`
	flex-wrap: wrap;
	> * {
		padding: ${props => props.theme.space[props.gap - 1]};
	}
`;

Stack.defaultProps = {
	gap: 0,
};

/** @component */
export default Stack;
