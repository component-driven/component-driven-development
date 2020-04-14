import React from 'react';
import PropTypes from 'prop-types';

/**
 * A component to render all text in the app.
 */
const Heading = props => <h1>{props.children}</h1>;

Heading.propTypes = {
	children: PropTypes.node,
};

/** @component */
export default Heading;
