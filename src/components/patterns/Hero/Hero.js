import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, color, background } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import Box from '../../core/Box';

/**
 * A hero
 */
const Hero = styled(Box)`
	${color};
	${background};
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	background-size: cover;
`;

Hero.propTypes = {
	...propTypes.space,
	...propTypes.color,
	...propTypes.background,
	children: PropTypes.node,
};

Hero.defaultProps = {
	px: 4,
	py: 3,
	bg: 'bg',
};

/** @component */
export default Hero;
