// const listItem=document.querySelector(".item");
// const tablePage=document.querySelector("#page");

// const showPage=(event)=>{
//     tablePage.forEach(table=>{
//         table.style.display="none";
//     })
// }

// listItem.forEach(item => {
//     item.addEventListener('click',showPage)

// });

// انتخاب تمام آیتم‌های منو و صفحات
const menuItems = document.querySelectorAll('.item'); // آیتم‌های منو
const pages = document.querySelectorAll('.last-part'); // صفحات

// تابعی برای نمایش و مخفی کردن صفحات
const showPage = (event) => {
    event.preventDefault();
    // مخفی کردن تمام صفحات
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // برداشتن کلاس فعال از همه آیتم‌ها
    menuItems.forEach(item => {
        item.classList.remove('active'); // حذف کلاس 'active' از همه آیتم‌های منو
    });

    // نمایش صفحه‌ی مربوطه
    const pageId =event.currentTarget.getAttribute('data-target'); // گرفتن آیدی صفحه‌ی مرتبط از آیتم منو
    console.log("pageId",pageId)
    const selectedPage = document.getElementById(pageId); // انتخاب صفحه‌ی مرتبط
console.log(selectedPage)
    if (selectedPage) {
        selectedPage.style.display = 'block'; // تنظیم به block برای نمایش
        selectedPage.style.visibility = 'visible'; // اطمینان از قابل دید بودن
        selectedPage.style.opacity = '1'; // تنظیم شفافیت
        selectedPage.style.zIndex = '10';

    } else {
        console.error("Page element not found");
    }

    // افزودن کلاس فعال به آیتم کلیک شده
    event.currentTarget.classList.add('active');
};

// افزودن رویداد کلیک به آیتم‌های منو
menuItems.forEach(item => {
    item.addEventListener('click', showPage);
});



const menuItems = document.querySelectorAll('.item'); // آیتم‌های منو
const pages = document.querySelectorAll('.last-part'); // صفحات

// مخفی کردن همه صفحات به جز صفحه‌ی "home" هنگام بارگذاری
window.addEventListener('DOMContentLoaded', () => {
    pages.forEach(page => {
        page.style.display = 'none';
    });
    const homePage = document.getElementById('page11'); // فرض می‌کنیم "page11" همان صفحه‌ی home است
    if (homePage) {
        homePage.style.display = 'block';
        homePage.style.visibility = 'visible';
        homePage.style.opacity = '1';
        homePage.style.zIndex = '10';
    }
});

// تابعی برای نمایش و مخفی کردن صفحات
const showPage = (event) => {
    event.preventDefault();
    // مخفی کردن تمام صفحات
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // برداشتن کلاس فعال از همه آیتم‌ها
    menuItems.forEach(item => {
        item.classList.remove('active'); // حذف کلاس 'active' از همه آیتم‌های منو
    });

    // نمایش صفحه‌ی مربوطه
    const pageId = event.currentTarget.getAttribute('data-target'); // گرفتن آیدی صفحه‌ی مرتبط از آیتم منو
    const selectedPage = document.getElementById(pageId); // انتخاب صفحه‌ی مرتبط
    if (selectedPage) {
        selectedPage.style.display = 'block';
        selectedPage.style.visibility = 'visible';
        selectedPage.style.opacity = '1';
        selectedPage.style.zIndex = '10';
    } else {
        console.error("Page element not found");
    }

    // افزودن کلاس فعال به آیتم کلیک شده
    event.currentTarget.classList.add('active');
};

// افزودن رویداد کلیک به آیتم‌های منو
menuItems.forEach(item => {
    item.addEventListener('click', showPage);
});















// انتخاب عناصر از DOM
const hamburDashboard = document.querySelector(".hamburger-dashbaord");
const leftBox = document.querySelector(".left-part-box");
const closeItem = document.querySelector(".close-item");
const menuInLg = document.querySelector(".menu-in-lg-size");

// تابع برای نمایش منوی menuInLg و پنهان کردن منوی leftBox
const showMenuInLg = () => {
    console.log("نمایش منوی menuInLg");

    // نمایش منوی menuInLg
    menuInLg.classList.remove("d-lg-none");
    menuInLg.classList.add("d-lg-flex");

    // پنهان کردن منوی leftBox
    leftBox.classList.remove("d-sm-flex", "d-md-flex", "d-lg-flex");
    leftBox.classList.add("d-sm-none", "d-md-none", "d-lg-none");
};

// تابع برای پنهان کردن منوی menuInLg
const hideMenuInLg = () => {
    console.log("پنهان کردن منوی menuInLg");

    // پنهان کردن منوی menuInLg
    menuInLg.classList.remove("d-lg-flex");
    menuInLg.classList.add("d-lg-none");
};

// تابع برای مدیریت کلیک خارج از منوها
const handleDocumentClick = (event) => {
    // اگر کلیک خارج از menuInLg و دکمه همبرگر بود، منوی menuInLg را مخفی کن
    if (!menuInLg.contains(event.target) && !hamburDashboard.contains(event.target)) {
        hideMenuInLg();
    }
};

// رویداد کلیک برای نمایش منوی menuInLg و پنهان کردن منوی leftBox
hamburDashboard.addEventListener("click", showMenuInLg);

// رویداد کلیک برای پنهان کردن منوی menuInLg
document.addEventListener("click", handleDocumentClick);

// رویداد کلیک برای بستن منوی leftBox با کلیک روی دکمه بستن
closeItem.addEventListener("click", hiddenMenu); // همان تابع hiddenMenu که قبلاً تعریف شده بود
