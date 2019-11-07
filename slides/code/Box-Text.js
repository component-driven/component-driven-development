<ThemeProvider theme={theme}>
	<Box
		as="main"
		p={5}
		bg="grey.4"
		height="100%"
	>
		<Box
			as="section"
			p={0}
			mx="auto"
			width={1 / 2}
			bg="grey.0"
			border="thin"
			borderColor="grey.5"
		>
			<Box
				pb={3}
				mb={3}
				borderBottom="thin"
				borderColor="grey.4"
			>
				<Heading size="md">
					Saluki
				</Heading>
			</Box>
			<Box p={3}>
				<Text variant="secondary">
					Don’t leave any food on a
					table when saluki is around.
				</Text>
			</Box>
		</Box>
	</Box>
</ThemeProvider>;
