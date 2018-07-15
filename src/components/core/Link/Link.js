import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * A link.
 */
const Link = styled.a`
	&,
	&:link,
	&:visited {
		color: ${props => (props.shy ? 'inherit' : props.theme.colors.primary)};
	}
	&:hover,
	&:focus,
	&:active {
		color: ${props => props.theme.colors.hover};
	}
`;

Link.propTypes = {
	/** Has text color by default */
	shy: PropTypes.bool,
};

Link.defaultProps = {
	shy: false,
};

/** @component */
export default Link;
