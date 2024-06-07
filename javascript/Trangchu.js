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
      // Thêm các icon khác tại đây
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