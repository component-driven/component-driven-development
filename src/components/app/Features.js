import React from 'react';
import VisuallyHidden from '../core/VisuallyHidden';
import CardList from './CardList';
import Feature from './Feature';
import SvgFeatureDuck from './images/SvgFeatureDuck';
import SvgFeatureFireplace from './images/SvgFeatureFireplace';
import SvgFeatureMegaphone from './images/SvgFeatureMegaphone';

const Features = () => (
	<>
		<VisuallyHidden>
			<h2>Why Rent-o-dog</h2>
		</VisuallyHidden>
		<CardList>
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
		</CardList>
	</>
);

export default Features;
