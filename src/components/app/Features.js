import React from 'react';
import Stack from 'stack-styled';
import VisuallyHidden from '../core/VisuallyHidden';
import Feature from './Feature';
import SvgFeatureDuck from './images/SvgFeatureDuck';
import SvgFeatureFireplace from './images/SvgFeatureFireplace';
import SvgFeatureMegaphone from './images/SvgFeatureMegaphone';

const Features = () => (
	<>
		<VisuallyHidden as="h2">Why Rent-o-dog</VisuallyHidden>
		<Stack gridColumnGap={4} gridRowGap={5} minWidth={200} m={0} p={0} as="ul">
			<Feature
				as="li"
				imageComponent={SvgFeatureFireplace}
				title="Emotional support"
			>
				You’ll feel better after playing with a dog.
			</Feature>
			<Feature
				as="li"
				imageComponent={SvgFeatureMegaphone}
				title="Increased productivity"
			>
				Dogs boost engagement, enthusiasm and creativity.
			</Feature>
			<Feature as="li" imageComponent={SvgFeatureDuck} title="Rubberducking">
				Expain your problem to a dog, not to a rubber duck.
			</Feature>
		</Stack>
	</>
);

export default Features;
