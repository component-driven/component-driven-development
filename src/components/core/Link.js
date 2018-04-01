import PropTypes from 'prop-types';
import styled from 'styled-components';

const Link = styled.a`
	&,
	&:link,
	&:visited {
		color: ${props => (props.shy ? 'inherit' : props.theme.color.link)};
	}
	&:hover,
	&:focus,
	&:active {
		color: ${props => props.theme.color.hover};
	}
`;

Link.propTypes = {
	shy: PropTypes.bool,
};

/** @component */
export default Link;
