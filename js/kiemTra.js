// ========= Kiểm tra ==========

var main = document.getElementsByClassName('main');
var head = document.getElementsByClassName('head');


main[0].onclick = function () {
	if(localStorage.getItem("kiemTra") == "false"){
		alert('Phiên đăng nhập đã hết hạn! Vui lòng đăng nhập lại!');
		window.location = 'logIn.html';
	}
}
head[0].onclick = function () {
	if(localStorage.getItem("kiemTra") == "false"){
		alert('Phiên đăng nhập đã hết hạn! Vui lòng đăng nhập lại!');
		window.location = 'logIn.html';
	}
}