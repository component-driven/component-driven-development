import React from 'react';
import PropTypes from 'prop-types';
import Box from './Box';
import Stack from 'stack-styled';

function Figure({ src, alt, caption, gap = 4, ...props }) {
	return (
		<Stack as="figure" gridGap={gap} {...props}>
			<img src={src} alt={alt} />
			{caption && <Box as="figcaption">{caption}</Box>}
		</Stack>
	);
}

Figure.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	caption: PropTypes.node,
	gap: PropTypes.number,
};

export default Figure;
