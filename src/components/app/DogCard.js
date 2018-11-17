import React from 'react';
import Text from '../core/Text';
import DogPhoto from './DogPhoto';
import Panel from '../core/Panel';

const DogCard = ({ dog, ...props }) => (
	<Panel {...props} p={2} flexDirection="column" alignItems="center">
		<DogPhoto dog={dog} />
		<div>
			<Text variant="secondary" as="h3">
				{dog.name}
			</Text>
		</div>
	</Panel>
);

export default DogCard;
