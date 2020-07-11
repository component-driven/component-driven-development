import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../../components';

/**
 * A component to render all text in the app.
 */
const Heading = props => <Text as="h1" {...props} variant="heading" />;

Heading.propTypes = {
	children: PropTypes.node,
};

/** @component */
export default Heading;
