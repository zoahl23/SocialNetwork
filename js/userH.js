// ========== User Guest ============

var avatar = document.getElementsByClassName('huhu');
var dang = document.getElementsByClassName('dang');
var tenctus = document.getElementsByClassName('tenctus');
var avtbl = document.getElementsByClassName('avtbl');
var userbl = document.getElementsByClassName('userbl');

if(localStorage.getItem('chuTK') == 'bad'){
	avatar[0].src = 'image/bad.jpg';
	dang[0].placeholder = 'What on your mind, ' + localStorage.getItem('tnd') + ' ?';
	avatar[1].src = 'image/bad.jpg';
	tenctus[0].innerText = localStorage.getItem('tnd');

	avtbl[0].src = 'image/bad.jpg';
	userbl[0].innerText = localStorage.getItem('tid');

	avtbl[1].src = 'image/bad.jpg';
	userbl[1].innerText = localStorage.getItem('tid');

	avtbl[4].src = 'image/bad.jpg';
	userbl[4].innerText = localStorage.getItem('tid');

	avtbl[7].src = 'image/bad.jpg';
	userbl[7].innerText = localStorage.getItem('tid');

	avtbl[8].src = 'image/bad.jpg';
	userbl[8].innerText = localStorage.getItem('tid');
}
else{
	avatar[0].src = 'image/avttui.jpg';
	dang[0].placeholder = 'What on your mind, ' + 'Hảo Lân' + ' ?';
	avatar[1].src = 'image/avttui.jpg';
	tenctus[0].innerText = 'Hảo Lân';

	avtbl[0].src = 'image/avttui.jpg';
	userbl[0].innerText = 'zoahl203';

	avtbl[1].src = 'image/avttui.jpg';
	userbl[1].innerText = 'zoahl203';

	avtbl[4].src = 'image/avttui.jpg';
	userbl[4].innerText = 'zoahl203';

	avtbl[7].src = 'image/avttui.jpg';
	userbl[7].innerText = 'zoahl203';

	avtbl[8].src = 'image/avttui.jpg';
	userbl[8].innerText = 'zoahl203';
}

// ========== User Guest ============