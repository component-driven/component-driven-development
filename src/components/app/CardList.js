import React from 'react';
import PropTypes from 'prop-types';
import Stack from 'stack-styled';

const CardList = ({ children }) => (
	<Stack gridColumnGap={4} gridRowGap={5} minWidth={200} m={0} p={0} as="ul">
		{children}
	</Stack>
);

CardList.propTypes = {
	children: PropTypes.node,
};

export default CardList;
