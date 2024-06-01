function login(e) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if(user == null) {
        alert("Vui lòng nhập thông tin đăng nhập!")
    }
    else if(email == data.email && password == data.password) {
        alert("Đăng nhập thành công!")
        window.location.href="Trangchu.html"
    }
    else{
        alert("Bạn đã nhập sai thông tin đăng nhập. <br> Vui lòng nhập lại!")
    }
}