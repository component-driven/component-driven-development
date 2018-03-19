import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grid-styled';
import styled from 'styled-components';

const Base = styled.p`
	font-family: ${props => props.theme.fontFamily.base};
	font-size: ${props => props.theme.fontSize[props.size]};
	color: ${props => props.theme.color.base};
	font-weight: normal;
`;

const Container = Base.withComponent(Box);

const Heading = ({ children, ...props }) => {
	return (
		<Container m={0} {...props}>
			{children}
		</Container>
	);
};

Heading.propTypes = {
	is: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	size: PropTypes.oneOf(['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta'])
		.isRequired,
	children: PropTypes.node,
};

export default Heading;
