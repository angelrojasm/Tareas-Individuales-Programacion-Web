//String constant

const baseClass = 'list-group-item list-group-item-action';
const activeClass = ' active highlight';

//DOM Element Constants

const cards = [
	document.getElementById('card-1'),
	document.getElementById('card-2'),
	document.getElementById('card-3'),
	document.getElementById('card-4'),
];

const listElems = [
	document.getElementById('videojuegos'),
	document.getElementById('dominos'),
	document.getElementById('ajedrez'),
	document.getElementById('musica'),
];
//Element Toggling Functions

const makeActiveElement = element => {
	listElems.forEach(element => {
		element.className = baseClass;
	});

	element.className += activeClass;
};

const makeActiveCard = element => {
	cards.forEach(card => {
		card.style.display = 'none';
	});

	element.style.display = 'block';
};

//List Group Item interacting

listElems[0].onclick = () => {
	makeActiveElement(listElems[0]);
	makeActiveCard(cards[0]);
};

listElems[1].onclick = () => {
	makeActiveElement(listElems[1]);
	makeActiveCard(cards[1]);
};

listElems[2].onclick = () => {
	makeActiveElement(listElems[2]);
	makeActiveCard(cards[2]);
};

listElems[3].onclick = () => {
	makeActiveElement(listElems[3]);
	makeActiveCard(cards[3]);
};
