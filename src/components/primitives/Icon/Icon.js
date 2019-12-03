import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import VisuallyHidden from '../VisuallyHidden';
import theme from '../../../theme';

const DEFAULT_SIZE = 512;
const SIZES = { sm: 16, lg: 32 };
const ICONS = {
	dog: {
		path: `M496 96h-64l-7.16-14.31A32 32 0 0 0 396.22
			64H342.6l-27.28-27.28C305.23 26.64 288 33.78 288 48.03v149.84l128
			45.71V208h32c35.35 0 64-28.65 64-64v-32c0-8.84-7.16-16-16-16zm-112
			48c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16
			16zM96 224c-17.64 0-32-14.36-32-32 0-17.67-14.33-32-32-32S0 174.33 0
			192c0 41.66 26.83 76.85 64 90.1V496c0 8.84 7.16 16 16 16h64c8.84 0
			16-7.16 16-16V384h160v112c0 8.84 7.16 16 16 16h64c8.84 0 16-7.16
			16-16V277.55L266.05 224H96z`,
	},
	github: {
		path: `M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9c1.4,0.3,2.6,0.4,3.8,0.4c8.3,0,11.5-6.1,11.5-11.4
			c0-5.5-0.2-19.9-0.3-39.1c-8.4,1.9-15.9,2.7-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5c-10.2-26.5-24.9-33.6-24.9-33.6
			c-19.5-13.7-0.1-14.1,1.4-14.1c0.1,0,0.1,0,0.1,0c22.5,2,34.3,23.8,34.3,23.8c11.2,19.6,26.2,25.1,39.6,25.1c10.5,0,20-3.4,25.6-6
			c2-14.8,7.8-24.9,14.2-30.7c-49.7-5.8-102-25.5-102-113.5c0-25.1,8.7-45.6,23-61.6c-2.3-5.8-10-29.2,2.2-60.8c0,0,1.6-0.5,5-0.5
			c8.1,0,26.4,3.1,56.6,24.1c17.9-5.1,37-7.6,56.1-7.7c19,0.1,38.2,2.6,56.1,7.7c30.2-21,48.5-24.1,56.6-24.1c3.4,0,5,0.5,5,0.5
			c12.2,31.6,4.5,55,2.2,60.8c14.3,16.1,23,36.6,23,61.6c0,88.2-52.4,107.6-102.3,113.3c8,7.1,15.2,21.1,15.2,42.5
			c0,30.7-0.3,55.5-0.3,63c0,5.4,3.1,11.5,11.4,11.5c1.2,0,2.6-0.1,4-0.4C415.9,449.2,480,363.1,480,261.7C480,134.9,379.7,32,256,32z`,
	},
	pin: {
		path: `M256,48c-79.5,0-144,59.9-144,133.7c0,104,144,282.3,144,282.3s144-178.3,144-282.3C400,107.9,335.5,48,256,48z M256,238.9
		c-25.9,0-46.9-21-46.9-46.9s21-46.9,46.9-46.9s46.9,21,46.9,46.9S281.9,238.9,256,238.9z`,
	},
	star: {
		path: `M463,192l-147.1,0L271.2,58.6C269,52.1,262.9,48,256,48s-13,4.1-15.2,10.6L196.1,192H48h0c-8.8,0-16,7.2-16,16
		c0,0.9,0.1,1.9,0.3,2.7c0.2,3.5,1.8,7.4,6.7,11.3l120.9,85.2l-46.4,134.9c-2.3,6.5,0,13.8,5.5,18c2.9,2.1,5.6,3.9,9,3.9
		c3.3,0,7.2-1.7,10-3.6l118-84.1l118,84.1c2.8,2,6.7,3.6,10,3.6c3.4,0,6.1-1.7,8.9-3.9c5.6-4.2,7.8-11.4,5.5-18l-46.4-134.9l119.9-86
		l2.9-2.5c2.6-2.8,5.2-6.6,5.2-10.7C480,199.2,471.8,192,463,192z`,
	},
	starHalf: {
		path: `M463,192l-147.1,0L271.2,58.6C269,52.1,262.9,48,256,48s-13,4.1-15.2,10.6L196.1,192H48h0c-8.8,0-16,7.2-16,16
		c0,0.9,0.1,1.9,0.3,2.7c0.2,3.5,1.8,7.4,6.7,11.3l120.9,85.2l-46.4,134.9c-2.3,6.5,0,13.8,5.5,18c2.9,2.1,5.6,3.9,9,3.9
		c3.3,0,7.2-1.7,10-3.6l118-84.1l118,84.1c2.8,2,6.7,3.6,10,3.6c3.4,0,6.1-1.7,8.9-3.9c5.6-4.2,7.8-11.4,5.5-18l-46.4-134.9l119.9-86
		l2.9-2.5c2.6-2.8,5.2-6.6,5.2-10.7C480,199.2,471.8,192,463,192z M415.6,227.2l-79.8,57.3c-10,7.2-14.2,20.2-10.2,31.8l30.1,87.7
		c1.3,3.7-2.9,6.8-6.1,4.6l-77.4-55.2c0,0-0.1-0.1-0.1-0.1c-10-7-16.1-18.3-16.1-30.5V113.3c0-2.2,3.1-2.7,3.8-0.6v0l29.6,88.2
		c3.8,11.4,14.5,19.1,26.5,19.1h0l97.3,0C417.1,220,418.7,225,415.6,227.2z`,
	},
	starOutline: {
		path: `M463,192l-147.1,0L271.2,58.6C269,52.1,262.9,48,256,48s-13,4.1-15.2,10.6L196.1,192H48h0c-8.8,0-16,7.2-16,16
		c0,0.9,0.1,1.9,0.3,2.7c0.2,3.5,1.8,7.4,6.7,11.3l120.9,85.2l-46.4,134.9c-2.3,6.5,0,13.8,5.5,18c2.9,2.1,5.6,3.9,9,3.9
		c3.3,0,7.2-1.7,10-3.6l118-84.1l118,84.1c2.8,2,6.7,3.6,10,3.6c3.4,0,6.1-1.7,8.9-3.9c5.6-4.2,7.8-11.4,5.5-18l-46.4-134.9l119.9-86
		l2.9-2.5c2.6-2.8,5.2-6.6,5.2-10.7C480,199.2,471.8,192,463,192z M335.8,284.5c-10,7.2-14.2,20.2-10.2,31.8l30.1,87.7
		c1.3,3.7-2.9,6.8-6.1,4.6l-77.4-55.2c-4.9-3.5-10.6-5.2-16.3-5.2c-5.7,0-11.4,1.7-16.2,5.2l-77.4,55.1c-3.2,2.3-7.4-0.9-6.1-4.6
		l30.1-87.7c4-11.8-0.2-24.8-10.3-32l-81-57.1c-3.2-2.2-1.6-7.3,2.3-7.3h98.7c12,0,22.7-7.7,26.5-19.1l29.6-88.2
		c1.2-3.6,6.4-3.6,7.6,0l29.6,88.2c3.8,11.4,14.5,19.1,26.5,19.1h0l97.3,0c3.9,0,5.5,5,2.3,7.2L335.8,284.5z`,
	},
	twitter: {
		path: `M492,109.5c-17.4,7.7-36,12.9-55.6,15.3c20-12,35.4-31,42.6-53.6c-18.7,11.1-39.4,19.2-61.5,23.5
		C399.8,75.8,374.6,64,346.8,64c-53.5,0-96.8,43.4-96.8,96.9c0,7.6,0.8,15,2.5,22.1c-80.5-4-151.9-42.6-199.6-101.3
		c-8.3,14.3-13.1,31-13.1,48.7c0,33.6,17.2,63.3,43.2,80.7C67,210.7,52,206.3,39,199c0,0.4,0,0.8,0,1.2c0,47,33.4,86.1,77.7,95
		c-8.1,2.2-16.7,3.4-25.5,3.4c-6.2,0-12.3-0.6-18.2-1.8c12.3,38.5,48.1,66.5,90.5,67.3c-33.1,26-74.9,41.5-120.3,41.5
		c-7.8,0-15.5-0.5-23.1-1.4C62.8,432,113.7,448,168.3,448C346.6,448,444,300.3,444,172.2c0-4.2-0.1-8.4-0.3-12.5
		C462.6,146,479,129,492,109.5z`,
	},
};

const IconBase = styled.span`
	display: inline-block;
	line-height: 1;

	& path {
		fill: ${props => props.theme.colors[props.color] || 'currentColor'};
	}
`;

const Icon = ({ name, size, alt, ...rest }) => {
	if (!ICONS[name]) {
		throw new Error(`Icon "${name}" not found`);
	}

	const { width = DEFAULT_SIZE, height = DEFAULT_SIZE, path } = ICONS[name];
	const a11yProps = alt ? { role: 'img' } : { 'aria-hidden': 'true' };
	const displaySize = SIZES[size];
	return (
		<IconBase {...rest}>
			{alt && <VisuallyHidden>{alt}</VisuallyHidden>}
			<svg
				{...a11yProps}
				xmlns="http://www.w3.org/2000/svg"
				viewBox={`0 0 ${width} ${height}`}
				width={displaySize}
				height={displaySize}
			>
				<path d={path} />
			</svg>
		</IconBase>
	);
};

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	color: PropTypes.oneOf(Object.keys(theme.colors)),
	size: PropTypes.oneOf(['sm', 'lg']),
	alt: PropTypes.string.isRequired,
};

Icon.defaultProps = {
	variant: 'currentColor',
	size: 'sm',
};

/**
 * Icon
 */
export default Icon;
