//DOM Element Inputs

const nameInput = document.getElementById('nombre');
const lastNameInput = document.getElementById('apellido');
const textArea = document.getElementById('text-area');
const recommendation = document.getElementById('recommendation-input');
const Radio1 = document.getElementById('radio-1');
const Radio2 = document.getElementById('radio-2');
const progressBar = document.getElementById('progress');
const submitButton = document.getElementById('submit');

//Default Load
var locks = {
	nameLocked: false,
	lastNameLocked: false,
	textAreaLocked: false,
	recommendationLocked: false,
};
var progressValue = 20;

const renderProgress = () => {
	progressBar.style.width = progressValue + '%';
	progressBar.innerHTML = progressValue + '%';

	if (progressValue === 100) {
		submitButton.disabled = false;
	} else {
		submitButton.disabled = true;
	}
};

renderProgress();

nameInput.oninput = () => {
	if (nameInput.value != '') {
		if (!locks.nameLocked) {
			progressValue += 20;
			locks.nameLocked = true;
			renderProgress();
		}
	} else {
		progressValue -= 20;
		locks.nameLocked = false;
		renderProgress();
	}
};

lastNameInput.oninput = () => {
	if (lastNameInput.value != '') {
		if (!locks.lastNameLocked) {
			progressValue += 20;
			locks.lastNameLocked = true;
			renderProgress();
		}
	} else {
		progressValue -= 20;
		locks.lastNameLocked = false;
		renderProgress();
	}
};

textArea.oninput = () => {
	if (textArea.value != '') {
		if (!locks.textAreaLocked) {
			progressValue += 20;
			locks.textAreaLocked = true;
			renderProgress();
		}
	} else {
		progressValue -= 20;
		locks.textAreaLocked = false;
		renderProgress();
	}
};

recommendation.oninput = () => {
	if (recommendation.value != '') {
		if (!locks.recommendationLocked) {
			progressValue += 20;
			locks.recommendationLocked = true;
			renderProgress();
		}
	} else {
		progressValue -= 20;
		locks.recommendationLocked = false;
		renderProgress();
	}
};
