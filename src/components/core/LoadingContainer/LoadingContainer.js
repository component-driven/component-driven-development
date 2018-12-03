import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Overlay = styled.div`
	opacity: ${props => props.isLoading && 0.5};
	pointer-events: ${props => props.isLoading && 'none'};
`;

const LoadingContainer = ({ isLoading, children }) => (
	<Overlay isLoading={isLoading} aria-busy={isLoading ? 'true' : 'false'}>
		{children}
	</Overlay>
);

LoadingContainer.propTypes = {
	isLoading: PropTypes.bool,
	children: PropTypes.node,
};

export default LoadingContainer;
