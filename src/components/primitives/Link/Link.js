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
	&:focus {
		outline: 1px dashed ${props => props.theme.colors.focus};
		outline-offset: 2px;
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
