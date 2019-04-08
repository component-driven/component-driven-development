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
	/* Your styles here */
`;

Hero.propTypes = {
	...color.propTypes,
	children: PropTypes.node,
};

Hero.defaultProps = {
	bg: 'bg',
};

/** @component */
export default Hero;
