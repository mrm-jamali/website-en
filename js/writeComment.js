document.addEventListener("DOMContentLoaded", function () {
    const toggleCommentBox = document.getElementById('toggleCommentBox');
    const commentBox = document.getElementById('commentBox');
    const commentForm = document.getElementById('commentForm');
    const commentInput = document.getElementById('commentInput');
    const commentsList = document.getElementById('commentsList');

    // نمایش یا مخفی کردن کادر کامنت با انیمیشن
    toggleCommentBox.addEventListener('click', () => {
        if (commentBox.classList.contains('active')) {
            commentBox.classList.remove('active');
        } else {
            commentBox.classList.add('active');
        }
    });

    // ارسال نظر و اضافه کردن آن به لیست نظرات
    commentForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const commentText = commentInput.value.trim();

        if (commentText) {
            const commentItem = document.createElement('li');
            commentItem.textContent = commentText;

            commentsList.appendChild(commentItem);
            commentInput.value = '';
        }
    });
});