/* @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { Appear, Image } from 'mdx-deck';

function ThatGuy(props) {
	return (
		<Appear>
		<Box sx={{ position: 'fixed', top: 0, right: 0, transform: 'translate(45%, 20%)' }} {...props}>
			<Image src="../images/that-guy.png" size="33%" />
		</Box>
		</Appear>
	);
}

export default ThatGuy;
