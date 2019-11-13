<ThemeProvider theme={theme}>
	<Grid
		m={4}
		gridGap={4}
		gridTemplateColumns="repeat(auto-fit, minmax(150px, 1fr))"
	>
		<Box p={4} bg="purple.0">
			Grid Item
		</Box>
		<Box p={4} bg="purple.1">
			Grid Item
		</Box>
		<Box p={4} bg="purple.2">
			Grid Item
		</Box>
		<Box p={4} bg="purple.3">
			Grid Item
		</Box>
	</Grid>
</ThemeProvider>;
