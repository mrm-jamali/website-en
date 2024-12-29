// pagination of site

const c = document.querySelector('.container2');
const indexs = Array.from(document.querySelectorAll('.index'));
const stories = Array.from(document.querySelectorAll('.list-item-story'));
const message = document.getElementById('type-massage'); 
let cur = -1;

function showPage(pageNumber) {
    // بررسی خالی بودن صفحه
    if (stories[pageNumber - 1]) {
        // اگر صفحه دارای محتوا باشد
        message.style.display = 'none'; // پیام مخفی شود
        stories.forEach((story, index) => {
            if (index === pageNumber - 1) {
                story.style.display = 'block';
                story.classList.add('fade-in'); // اضافه کردن انیمیشن
            } else {
                story.classList.remove('fade-in');
                story.style.display = 'none';
            }
        });
    } else {
        // اگر صفحه خالی باشد
        stories.forEach((story) => {
            story.style.display = 'none'; // همه استوری‌ها مخفی شوند
        });
        message.style.display = 'block'; // پیام نمایش داده شود
    }

    // Clear previous active index
    indexs.forEach(index => {
        index.classList.remove('active');
    });

    // Set the active index
    const activeIndex = document.querySelector(`.index:nth-child(${pageNumber})`);
    if (activeIndex) {
        activeIndex.classList.add('active');
    }

    // Update the animation for the circle
    c.className = 'container2';
    void c.offsetWidth; // Reflow to reset animations
    c.classList.add('open');
    c.classList.add(`i${pageNumber}`);
    if (cur > pageNumber - 1) {
        c.classList.add('flip');
    }

    cur = pageNumber - 1;
}

// Set the default active page on load
document.addEventListener('DOMContentLoaded', () => {
    showPage(1); // Show the first page by default
});

// Add event listeners to all page indices
indexs.forEach((index, i) => {
    index.addEventListener('click', () => {
        showPage(i + 1);
    });
});
