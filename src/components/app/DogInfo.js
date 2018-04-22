import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import Group from 'react-group';
import Text from '../core/Text';
import DogPhoto from './DogPhoto';

const QUALITIES = {
	kidFriendly: 'kid friendly',
	dogFriendly: 'dog friendly',
	lowShedding: 'low shedding',
	easyToGroom: 'easy to groom',
	highEnergy: 'high energy',
	goodHealth: 'good health',
	lowBarking: 'low barking',
	intelligence: 'intelligent',
	easyToTrain: 'easy to train',
	toleratesHot: 'tolerates hot',
	toleratesCold: 'tolerates cold',
};

const getQualities = values =>
	Object.keys(values)
		.filter(x => values[x] >= 4)
		.map(x => QUALITIES[x]);

const DogInfo = ({ id, breed, ...props }) => (
	<Flex>
		<Box mr="2">
			<Text>
				About the breed:{' '}
				<Group separator=", " inline>
					{getQualities(props)}
				</Group>.
			</Text>
		</Box>
		<Box ml="auto">
			<DogPhoto id={id} breed={breed} />
		</Box>
	</Flex>
);

DogInfo.propTypes = {
	id: PropTypes.string,
	breed: PropTypes.string,
};

export default DogInfo;
