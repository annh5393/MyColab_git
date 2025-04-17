document.getElementById('press-me').addEventListener('click', function() {
    const members = [
        { name: 'Nguyễn Hoài An', img: 'images/An.jpg' },
        { name: 'Nguyễn Thị Thanh Phụng', img: 'images/phung.jpg' },
        { name: 'Phạm Minh Nhật ', img: 'path/to/member3.jpg' }
    ];
    const membersDiv = document.getElementById('members');
    membersDiv.innerHTML = ''; // Xóa nội dung cũ
    members.forEach(member => {
        const img = document.createElement('img');
        img.src = member.img;
        img.alt = member.name;
        img.style.width = '100px'; // Điều chỉnh kích thước ảnh
        membersDiv.appendChild(img);
    });
});