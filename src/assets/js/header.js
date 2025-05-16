const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
	const isOpen = menu.classList.toggle('open');
	hamburger.setAttribute('aria-expanded', isOpen);
});
