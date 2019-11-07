/* @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { Appear } from 'mdx-deck';

function ThatGuy(props) {
	return (
		<Appear>
			<Box
				sx={{
					position: 'absolute',
					top: "100%",
					right: 0,
					transform: 'translate(0%, -100%)',
				}}
				{...props}
			>
				<img
					src={require('file-loader!../../assets/that-guy.png')}
					alt="That guy"
				/>
			</Box>
		</Appear>
	);
}

export default ThatGuy;
