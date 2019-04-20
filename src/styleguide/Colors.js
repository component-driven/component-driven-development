import React from 'react';
import { Swatches, ColorSwatch } from './tokens';
import theme from '../theme';

export default function() {
	return (
		<Swatches items={theme.colors}>
			{(key, value) => (
				<ColorSwatch
					key={key}
					name={key}
					color={value}
					token={`colors.${key}`}
				/>
			)}
		</Swatches>
	);
}
