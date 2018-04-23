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
		.filter(x => x in QUALITIES)
		.map(x => QUALITIES[x]);

const DogInfo = ({ dog, ...props }) => (
	<Flex>
		<Box mr="2">
			<Text>
				About the breed:{' '}
				<Group separator=", " inline>
					{getQualities(dog)}
				</Group>.
			</Text>
		</Box>
		<Box ml="auto">
			<DogPhoto dog={dog} />
		</Box>
	</Flex>
);

DogInfo.propTypes = {
	dog: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
		kidFriendly: PropTypes.number,
		dogFriendly: PropTypes.number,
		lowShedding: PropTypes.number,
		easyToGroom: PropTypes.number,
		highEnergy: PropTypes.number,
		goodHealth: PropTypes.number,
		lowBarking: PropTypes.number,
		intelligence: PropTypes.number,
		easyToTrain: PropTypes.number,
		toleratesHot: PropTypes.number,
		toleratesCold: PropTypes.number,
	}),
};

export default DogInfo;
