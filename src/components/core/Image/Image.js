import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
	max-width: 100%;
	width: max-content; // Fit the content
	height: auto; // Do not change the aspect ratio
	vertical-align: middle; // Remove white space below the image
`;

const Image = ({ alt, src, ...rest }) => <Img src={src} alt={alt} {...rest} />;

Image.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};

export default Image;
