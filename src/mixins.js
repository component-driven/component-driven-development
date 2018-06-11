import { css } from 'styled-components';

/**
 * Text mixin: defines typography properties: base font family, custom
 * font-size and custom color. See theme.js for avaliable values.
 *
 * @param {string} [$.family='base'] Font family
 * @param {string} [$.size='base'] Font size
 * @param {string} [$.color='base'] Color
 */
export const text = ({
	family = 'base',
	size = 'base',
	color = 'base',
} = {}) => css`
	font-weight: normal;
	font-family: ${props => props.theme.fontFamily[family]};
	font-size: ${props => props.theme.fontSize[size]};
	color: ${props => props.theme.color[color]};
`;
