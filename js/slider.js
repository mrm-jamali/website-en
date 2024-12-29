const slider = document.querySelector('.slider-multi-item');
const prevBtn = document.querySelector('.prev-btn'); 
const nextBtn = document.querySelector('.next-btn'); 

let currentIndex = 0; // موقعیت شروع
const itemsVisible = 5; // تعداد آیتم‌های قابل نمایش در هر صفحه
const totalItems = document.querySelectorAll('.slider-item').length; // تعداد کل آیتم‌ها

// به‌روزرسانی موقعیت اسلایدر
function updateSliderPosition() {
    const itemWidth = slider.children[0].offsetWidth; // عرض هر آیتم
    slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// افزودن و حذف کلاس برای انیمیشن کلیک
function animateButton(button) {
    button.classList.add('active');
    setTimeout(() => {
        button.classList.remove('active');
    }, 500); // زمان هماهنگ با انیمیشن CSS
}

// حرکت به سمت قبلی
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
    animateButton(prevBtn); // انیمیشن دکمه
});

// حرکت به سمت بعدی
nextBtn.addEventListener('click', () => {
    if (currentIndex < totalItems - itemsVisible) {
        currentIndex++;
        updateSliderPosition();
    }
    animateButton(nextBtn); // انیمیشن دکمه
});
