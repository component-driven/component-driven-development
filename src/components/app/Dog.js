import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Modal from '../core/Modal';
import DogCard from './DogCard';
import DogInfo from './DogInfo';

const Button = styled(DogCard)`
	cursor: pointer;

	&:hover,
	&:focus,
	&:active {
		border: 1px solid ${themeGet('colors.focus')};
	}

	&:focus {
		outline: 0;
		box-shadow: 0 0 0 2px ${themeGet('colors.focus')};
	}

	&::-moz-focus-inner {
		border: 0;
	}
`;

const DogButton = props => <Button is="button" {...props} />;

class Dog extends Component {
	state = {
		isModalOpen: false,
	};

	handleOpenModal = () => {
		this.setState({ isModalOpen: true });
	};

	handleCloseModal = () => {
		this.setState({ isModalOpen: false });
	};

	render() {
		const { dog } = this.props;
		return (
			<React.Fragment>
				<Modal
					title={dog.name}
					isOpen={this.state.isModalOpen}
					onRequestClose={this.handleCloseModal}
				>
					<DogInfo dog={dog} />
				</Modal>
				<DogButton onClick={this.handleOpenModal} dog={dog} />
			</React.Fragment>
		);
	}
}

Dog.propTypes = {
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

export default Dog;
