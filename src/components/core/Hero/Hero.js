import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, backgroundSize, backgroundImage } from 'styled-system';
import { Box } from '@rebass/grid';

const getBackgroundCss = image =>
	image && !/\(/.test(image) ? `url(${image})` : image;

/**
 * A hero
 */
const Hero = styled(Box).attrs({
	backgroundImage: props => getBackgroundCss(props.backgroundImage),
})`
	${color};
	${backgroundSize};
	${backgroundImage};
	text-align: center;
`;

Hero.propTypes = {
	/** Background image (URL or CSS property value) */
	backgroundImage: PropTypes.string,
	/** Background color */
	bg: PropTypes.string,
	/** Horizontal padding */
	px: PropTypes.number,
	/** Vertical padding */
	py: PropTypes.number,
	children: PropTypes.node,
};

Hero.defaultProps = {
	px: 5,
	py: 7,
	bg: 'bg',
	backgroundSize: 'cover',
};

/** @component */
export default Hero;
