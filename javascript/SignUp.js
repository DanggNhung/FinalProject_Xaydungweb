function signUp(e) {
    event.preventDefault();
    var fullname = document.getElementById("fullname").value;
    var dateofbirth = document.getElementById("dateofbirth").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("register-username").value;
    var password = document.getElementById("register-password").value;
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
}