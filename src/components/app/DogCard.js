import React from 'react';
import { Box } from 'grid-styled';
import Text from '../core/Text';
import DogPhoto from './DogPhoto';
import Panel from '../core/Panel';

const DogCard = ({ id, breed }) => (
	<Panel p={2} flexDirection="column" alignItems="center">
		<DogPhoto id={id} breed={breed} />
		<Box>
			<Text secondary is="h3">
				{breed}
			</Text>
		</Box>
	</Panel>
);

export default DogCard;
