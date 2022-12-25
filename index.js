(async () => {
	const data = await localforage.getItem('notatnyk');

    document.addEventListener('alpine:init', () => {        
    	Alpine.store('pages', data?.pages || []);

		Alpine.data('app', () => ({
			save() {
				const data = JSON.parse(JSON.stringify(Alpine.store('pages')));
				localforage.setItem('notatnyk', {
					pages: data
				})
					.then(() => alert('Saved'));
			}
		}));
    });
})();