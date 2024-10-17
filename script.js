document.querySelectorAll('.nav button').forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category'); // Lấy giá trị data-category
        const cards = document.querySelectorAll('.game-card'); // Lấy tất cả game-card

        cards.forEach(card => {
            if (card.getAttribute('data-category') === category) {
                card.style.display = 'block'; // Hiển thị thẻ
            } else {
                card.style.display = 'none'; // Ẩn thẻ
            }
        });
    });
});
document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', function() {
        const link = this.querySelector('a').href; // Lấy liên kết từ thẻ <a>
        const openInNewTab = false; // Thay đổi thành false để mở trong cùng tab

        if (openInNewTab) {
            window.open(link, '_blank'); // Mở liên kết trong tab mới
        } else {
            window.location.href = link; // Mở liên kết trong cùng tab
        }
    });
});
