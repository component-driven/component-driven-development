import styled from 'styled-components';

const Heading = styled.h1`
	margin: ${props => props.theme.space[props.m]};
	margin-top: ${props => props.theme.space[props.mt]};
	margin-right: ${props => props.theme.space[props.mr]};
	margin-bottom: ${props => props.theme.space[props.mb]};
	margin-left: ${props => props.theme.space[props.ml]};
	font-weight: normal;
	font-family: ${props => props.theme.fonts.heading};
	font-size: ${props => props.theme.fontSizes[props.size]};
	color: ${props => props.theme.colors.base};
`;

Heading.defaultProps = {
	m: 0,
	size: 'xl',
};

/** @component */
export default Heading;
