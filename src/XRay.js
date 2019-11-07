import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { useHotkeys } from 'react-hotkeys-hook';
import Box from './components/core/Box';
import Flex from './components/core/Flex';
import Stack from 'stack-styled';

const flexClassName = `${Flex}`.replace('.', '');

const BoxStyle = createGlobalStyle`
	*${Box}:not([class*=${flexClassName}]) {
		outline: 2px solid rgba(42, 128, 0, 0.5) !important;
		outline-offset: -2px;
		background-color: rgba(42, 128, 0, 0.1);
	}
	`;

const FlexStyle = createGlobalStyle`
	*${Flex} {
		outline: 2px solid rgba(53, 107, 255, 0.5) !important;
		outline-offset: -2px;

		> * {
			outline: 1px solid rgba(53, 107, 255, 0.3);
			outline-offset: -1px;
			background-color: rgba(53, 107, 255, 0.1);
		}
	}
	`;

const StackStyle = createGlobalStyle`
	*${Stack} {
		outline: 2px solid rgba(199, 27, 0, 0.5) !important;
		outline-offset: -2px;

		> * {
			outline: 1px solid rgba(199, 27, 0, 0.3);
			outline-offset: -1px;
			background-color: rgba(199, 27, 0, 0.1);
		}
	}
`;

export default function XRay() {
	const [showBox, setShowBox] = useState(false);
	useHotkeys('b', () => setShowBox(value => !value));
	const [showFlex, setShowFlex] = useState(false);
	useHotkeys('f', () => setShowFlex(value => !value));
	const [showStack, setShowStack] = useState(false);
	useHotkeys('s', () => setShowStack(value => !value));
	return (
		<>
			{showBox && <BoxStyle />}
			{showFlex && <FlexStyle />}
			{showStack && <StackStyle />}
		</>
	);
}
