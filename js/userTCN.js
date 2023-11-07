// ========== User Guest ============
var anhAvt = document.getElementsByClassName('anhAvt');
var tenID = document.getElementsByClassName('tenID');
var tenDD = document.getElementsByClassName('tenDD');
var avatar = document.getElementsByClassName('huhu');
var dang = document.getElementsByClassName('dang');
var tenctus = document.getElementsByClassName('tenctus');
var avtbl = document.getElementsByClassName('avtbl');
var userbl = document.getElementsByClassName('userbl');

if(localStorage.getItem('chuTK') == 'bad'){
	anhAvt[0].src = 'image/bad.jpg';
	tenID[0].innerText = localStorage.getItem('tid');
	tenDD[0].innerText = localStorage.getItem('tnd');
	avatar[0].src = 'image/bad.jpg';
	avatar[1].src = 'image/bad.jpg';
	dang[0].placeholder = 'What on your mind, ' + localStorage.getItem('tnd') + ' ?';
	tenctus[0].innerText = localStorage.getItem('tnd');
	avtbl[0].src = 'image/bad.jpg';
	userbl[0].innerText = localStorage.getItem('tid');
}
else{
	anhAvt[0].src = 'image/avttui.jpg';
	tenID[0].innerText = 'zoahl203';
	tenDD[0].innerText = 'Hảo Lân';
	avatar[0].src = 'image/avttui.jpg';
	avatar[1].src = 'image/avttui.jpg';
	dang[0].placeholder = 'What on your mind, ' + 'Hảo Lân' + ' ?';
	tenctus[0].innerText = 'Hảo Lân';
	avtbl[0].src = 'image/avttui.jpg';
	userbl[0].innerText = 'zoahl203';
}

// ========== User Guest ============