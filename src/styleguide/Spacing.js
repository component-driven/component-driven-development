import React from 'react';
import { Swatches, SpacingSwatch } from './tokens';
import theme from '../theme';

export default function() {
	return (
		<Swatches items={theme.space}>
			{(key, value) => (
				<SpacingSwatch
					key={key}
					name={key}
					size={value}
					token={`space[${key}]`}
				/>
			)}
		</Swatches>
	);
}
