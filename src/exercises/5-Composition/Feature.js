import React from 'react';
import PropTypes from 'prop-types';
import Stack from '../../components/core/Stack';
import Box from '../../components/core/Box';
import Heading from '../../components/core/Heading';
import Text from '../../components/core/Text';

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
