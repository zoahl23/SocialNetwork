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

// ========= Đổi edit ===========

function signIn () {
	const tnd = document.getElementById('tnd');
	const tid = document.getElementById('tid');
	const nmk = document.getElementById('nmk');
	const nlmk = document.getElementById('nlmk');

	var kTra = false;

	if((tid.value.length > 7) && (tid.value.length < 17) && (nmk.value.length > 3) && (nlmk.value == nmk.value)){
		kTra = true;
	}
	if(kTra == true){
		tnd_data = tnd.value;
		localStorage.setItem("tnd", tnd_data);

		tid_data = tid.value;
		localStorage.setItem("tid", tid_data);

		nmk_data = nmk.value;
		localStorage.setItem("nmk", nmk_data);

		alert("Đổi thông tin thành công, hệ thống sẽ đưa bạn về trang chủ");
		window.location = "Index.html";
	}
	else{
		alert("Đổi thông tin không thành công! Xin hãy thử lại");
	}
}