import React from 'react';
import Stack from '../core/Stack';
import VisuallyHidden from '../core/VisuallyHidden';
import Feature from '../patterns/Feature';
import SvgFeatureDuck from './images/SvgFeatureDuck';
import SvgFeatureFireplace from './images/SvgFeatureFireplace';
import SvgFeatureMegaphone from './images/SvgFeatureMegaphone';

const Features = () => (
	<>
		<VisuallyHidden as="h2">Why Rent-o-dog</VisuallyHidden>
		<Stack
			gridColumnGap={4}
			gridRowGap={5}
			minColumnWidth={200}
			m={0}
			p={0}
			as="ul"
		>
			<Feature as="li">
				<Feature.Icon>
					<SvgFeatureFireplace width={80} />
				</Feature.Icon>
				<Feature.Heading>Emotional support</Feature.Heading>
				<Feature.Body>
					You’ll feel better after playing with a dog.
				</Feature.Body>
			</Feature>
			<Feature as="li">
				<Feature.Icon>
					<SvgFeatureMegaphone width={80} />
				</Feature.Icon>
				<Feature.Heading>Increased productivity</Feature.Heading>
				<Feature.Body>
					Dogs boost engagement, enthusiasm and creativity.
				</Feature.Body>
			</Feature>
			<Feature as="li">
				<Feature.Icon>
					<SvgFeatureDuck width={80} />
				</Feature.Icon>
				<Feature.Heading>Rubberducking</Feature.Heading>
				<Feature.Body>
					Expain your problem to a dog, not to a rubber duck.
				</Feature.Body>
			</Feature>
		</Stack>
	</>
);

export default Features;
