document.addEventListener('DOMContentLoaded', () => {
    const chatBody = document.getElementById('chatBody');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    const friendsList = document.getElementById('friendsList');

    // Hàm load lại tin nhắn đã có khi tải lại trang
    function loadMessages() {
        const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        messages.forEach(message => {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', message.type);
            messageElement.innerHTML = `<p>${message.text}</p>`;
            chatBody.appendChild(messageElement);
        });
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Hàm lưu tin nhắn vào localStorage
    function saveMessage(messageText, messageType) {
        const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        messages.push({ text: messageText, type: messageType });
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    }

    // Đặt các hành động click vào button hoặc nhấn phím Enter để gửi tin nhắn
    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); 
            sendMessage();
        }
    });

    // Hàm gửi tin nhắn
    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText === '') return;

        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'sent');
        messageElement.innerHTML = `<p>${messageText}</p>`;

        chatBody.appendChild(messageElement);
        messageInput.value = '';
        chatBody.scrollTop = chatBody.scrollHeight;

        saveMessage(messageText, 'sent');
    }

    loadMessages(); 

    // Hàm load danh sách bạn bè mỗi khi có thêm người đăng kí
    function loadFriendsList() {
        friendsList.innerHTML = ''; // Xóa danh sách cũ
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var user = JSON.parse(localStorage.getItem(key));
            if (user && user.fullname) {
                var friendElement = document.createElement('li');
                friendElement.classList.add('friend');
                friendElement.innerHTML = `
                    <img src="images/user.jpg" alt="${user.fullname}">
                    <span>${user.fullname}</span>
                `;
                friendsList.appendChild(friendElement);
            }
        }
    }

    loadFriendsList();
});
