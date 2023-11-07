// ========== Gửi tin nhắn =========

var a = document.getElementsByClassName('ccmoi');
var b = document.getElementsByClassName('nhapChat');
var c = document.getElementsByClassName('send');
var d = document.getElementsByClassName('dChatR');

c[0].onclick = function () {
	a[0].style.display = 'block';
	d[3].innerText = b[0].value;
}

// ========= Chuyển Tab ===========

var e = document.getElementsByClassName('tkdx');

e[0].onclick = function () {
	window.location = 'messLam.html';
}
e[1].onclick = function () {
	window.location = 'messV2.html';
}
e[2].onclick = function () {
	window.location = 'messV24.html';
}
e[3].onclick = function () {
	window.location = 'messH.html';
}
e[4].onclick = function () {
	window.location = 'messT.html';
}

// ========= Điều Hướng Icon ============

var n = document.getElementsByClassName('chucNang');

n[0].onclick = function () {
	window.location = 'Index.html';
}
n[1].onclick = function () {
	window.location = 'trangCNL.html';
}
n[2].onclick = function () {
	window.location = 'messLam.html';
}

//  ========= Menu head ==========

var y = document.getElementsByClassName('menu2');
var v = document.getElementsByClassName('chucNang');
var logo = document.getElementsByClassName('logo_head');

v[3].onclick = function () {
	y[0].style.display = 'block';

	v[3].onclick = function () {
		y[0].style.display = 'none';
	}
}

function edit () {
	window.location = 'edit.html';
}

function change () {
	window.location = 'logIn.html';
}

function logout () {
	window.location = 'guest.html';
}

logo[0].onclick = function () {
	window.location = 'Index.html';
}

// ========== User Guest ============

var cctui = document.getElementsByClassName('cctui');
var ccbb = document.getElementsByClassName('ccbb');

if(localStorage.getItem('chuTK') == 'bad'){
	cctui[0].style.display = 'none';
	cctui[1].style.display = 'none';
	cctui[2].style.display = 'none';
	ccbb[0].style.display = 'none';
	ccbb[1].style.display = 'none';
}
else{
	cctui[0].style.display = 'block';
	cctui[1].style.display = 'block';
	cctui[2].style.display = 'block';
	ccbb[0].style.display = 'block';
	ccbb[1].style.display = 'block';
}

// ========== User Guest ============