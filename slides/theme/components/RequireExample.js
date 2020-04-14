export default ({ path }) => {
	return require(`raw-loader!../../${path}`).default;
};
