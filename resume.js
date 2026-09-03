const heroName = 'Prasann Gallikatti';
const heroDescription = ' an AI/ML enthusiast passionate about developing intelligent solutions to real-world problems.';
const typedName = document.querySelector('#typed-name');
const typedDescription = document.querySelector('#typed-description');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

function typeHeroText() {
	if (!typedName || !typedDescription || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
	typedName.textContent = '';
	typedDescription.textContent = '';
	let characterIndex = 0;

	const typeNextCharacter = () => {
		typedName.textContent += heroName[characterIndex];
		characterIndex += 1;
		if (characterIndex < heroName.length) {
			window.setTimeout(typeNextCharacter, 34);
			return;
		}

		typeDescriptionCharacter();
	};

	let descriptionIndex = 0;
	const typeDescriptionCharacter = () => {
		typedDescription.textContent += heroDescription[descriptionIndex];
		descriptionIndex += 1;
		if (descriptionIndex < heroDescription.length) window.setTimeout(typeDescriptionCharacter, 34);
	};

	typeNextCharacter();
}

// Keep all internal links smooth while preserving normal external links.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
	link.addEventListener('click', (event) => {
		const target = document.querySelector(link.getAttribute('href'));
		if (!target) return;
		event.preventDefault();
		target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		navLinks?.classList.remove('open');
		menuToggle?.setAttribute('aria-expanded', 'false');
	});
});

menuToggle?.addEventListener('click', () => {
	const isOpen = navLinks.classList.toggle('open');
	menuToggle.setAttribute('aria-expanded', String(isOpen));
});

window.addEventListener('DOMContentLoaded', typeHeroText);
