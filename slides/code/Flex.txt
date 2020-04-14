<ThemeProvider theme={theme}>
  <Flex as="form" p={5}>
    <Box flexGrow={1} mr={3}>
      <Input
        type="email"
        defaultValue=""
        placeholder="Email"
        aria-label="Email"
      />
    </Box>
    <Button
      variant="primary"
      type="submit"
    >
      Subscribe
    </Button>
  </Flex>
</ThemeProvider>;
