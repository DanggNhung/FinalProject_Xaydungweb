document.addEventListener('DOMContentLoaded', () => {
    const chatBody = document.getElementById('chatBody');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');

    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Ngăn chặn hành vi mặc định của phím Enter
            sendMessage();
        }
    });

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText === '') return;

        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'sent');
        messageElement.innerHTML = `<p>${messageText}</p>`;

        chatBody.appendChild(messageElement);
        messageInput.value = '';
        chatBody.scrollTop = chatBody.scrollHeight;
    }
});
