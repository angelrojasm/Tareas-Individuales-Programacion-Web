//DOM Element Constants
const image = document.getElementById('main');
const descriptionMessage = document.getElementById('description');
const alert = document.getElementById('alert');
const alertMessage = document.getElementById('error-message');
const alertDismiss = document.getElementById('alert-dismiss');

const pagination = [
	document.getElementById('previous'),
	document.getElementById('first'),
	document.getElementById('second'),
	document.getElementById('third'),
	document.getElementById('fourth'),
	document.getElementById('next'),
];

//ClassName Constants

const baseClass = 'page-item';
const activeClass = ' active';

//Global Variables

var current = 1;

// Image Container

const locations = [
	null,
	'https://www.luminariastv.com/wp-content/uploads/2017/06/La-bolera-e1497359116122.jpg',
	'https://www.nycgo.com/images/venues/152/tripadvisortimessquare_taggeryanceyiv_5912__x_large.jpg',
	'https://www.planetware.com/photos-large/DOM/dominican-republic-santo-domingo-church-on-calle-el-conde.jpg',
	'https://2.bp.blogspot.com/-KF2dAQLxOjg/UN2DjyAWXlI/AAAAAAAAZ0w/uMkzYUMgEsg/s1600/DSC_2649.jpg',
	null,
];

//Functions

const description = () => {
	if (current === 1) {
		descriptionMessage.innerHTML = 'Sebelen Bowling Center, Santo Domingo';
	}

	if (current === 2) {
		descriptionMessage.innerHTML = 'Times Square, New York City';
	}

	if (current === 3) {
		descriptionMessage.innerHTML = 'La Zona Colonial, Santo Domingo';
	}

	if (current === 4) {
		descriptionMessage.innerHTML =
			'Carribean Cinemas, Silver Sun Gallery, Santo Domingo';
	}
};

const setBase = () => {
	pagination.forEach(element => {
		element.className = baseClass;
	});
};

const makeActive = element => {
	setBase();
	element.className += activeClass;
};

//Event Handlers

alertDismiss.onclick = () => {
	alert.style.display = 'none';
};

pagination[0].onclick = () => {
	if (current > 1) {
		image.src = locations[--current];
		description();
		makeActive(pagination[current]);
	} else {
		alertMessage.innerHTML = '  Ya estas en la primera foto!';
		alert.style.display = 'block';
	}
};

pagination[1].onclick = () => {
	current = 1;
	description();
	image.src = locations[1];
	makeActive(pagination[1]);
};

pagination[2].onclick = () => {
	current = 2;
	description();
	image.src = locations[2];
	makeActive(pagination[2]);
};

pagination[3].onclick = () => {
	current = 3;
	description();
	image.src = locations[3];
	makeActive(pagination[3]);
};

pagination[4].onclick = () => {
	current = 4;
	description();
	image.src = locations[4];
	makeActive(pagination[4]);
};

pagination[5].onclick = () => {
	if (current < 4) {
		image.src = locations[++current];
		description();
		makeActive(pagination[current]);
	} else {
		alertMessage.innerHTML = '  Ya llegaste al limite de fotos!';
		alert.style.display = 'block';
	}
};
