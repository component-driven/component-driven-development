import PropTypes from 'prop-types';
import { Box } from 'grid-styled';
import styled from 'styled-components';
import { text } from '../../../mixins';

/**
 * A text heading.
 */
const Heading = styled(Box).attrs({
	is: props => props.is,
	m: 0,
})`
	${props =>
		text({
			lineHeight: 1.2,
			fontFamily: 'heading',
			fontSize: props.size,
		})};
`;

Heading.propTypes = {
	/** Custom component or HTML tag */
	is: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	size: PropTypes.oneOf(['xxl', 'xl', 'l', 'base']),
	children: PropTypes.node,
};

Heading.defaultProps = {
	is: 'h1',
	size: 'xxl',
};

/** @component */
export default Heading;
