import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@rebass/grid';
import Stack from 'stack-styled';
import Heading from '../../core/Heading';
import Text from '../../core/Text';

const Feature = ({ children }) => (
	/* Your code here */
	<div>{children}</div>
);

// Each of the components below should render appropriate styles and layout

Feature.Icon = ({ children }) => children;

Feature.Heading = ({ children }) => children;

Feature.Body = ({ children }) => children;

Feature.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Feature;
