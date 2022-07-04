let elList = document.querySelector('.js-list');

films.forEach((film) => {
	let box = document.createElement('div');
	box.classList.add('col-4');
	box.classList.add('mb-3');

	let boxInner = document.createElement('div');
	boxInner.classList.add('card');
	boxInner.classList.add('film-card');

	let cardImg = document.createElement('img');
	cardImg.src = film.poster;
	cardImg.classList.add('card-img-top');

	let cardBody = document.createElement('div');
	cardBody.classList.add('card-body');

	let cardTitle = document.createElement('h2');
	cardTitle.classList.add('card-title');
	cardTitle.textContent = film.title;

	let cardText = document.createElement('p');
	cardText.classList.add('card-text');
	cardText.textContent = film.overview;

	let cardGanre = document.createElement('div');
	film.genres.forEach((item, index) => {
		let ganre = document.createElement('button');
		ganre.classList.add(`btn`);
		ganre.classList.add(`btn-ganre`);
		ganre.classList.add(`btn-${index}`);
		ganre.textContent = item;
		cardGanre.appendChild(ganre);
	});

	cardBody.appendChild(cardTitle);
	cardBody.appendChild(cardText);
	cardBody.appendChild(cardGanre);
	boxInner.appendChild(cardImg);
	boxInner.appendChild(cardBody);
	box.appendChild(boxInner);
	elList.appendChild(box);
});

var elSelect = document.querySelector('.js-select');

const filled = new Set();

films.forEach((film) => {
	film.genres.forEach((ganre) => {
		filled.add(ganre);
	});
});

filled.forEach((item) => {
	let opt = document.createElement('option');
	opt.value = item;
	opt.textContent = item;
	elSelect.appendChild(opt);
});

elSelect.addEventListener('change', (evt) => {
	evt.preventDefault();
	var result = [];
	var typeVal = elSelect.value;
	elList.innerHTML = '';
	films.forEach((film) => {
		if (film.genres.includes(typeVal)) {
			result.push(film);
		}
	});

	result.forEach((film) => {
		let box = document.createElement('div');
		box.classList.add('col-4');
		box.classList.add('mb-3');

		let boxInner = document.createElement('div');
		boxInner.classList.add('card');
		boxInner.classList.add('film-card');

		let cardImg = document.createElement('img');
		cardImg.src = film.poster;
		cardImg.classList.add('card-img-top');

		let cardBody = document.createElement('div');
		cardBody.classList.add('card-body');

		let cardTitle = document.createElement('h2');
		cardTitle.classList.add('card-title');
		cardTitle.textContent = film.title;

		let cardText = document.createElement('p');
		cardText.classList.add('card-text');
		cardText.textContent = film.overview;

		let cardGanre = document.createElement('div');
		film.genres.forEach((item, index) => {
			let ganre = document.createElement('button');
			ganre.classList.add(`btn`);
			ganre.classList.add(`btn-ganre`);
			ganre.classList.add(`btn-${index}`);
			ganre.textContent = item;
			cardGanre.appendChild(ganre);
		});

		cardBody.appendChild(cardTitle);
		cardBody.appendChild(cardText);
		cardBody.appendChild(cardGanre);
		boxInner.appendChild(cardImg);
		boxInner.appendChild(cardBody);
		box.appendChild(boxInner);
		elList.appendChild(box);
	});
});
