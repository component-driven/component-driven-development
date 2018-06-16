import { css } from 'styled-components';

/**
 * Text mixin: defines typography properties: base font family, custom
 * font-size and custom color. See theme.js for avaliable values.
 *
 * @param {string} [$.lineHeight=1] Line height
 * @param {string} [$.fontFamily='base'] Font family
 * @param {string} [$.fontSize='base'] Font size
 * @param {string} [$.fontWeight='base'] Font weight
 * @param {string} [$.color='base'] Color
 */
export const text = ({
	lineHeight = 1,
	fontFamily = 'base',
	fontSize = 'base',
	fontWeight = 'normal',
	color = 'base',
} = {}) => css`
	line-height: ${lineHeight};
	font-weight: ${fontWeight};
	font-family: ${props => props.theme.fontFamily[fontFamily]};
	font-size: ${props => props.theme.fontSize[fontSize]};
	color: ${props => props.theme.color[color]};
`;
