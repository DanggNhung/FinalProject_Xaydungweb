function signUp(e) {
    event.preventDefault();
    var fullname = document.getElementById("fullname").value;
    var dateofbirth = document.getElementById("dateofbirth").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("register-username").value;
    var password = document.getElementById("register-password").value;

    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var storeUser = JSON.parse(localStorage.getItem(key));
        if (storeUser.email == email) {
            alert("Email đã được đăng ký. Vui lòng sử dụng email khác!");
            return;
        }
        if (storeUser.username == username) {
            alert("Username đã được đăng ký. Vui lòng sử dụng username khác!");
            return;
        }
    }

    var user = {
        fullname : fullname,
        dateofbirth : dateofbirth,
        gender : gender,
        email : email,
        username :username,
        password : password,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("Đăng ký thành công!");
    
    document.getElementById("fullname").value = '';
    document.getElementById("dateofbirth").value = '';
    document.getElementById("gender").value = '';
    document.getElementById("email").value = '';
    document.getElementById("register-username").value = '';
    document.getElementById("register-password").value = '';
}

function login(e) {
    event.preventDefault();
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if(username == data.username && password == data.password) {
        alert("Đăng nhập thành công!")
        window.location.href="Trangchu.html"
    }
    else{
        alert("Bạn đã nhập sai thông tin đăng nhập. Vui lòng nhập lại!")
    }
}