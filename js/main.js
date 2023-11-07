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
a[2].onclick = function () {
	a[2].style.color = '#38b6ff';

	a[2].onclick = function () {
		a[2].style.color = '#bfbfbf';
	}
}
a[3].onclick = function () {
	a[3].style.color = '#ff5757';

	a[3].onclick = function () {
		a[3].style.color = '#bfbfbf';
	}
}
a[4].onclick = function () {
	a[4].style.color = '#38b6ff';

	a[4].onclick = function () {
		a[4].style.color = '#bfbfbf';
	}
}
a[5].onclick = function () {
	a[5].style.color = '#ff5757';

	a[5].onclick = function () {
		a[5].style.color = '#bfbfbf';
	}
}
a[6].onclick = function () {
	a[6].style.color = '#38b6ff';

	a[6].onclick = function () {
		a[6].style.color = '#bfbfbf';
	}
}
a[7].onclick = function () {
	a[7].style.color = '#ff5757';

	a[7].onclick = function () {
		a[7].style.color = '#bfbfbf';
	}
}
a[8].onclick = function () {
	a[8].style.color = '#38b6ff';

	a[8].onclick = function () {
		a[8].style.color = '#bfbfbf';
	}
}
a[9].onclick = function () {
	a[9].style.color = '#ff5757';

	a[9].onclick = function () {
		a[9].style.color = '#bfbfbf';
	}
}

// ============ Đăng bài ============

var b = document.getElementsByClassName('baiDang2');
var c = document.getElementsByClassName('status');
var d = document.getElementsByClassName('dang');
var e = document.getElementsByClassName('ndang');

e[0].onclick = function () {
	b[0].style.display = 'block';
	c[0].innerText = d[0].value;
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
i[1].onclick = function () {
	f[1].style.display = 'flex';
	g[1].innerText = h[1].value;
}
i[2].onclick = function () {
	f[2].style.display = 'flex';
	g[2].innerText = h[2].value;
}
i[3].onclick = function () {
	f[3].style.display = 'flex';
	g[3].innerText = h[3].value;
}
i[4].onclick = function () {
	f[4].style.display = 'flex';
	g[4].innerText = h[4].value;
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

// ======= Chuyển qua trang cá nhân bằng avatar =========

var avatar = document.getElementsByClassName('avatar');
var avtbl = document.getElementsByClassName('avtbl');

avatar[0].onclick = function () {
	window.location = 'trangCNL.html';
}
avatar[1].onclick = function () {
	window.location = 'trangCNL.html';
}
avatar[2].onclick = function () {
	window.location = 'flL.html';
}
avatar[3].onclick = function () {
	window.location = 'fl24.html';
}
avatar[4].onclick = function () {
	window.location = 'flT.html';
}
avatar[5].onclick = function () {
	window.location = 'fl2.html';
}

avtbl[0].onclick = function () {
	window.location = 'trangCNL.html';
}
avtbl[1].onclick = function () {
	window.location = 'trangCNL.html';
}
avtbl[2].onclick = function () {
	window.location = 'flL.html';
}
avtbl[3].onclick = function () {
	window.location = 'flH.html';
}
avtbl[4].onclick = function () {
	window.location = 'trangCNL.html';
}
avtbl[5].onclick = function () {
	window.location = 'flL.html';
}
avtbl[6].onclick = function () {
	window.location = 'flH.html';
}
avtbl[7].onclick = function () {
	window.location = 'trangCNL.html';
}
avtbl[8].onclick = function () {
	window.location = 'trangCNL.html';
}
avtbl[9].onclick = function () {
	window.location = 'flH.html';
}

//=======================================

if(localStorage.getItem("kiemTra") == "true"){ // do kiemTra nó vốn dĩ là True vì mình đăng nhập xong nó sẽ được lưu lại trên localStorage nên là khi mình mở file thì nó sẽ hiển thị True thì mình phải xóa đi 
	localStorage.clear();
}
else{
	localStorage.setItem("kiemTra","false");
}