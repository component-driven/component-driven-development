import React from 'react';
import { Text } from '../';

export default React.forwardRef((props, ref) => {
	return <Text variant="heading" as="h1" ref={ref} {...props} />;
});
