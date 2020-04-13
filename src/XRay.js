import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { useHotkeys } from 'react-hotkeys-hook';
import { Box, Flex, Grid, Stack } from './components';

const stackClassName = `${Stack}`.replace('.', '');

const BoxStyle = createGlobalStyle`
	*${Box} {
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

const GridStyle = createGlobalStyle`
	*${Grid}:not([class*=${stackClassName}]) {
		outline: 2px solid rgba(215,115,6,0.5) !important;
		outline-offset: -2px;

		> * {
			outline: 1px solid rgba(215,115,6,0.3);
			outline-offset: -1px;
			background-color: rgba(215,115,6,0.1);
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
	const [showFlex, setShowFlex] = useState(false);
	const [showGrid, setShowGrid] = useState(false);
	const [showStack, setShowStack] = useState(false);
	useHotkeys('b', () => setShowBox(value => !value));
	useHotkeys('f', () => setShowFlex(value => !value));
	useHotkeys('g', () => setShowGrid(value => !value));
	useHotkeys('s', () => setShowStack(value => !value));
	return (
		<>
			{showBox && <BoxStyle />}
			{showFlex && <FlexStyle />}
			{showGrid && <GridStyle />}
			{showStack && <StackStyle />}
		</>
	);
}
