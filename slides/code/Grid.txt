<ThemeProvider theme={theme}>
  <Grid
    m={4}
    gridGap={4}
    gridTemplateColumns="repeat(auto-fit, minmax(150px, 1fr))"
  >
    <Box p={4} bg="grey.2">
      Grid Item
    </Box>
    <Box p={4} bg="grey.3">
      Grid Item
    </Box>
    <Box p={4} bg="grey.4">
      Grid Item
    </Box>
    <Box p={4} bg="grey.5">
      Grid Item
    </Box>
  </Grid>
</ThemeProvider>;
