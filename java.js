document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('searchForm');
	const input = document.getElementById('searchInput');

	if (!form || !input) return;

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const q = input.value.trim();
		if (!q) return;

		// If there are elements with class 'search-item', filter them on the page
		const items = document.querySelectorAll('.search-item');
		if (items.length > 0) {
			const qlc = q.toLowerCase();
			items.forEach(item => {
				const text = (item.textContent || item.innerText || '').toLowerCase();
				item.style.display = text.includes(qlc) ? '' : 'none';
			});
		} else {
			// Fallback: perform a Google search in a new tab
			window.open('https://www.google.com/search?q=' + encodeURIComponent(q), '_blank');
		}
	});
});
