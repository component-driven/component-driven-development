import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
	width: ${props => props.width}px;
	height: ${props => props.height}px;
`;

const Image = ({ alt, src, width, height, ...rest }) => (
	<Img src={src} alt={alt} width={width} height={height} {...rest} />
);

Image.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
};

export default Image;
