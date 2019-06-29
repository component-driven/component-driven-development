import PropTypes from 'prop-types';
import styled from 'styled-components';
import { background } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import Flex from '../../core/Flex';

/**
 * A hero
 */
const Hero = styled(Flex)(
	{
		textAlign: 'center',
	},
	background
);

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
	backgroundSize: 'cover',
	flexDirection: 'column',
};

/** @component */
export default Hero;
