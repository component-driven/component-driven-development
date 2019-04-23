import React from 'react';
import { Swatches, ColorSwatch } from './tokens';

function Colors({ colors, parentKey }) {
	return (
		<Swatches
			items={colors}
			minWidth={200}
			gap={parentKey ? 0 : 2}
			renderItem={(key, value) => {
				const name = [parentKey, key].filter(val => val != null).join('.');
				return Array.isArray(value) ? (
					<Colors colors={value} parentKey={key} />
				) : (
					<ColorSwatch
						key={key}
						name={name}
						color={value}
						token={`colors.${name}`}
					/>
				);
			}}
		/>
	);
}

export default Colors;
