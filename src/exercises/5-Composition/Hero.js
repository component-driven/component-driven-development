import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, color, background } from 'styled-system';
import Box from '../../components/primitives/Box';

/**
 * A hero
 */
const Hero = styled(Box)`
	${color};
	/* Your styles here */
`;

Hero.propTypes = {
	children: PropTypes.node,
};

Hero.defaultProps = {
	bg: 'bg',
};

/** @component */
export default Hero;
