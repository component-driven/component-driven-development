import * as components from './src/components';

// Expose all components to the global scope for styleguide examples
// so it behaves more like Playroom without the need to import components
Object.entries(components).forEach(([key, value]) => {
	global[key] = value;
});
