document.getElementById('homeLink').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'Trangchu.html';
});
document.getElementById('messageLink').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'Messenger.html';
});
document.getElementById('profileLink').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'Profile.html';
});
document.getElementById('logoutlink').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'index.html';
});

document.getElementById('bioButton').addEventListener('click', function(event) {
    var userInput = prompt('Vui lòng nhập tiểu sử:');
    if (userInput !== null) {
        document.getElementById('output-bio').textContent = userInput;
    }
});
document.getElementById("bioButton").onclick = function() {
    document.getElementById("bioModal").style.display = "block";
};

document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("bioModal").style.display = "none";
};

document.getElementById("saveBioButton").onclick = function() {
    var bioText = document.getElementById("bioInput").value;
    document.getElementById("output-bio").innerText = bioText;
    document.getElementById("bioModal").style.display = "none";
};

window.onclick = function(event) {
    if (event.target == document.getElementById("bioModal")) {
        document.getElementById("bioModal").style.display = "none";
    }
};
function upAnh() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('avt').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

function thichPost() {
alert("Bạn đã thích nội dung này");
}
}