import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Appear from './Appear';
// import { style, getPx } from 'styled-system';

// const columns = style({
// 	prop: 'columns',
// 	cssProperty: 'columns'
// });
//
// const columnGap = style({
// 	prop: 'columnGap',
// 	cssProperty: 'columnGap',
// 	key: 'space',
// 	transformValue: getPx
// });

const Container = styled('ul')();

export default function List({ appear, children, ...props }) {
	if (appear) {
		return (
			<Container {...props}>
				<Appear>{children}</Appear>
			</Container>
		);
	} else {
		return <Container {...props}>{children}</Container>;
	}
}

List.propTypes = {
	appear: PropTypes.bool,
	// ...columns.propTypes,
	// ...columnGap.propTypes
};

List.defaultProps = {
	appear: true,
	// columnGap: '8vw'
};

export const OL = props => <List as="ol" {...props} />;
export const UL = props => <List as="ul" {...props} />;
