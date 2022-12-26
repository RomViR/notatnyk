(async () => {
	const data = await localforage.getItem('notatnyk');

    document.addEventListener('alpine:init', () => {        
    	Alpine.store('pages', data?.pages || {});

		Alpine.data('app', () => ({
			save() {
				const data = JSON.parse(JSON.stringify(Alpine.store('pages')));
				localforage.setItem('notatnyk', {
					pages: data
				})
					.then(() => alert('Saved'));
			},
			nextId(obj) {
				const keys = Object.keys(obj);

				if (!keys.length) {
					return 1;
				}

				return +keys.reduce((a, b) => obj[a] > obj[b] ? a : b) + 1;
			}
		}));
    });
})();