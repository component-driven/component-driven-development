import React from 'react';
import { Box } from 'grid-styled';
import Text from '../core/Text';
import DogPhoto from './DogPhoto';
import Panel from '../core/Panel';

const DogCard = ({ dog }) => (
	<Panel p={2} flexDirection="column" alignItems="center">
		<DogPhoto dog={dog} />
		<Box>
			<Text variant="secondary" is="h3">
				{dog.name}
			</Text>
		</Box>
	</Panel>
);

export default DogCard;
