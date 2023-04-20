// countdown calendar
const countdown = () => {
	const countDate = new Date('Jan 5, 2024 00:10:00').getTime();
	const now = new Date().getTime();
	const remainingTime = countDate - now;

	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	const textDay = Math.floor(remainingTime / day);
	const textHour = Math.floor((remainingTime % day) / hour);
	const textMinute = Math.floor((remainingTime % hour) / minute);
	const textSecond = Math.floor((remainingTime % minute) / second);

	document.getElementById('day').innerText = textDay > 0 ? textDay : 0;
	document.getElementById('hour').innerText = textHour > 0 ? textHour : 0;
	document.getElementById('minute').innerText = textMinute > 0 ? textMinute : 0;
	document.getElementById('second').innerText = textSecond > 0 ? textSecond : 0;
};
setInterval(countdown, 1000);

// hover couple_info div
const overEffect = () => {
	document.getElementsByTagName('img')[1].src = 'img/bride_icon.png';
	document.getElementsByTagName('img')[3].src = 'img/groom_icon.png';
};
const outEffect = () => {
	document.getElementsByTagName('img')[1].src = 'img/bride_icon2.png';
	document.getElementsByTagName('img')[3].src = 'img/groom_icon2.png';
};

// falling heart
const hearts = () => {
	const container = document.querySelector('.container');
	const create = document.createElement('div');
	create.classList.add('hearts');
	create.innerHTML = '&#10084;';
	create.style.left = Math.random() * 100 + 'vw';
	create.style.animationDuration = Math.random() * 3 + 2 + 's';
	container.appendChild(create);
	setTimeout(() => {
		create.remove();
	}, 3000);
};
setInterval(hearts, 1000);

// form
function onFormSubmit() {
	let data =
		'<br/>' +
		document.getElementById('formName').value +
		'<br/>' +
		document.getElementById('formMsg').value +
		'<br/>';
	console.log(data);
	document.getElementById('wish_list').innerHTML += data;

	// reset
	document.getElementById('formName').value = '';
	document.getElementById('formEmail').value = '';
	document.getElementById('formMsg').value = '';
}
