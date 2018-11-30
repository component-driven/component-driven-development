import React from 'react';
import CardList from './CardList';
import Feature from './Feature';
import SvgFeatureDuck from './images/SvgFeatureDuck';
import SvgFeatureFireplace from './images/SvgFeatureFireplace';
import SvgFeatureMegaphone from './images/SvgFeatureMegaphone';

const Features = () => (
	<CardList>
		<Feature imageComponent={SvgFeatureFireplace} title="Emotional support">
			You’ll feel better after playing with a dog.
		</Feature>
		<Feature
			imageComponent={SvgFeatureMegaphone}
			title="Increased productivity"
		>
			Dogs boost engagement, enthusiasm and creativity.
		</Feature>
		<Feature imageComponent={SvgFeatureDuck} title="Rubberducking">
			Expain your problem to a dog, not to a rubber duck.
		</Feature>
	</CardList>
);

export default Features;
