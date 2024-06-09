  // Hàm hiển thị bảng chọn icon
function showIconPicker() {
  const iconPicker = document.getElementById('iconPicker');
  const iconList = document.getElementById('iconList');

  // Xóa nội dung cũ
  iconList.innerHTML = '';

  // Danh sách các icon
  const icons = [
      'fas fa-bell',
      'fas fa-envelope',
      'fas fa-heart',
      'fas fa-comment',
  ];

  // Hiển thị các icon
  icons.forEach(iconClass => {
      const iconItem = document.createElement('div');
      iconItem.classList.add('icon-item');
      iconItem.innerHTML = `<i class="${iconClass}"></i>`;
      iconItem.addEventListener('click', function() {
          // Lưu icon được chọn vào biến hoặc thực hiện hành động khác
          const selectedIcon = iconClass;
          alert(`Bạn đã chọn icon: ${selectedIcon}`);
          iconPicker.style.display = 'none'; // Ẩn bảng chọn icon
      });
      iconList.appendChild(iconItem);
  });

  iconPicker.style.display = 'block'; // Hiển thị bảng chọn icon
}

  function thichPost() {
    alert("Bạn đã thích nội dung này");
  }

  document.addEventListener('DOMContentLoaded', function() {
    const commentModal = document.getElementById('commentModal');
    const shareModal = document.getElementById('shareModal');
    const closeBtns = document.querySelectorAll('.close');

    closeBtns.forEach(btn => {
        btn.onclick = function() {
            btn.parentElement.parentElement.style.display = 'none';
        }
    });

    window.onclick = function(event) {
        if (event.target == commentModal || event.target == shareModal) {
            event.target.style.display = 'none';
        }
    }
});

function hienBinhLuan() {
    const modal = document.getElementById('commentModal');
    modal.style.display = 'flex';
}

function hienChiaSe() {
    const modal = document.getElementById('shareModal');
    modal.style.display = 'flex';
}

function dongModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

function guiBinhLuan() {
    const commentInput = document.getElementById('commentInput').value;
    if (commentInput) {
        alert('Bình luận của bạn: ' + commentInput);
        document.getElementById('commentInput').value = ''; // Xóa nội dung ô nhập
        document.getElementById('commentModal').style.display = 'none'; // Đóng modal
    } else {
        alert('Vui lòng nhập bình luận trước khi gửi!');
    }
}

function chiaSeFacebook() {
    alert('Đã chia sẻ trên Facebook');
}

function chiaSeInstagram() {
    alert('Đã chia sẻ trên Instagram');
}

function chiaSeTwitter() {
    alert('Đã chia sẻ trên Twitter');
}

function dangPost() {
    alert("Bài viết của bạn đã được đăng");
  }