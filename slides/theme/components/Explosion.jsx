import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import Center from '../layouts/Center';

const scale = keyframes`
	0% {
		transform: scale(1);
	}

	16% {
		transform: scale(-0.32);
	}

	28% {
		transform: scale(0.13);
	}

	44% {
		transform: scale(-0.05);
	}

	59% {
		transform: scale(0.02);
	}

	73% {
		transform: scale(-0.01);
	}

	88% {
		transform: scale(0);
	}

	100% {
		transform: scale(0);
	}

`;

const Emoji = styled.span`
	font-size: 40vmax;
`;

export default function Explosion({ symbol }) {
	return (
		<Center>
			<Emoji>{symbol}</Emoji>
		</Center>
	);
}

Explosion.propTypes = {
	symbol: PropTypes.string.isRequired,
};
