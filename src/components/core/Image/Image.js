import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ alt, src, width, height, ...rest }) => (
	<img src={src} alt={alt} width={width} height={height} {...rest} />
);

Image.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
};

export default Image;
