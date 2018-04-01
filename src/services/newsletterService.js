export default function subscribe(email) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const success = Math.random() >= 0.5;
			if (success) {
				resolve();
			} else {
				reject();
			}
		}, 2000);
	});
}
