import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
	max-width: 100%;
	width: 100%;
	height: auto;
`;

const Image = ({ alt, src, ...rest }) => <Img src={src} alt={alt} {...rest} />;

Image.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};

export default Image;
