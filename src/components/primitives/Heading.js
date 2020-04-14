import React from 'react';
import { Text } from '../';

export default React.forwardRef((props, ref) => {
	return <Text as="h1" {...props} variant="heading" ref={ref} />;
});
