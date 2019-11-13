/* @jsx jsx */
import { jsx, Box } from 'theme-ui';

export default ({ src }) => {
	return (
		<Box sx={{ position: "relative" }}>
			<Box sx={{ position: "absolute", top: 0, width: "100%", height: 20, bg: "transparent", border: "none", cursor: "pointer" }} />
			<iframe
				src={src}
				style={{ border: 'none', width: '100vw', height: '100vh' }}
			/>
		</Box>
	);
};
