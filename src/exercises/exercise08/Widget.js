import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grid-styled';
import Text from '../../components/core/Text';

/**
 * A container for a form control with a label.
 */
const Widget = ({ label, children }) => {
	return <div>Your code here</div>;
};

Widget.propTypes = {
	label: PropTypes.node,
	children: PropTypes.node,
};

export default Widget;
