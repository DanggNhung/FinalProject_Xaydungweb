// Mảng chứa các thông báo mẫu
const notificationsArray = [
    "Ai đó đã thích bài viết của bạn",
    "Bạn có một bình luận mới",
    "Bài viết của bạn đã được chia sẻ",
    "Bạn có một tin nhắn mới",
    "Ai đó đã theo dõi bạn"
];

// Hàm lưu thông báo vào localStorage
function saveNotification(notification) {
    let notifications = JSON.parse(localStorage.getItem('notifications')) || [];
    notifications.push(notification);
    localStorage.setItem('notifications', JSON.stringify(notifications));
}

// Hàm hiển thị thông báo từ localStorage
function displayNotifications() {
    let notifications = JSON.parse(localStorage.getItem('notifications')) || [];
    const notificationContainer = document.querySelector('.thongbao');

    notificationContainer.innerHTML = ''; // Xóa nội dung cũ

    notifications.forEach(notification => {
        const p = document.createElement('p');
        p.textContent = notification;
        notificationContainer.appendChild(p);
    });
}

// Lấy thông báo ngẫu nhiên từ mảng
function getRandomNotification() {
    const randomIndex = Math.floor(Math.random() * notificationsArray.length);
    return notificationsArray[randomIndex];
}

// Hiển thị modal popup với thông báo mới
function showModal(notification) {
    const modal = document.getElementById('myModal');
    const modalMessage = document.getElementById('modalMessage');
    modalMessage.textContent = notification;
    modal.style.display = 'flex'; // Hiển thị modal

    // Đóng modal khi nhấn vào dấu x
    document.querySelector('.close').onclick = function() {
        modal.style.display = 'none';
    }

    // Đóng modal khi nhấn ra ngoài
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

// Lấy tham chiếu đến nút "Thông báo" trong phần header
const notificationBtn = document.getElementById('notificationBtn');

// Xử lý sự kiện khi nút "Thông báo" được nhấn
notificationBtn.addEventListener('click', () => {
  const newNotification = getRandomNotification(); // Lấy thông báo ngẫu nhiên
  showModal(newNotification); // Hiển thị modal với thông báo mới
});

// Hiển thị thông báo khi tải trang
window.onload = function() {
    displayNotifications();
};
