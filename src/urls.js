// HACK: Make the app work when deployed in a subfolder

const DEPLOY_PATH = '/component-driven-development';

export const getUrl = path => {
	const { pathname } = document.location;
	const basePath = pathname.startsWith(DEPLOY_PATH) ? DEPLOY_PATH : '';
	return [basePath, path].join('');
};
