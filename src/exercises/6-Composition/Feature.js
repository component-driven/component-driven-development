import React from 'react';
import PropTypes from 'prop-types';
import Stack from '../../components/primitives/Stack';
import Box from '../../components/primitives/Box';
import Heading from '../../components/primitives/Heading';
import Text from '../../components/primitives/Text';

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
