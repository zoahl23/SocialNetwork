// ============ Thả tim ============

var a = document.getElementsByClassName('ictym');

a[0].onclick = function () {
	a[0].style.color = '#38b6ff';

	a[0].onclick = function () {
		a[0].style.color = '#bfbfbf';
	}
}
a[1].onclick = function () {
	a[1].style.color = '#ff5757';

	a[1].onclick = function () {
		a[1].style.color = '#bfbfbf';
	}
}

// ============ Bình luận ============

var f = document.getElementsByClassName('blm1');
var g = document.getElementsByClassName('cmtd2');
var h = document.getElementsByClassName('nhapbl');
var i = document.getElementsByClassName('guibl');

i[0].onclick = function () {
	f[0].style.display = 'flex';
	g[0].innerText = h[0].value;
}

// ============ Danh sách friend ============

var k = document.getElementsByClassName('bad');
var l = document.getElementsByClassName('see');

l[0].onclick = function () {
	k[0].style.display = 'flex';
	l[0].innerText = 'See less';
	l[0].style.color = '#ff5757';
	l[0].onclick = function () {
		k[0].style.display = 'none';
		l[0].innerText = 'See all';
		l[0].style.color = '#529ECC';
	}
}


// ========= Tab flow ==========

var q = document.getElementsByClassName('qq');

q[0].onclick = function () {
	window.location = 'flL.html';
}
q[1].onclick = function () {
	window.location = 'fl2.html';
}
q[2].onclick = function () {
	window.location = 'fl24.html';
}
q[3].onclick = function () {
	window.location = 'flH.html';
}
q[4].onclick = function () {
	window.location = 'flT.html';
}

// ======== Nút follow =========

var p = document.getElementsByClassName('edOrFl');

p[0].onclick = function () {
	p[0].innerText = 'Unfollow';
	p[0].style.color = '#ff5757';
	p[1].style.display = 'block';

	p[0].onclick = function () {
		p[0].innerText = 'Follow';
		p[0].style.color = '#529ECC';
		p[1].style.display = 'none';
	}
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

var avtbl = document.getElementsByClassName('avtbl');
var userbl = document.getElementsByClassName('userbl');

if(localStorage.getItem('chuTK') == 'bad'){
	avtbl[0].src = 'image/bad.jpg';
	userbl[0].innerText = localStorage.getItem('tid');
}
else{
	avtbl[0].src = 'image/avttui.jpg';
	userbl[0].innerText = 'zoahl203';
}

// ========== User Guest ============