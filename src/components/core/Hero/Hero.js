import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
	space,
	color,
	backgroundImage,
	backgroundPosition,
} from 'styled-system';
import { Box } from '@rebass/grid';

/**
 * A hero
 */
const Hero = styled(Box)`
	${color};
	${backgroundImage};
	${backgroundPosition};
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	background-size: cover;
`;

Hero.propTypes = {
	...space.propTypes,
	...color.propTypes,
	...backgroundImage.propTypes,
	...backgroundPosition.propTypes,
	children: PropTypes.node,
};

Hero.defaultProps = {
	px: 4,
	py: 3,
	bg: 'bg',
};

/** @component */
export default Hero;
