import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { getDownArrowIcon } from '../../components/core/Select/icons';

/**
 * A select.
 */
const Select = styled.select`
	appearance: none;
	user-select: none;

	/* Down arrow icon */
	background-image: ${props => getDownArrowIcon(props.theme.colors.secondary)};
	background-position: center right ${themeGet('space.3')};
	background-repeat: no-repeat;

	/* Your styles here */
`;

/** @component */
export default Select;
