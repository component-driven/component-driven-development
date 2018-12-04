import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
	color,
	backgroundSize,
	backgroundImage,
	backgroundPosition,
	minHeight,
} from 'styled-system';
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
	${backgroundPosition};
	${backgroundImage};
	${minHeight};
	display: flex;
	flex-direction: column;
	justify-content: center;
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
	/** Minimum height */
	minHeight: PropTypes.number,
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
