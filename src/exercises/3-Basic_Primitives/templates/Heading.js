import React from 'react';
import PropTypes from 'prop-types';
// FINAL_START
import { Text } from '../../../components';
// FINAL_END

/**
 * A component to render all text in the app.
 */
// WORKSHOP_START
const Heading = props => <h1>{props.children}</h1>;
// WORKSHOP_END
// FINAL_START
const Heading = props => <Text as="h1" {...props} variant="heading" />;
// FINAL_END

Heading.propTypes = {
	children: PropTypes.node,
};

/** @component */
export default Heading;
