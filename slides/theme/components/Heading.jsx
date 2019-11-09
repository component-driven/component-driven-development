import React from 'react';
import styled from '@emotion/styled';
import {css} from 'theme-ui'

const fontSize = props => {
	const { length } = props.children;
	if (length <= 30) {
		return {fontSize: '10vmax'};
	}
	return {fontSize: '8vmax'};
};

const Heading = styled.h1(css({
	m: 0,
	maxWidth: '90vw',
	fontWeight: 'normal',
	lineHeight: 1.1,
	textAlign: 'center',
}), fontSize);

export default Heading;
