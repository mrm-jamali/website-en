// displying tables

const menuItems = document.querySelectorAll('.item')
const home = document.querySelectorAll('#home'); // آیتم‌های منو
console.log(home)
const pages = document.querySelectorAll('.last-part'); // صفحات
const homeCloumn = document.querySelector(".home-cloumn")
console.log(homeCloumn);



document.addEventListener("DOMContentLoaded", function () {
    // مخفی کردن همه صفحات به جز homeCloumn
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // نمایش دادن homeCloumn
    homeCloumn.style.display = "flex";
});
 


// تابعی برای نمایش و مخفی کردن صفحات
const showPage1 = (event) => {
    event.preventDefault();
    // مخفی کردن تمام صفحات
    pages.forEach(page => {
        page.style.display = 'none';
     
    });

    // برداشتن کلاس فعال از همه آیتم‌ها
    menuItems.forEach(item => {
        item.classList.remove('active'); // حذف کلاس 'active' از همه آیتم‌های منو
        // if (item===home){
        //     homeCloumn.style.display = "flex";
        // }
    });

    // نمایش صفحه‌ی مربوطه
    const pageId = event.currentTarget.getAttribute('data-target'); // گرفتن آیدی صفحه‌ی مرتبط از آیتم منو
    console.log("data-target:",pageId)
    const selectedPage = document.getElementById(pageId); // انتخاب صفحه‌ی مرتبط
    console.log("id:",selectedPage)
    if (selectedPage) {
        // ابتدا همه صفحات را مخفی کن
        pages.forEach(page => {
            page.style.display = 'none'; // مخفی کردن تمام صفحات
        });
    
        if (pageId === 'page11') { // بررسی اینکه آیا صفحه page11 انتخاب شده 
            homeCloumn.style.display = "flex";
            selectedPage.style.display = 'block'; // نمایش page11
            selectedPage.style.visibility = 'visible'; // اطمینان از قابل دید بودن
            selectedPage.style.opacity = '1'; // تنظیم شفافیت
            selectedPage.style.zIndex = '10'; // تنظیم لایه
            console.log("Page 11 is displayed.");
        } else {
            // نمایش سایر صفحات
            selectedPage.style.display = 'block';
            selectedPage.style.visibility = 'visible';
            selectedPage.style.opacity = '1';
            selectedPage.style.zIndex = '10';
            homeCloumn.style.display = "none";
        }
        // مخفی کردن صفحه اصلی (homeCloumn) در هر دو حالت
       
    } else {
        console.error("Page element not found");
    }
};

// افزودن رویداد کلیک به آیتم‌های منو
menuItems.forEach(item => {
    item.addEventListener('click', showPage1);
});


// dispalying notification items
const notifItems=document.querySelectorAll('.item-notif');
const tables = document.querySelectorAll('.last-part'); // صفحات

const showTables = (event) => {
    event.preventDefault();
    // مخفی کردن تمام صفحات
    tables.forEach(table => {
      table.style.display = 'none';
    });

    // برداشتن کلاس فعال از همه آیتم‌ها
    notifItems.forEach(itemNotif => {
        itemNotif.classList.remove('active'); // حذف کلاس 'active' از همه آیتم‌های منو
    });

    // نمایش صفحه‌ی مربوطه
    const itemTarget = event.currentTarget.getAttribute('data-target'); // گرفتن آیدی صفحه‌ی مرتبط از آیتم منو
    console.log("pageId", itemTarget)
    const selectedTable = document.getElementById(itemTarget); // انتخاب صفحه‌ی مرتبط
    console.log(selectedTable)
    if (selectedTable) {
        selectedTable .style.display = 'block'; // تنظیم به block برای نمایش
        selectedTable .style.visibility = 'visible'; // اطمینان از قابل دید بودن
        selectedTable .style.opacity = '1'; // تنظیم شفافیت
        selectedTable .style.zIndex = '10';

    } else {
        console.error("Page element not found");
    }

    // افزودن کلاس فعال به آیتم کلیک شده
    event.currentTarget.classList.add('active');
};


notifItems.forEach(itemNotif => {
    itemNotif.addEventListener('click', showTables);
});



// number animated**************************************
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter span");

    counters.forEach(counter => {
        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;

            // مقدار افزایشی برای ایجاد یک انیمیشن روان
            const increment = target / 100; // تنظیم عدد بزرگتر برای افزایش سریع‌تر

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 5); // هر 20 میلی‌ثانیه مقدار را به‌روزرسانی می‌کند
            } else {
                counter.innerText = target; // اطمینان از اینکه دقیقا به عدد نهایی برسد
            }
        };

        updateCounter();
    });
});



// profile-menu

const arrow = document.querySelector("#arrow-menu");
const profileMenu = document.querySelector(".profile-menu");

const showmenuProfile = (event) => {
    profileMenu.classList.toggle("show");
    if (profileMenu.style.display === "none" || profileMenu.style.display === "") {
        profileMenu.style.display = "block";
    } else {
        profileMenu.style.display = "none";
    }
};

arrow.addEventListener("click", (event) => {
    event.stopPropagation(); // جلوگیری از بسته شدن منو هنگام کلیک روی دکمه
    showmenuProfile();
});

document.addEventListener("click", (event) => {
    // بررسی می‌کنیم که کلیک خارج از منوی پروفایل و دکمه انجام شده باشد
    if (!profileMenu.contains(event.target) && !arrow.contains(event.target)) {
        profileMenu.style.display = "none";
    }
});




// display or hidden notification menu
const notifBell=document.querySelector(".bell-icon");
const notifMenu=document.querySelector(".notif-menu")
const shownotifMenu=(event)=>{
    notifMenu.classList.toggle("show");
    if (notifMenu.style.display === "none" || notifMenu.style.display === "") {
        notifMenu.style.display = "block";
    } else {
        notifMenu.style.display = "none";
    }
}

document.addEventListener("click", (event) => {
    // بررسی می‌کنیم که کلیک خارج از منوی پروفایل و دکمه انجام شده باشد
    if (!notifMenu.contains(event.target) && !notifBell.contains(event.target)) {
        notifMenu.style.display = "none";
    }
});


notifBell.addEventListener("click",shownotifMenu)

//log out from admin page
document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logout-btn');
    console.log(logoutBtn);

    logoutBtn.addEventListener('click', () => {
        // حذف اطلاعات ذخیره‌شده در Local Storage
        localStorage.removeItem('username');
        localStorage.removeItem('isLoggedIn'); // حذف وضعیت ورود

        // بازنشانی وضعیت صفحه اصلی
        resetIndexPage();

        // انتقال کاربر به صفحه ورود
        location.assign("index.html");
    });
});

// تابع برای بازنشانی وضعیت صفحه index
function resetIndexPage() {
    const signinIndex = document.querySelector(".sign-in-btn"); // دکمه Sign In
    const signupIndex = document.querySelector(".sign-out-btn"); // دکمه Sign Up
    const svgUser = document.querySelector(".svg-user"); // آیکن کاربر
    const userDisplay = document.querySelector(".login-user-display"); // بخش پیام کاربر
    const welcomeMessage = document.querySelector('.welcomeMessage a'); // پیام خوش‌آمدگویی

    // بازنشانی وضعیت
    if (signinIndex) signinIndex.style.display = "block"; // نمایش دکمه Sign In
    if (signupIndex) signupIndex.style.display = "block"; // نمایش دکمه Sign Up
    if (svgUser) svgUser.style.display = "none"; // پنهان کردن آیکن کاربر
    if (userDisplay) userDisplay.style.display = "none"; // پنهان کردن بخش پیام کاربر
    if (welcomeMessage) welcomeMessage.textContent = ""; // حذف متن خوش‌آمدگویی
}


// displaying hamburger menu

const hamburDashboard = document.querySelector(".hamburger-dashbaord")
const leftBox = document.querySelector(".left-part-box");
const closeItem2 = document.querySelector(".close-item");
const menuInLg = document.querySelector(".menu-in-lg-size");
const insideleftBox = document.querySelector(".left-part-insside");
console.log(insideleftBox)

console.log(menuInLg)

// مخفی کردن leftmenu

const hiddenMenu = (event) => {
    console.log("hello")
    leftBox.classList.remove("d-sm-flex"); // حذف کلاس نمایش منو
    leftBox.classList.remove("d-md-flex");
    leftBox.classList.add("d-sm-none");
    leftBox.classList.add("d-md-none");
    leftBox.classList.remove("d-lg-flex");
    leftBox.classList.add("d-lg-none");
    if (leftBox.className==="d-lg-none"){
        console.log("pak nashod")
    }
}



const hideMenuInLg = () => {
   
    console.log("پنهان کردن منوی menuInLg");
    // پنهان کردن منوی menuInLg
    menuInLg.classList.add("d-sm-none");
    menuInLg.classList.remove("d-lg-flex");
    menuInLg.classList.add("d-lg-none");
    menuInLg.style.animation="slideUp";
};

// تابع برای مدیریت کلیک خارج از منوها
const handleDocumentClick = (event) => {
    // اگر کلیک خارج از menuInLg و دکمه همبرگر بود، منوی menuInLg را مخفی کن
    if (!menuInLg.contains(event.target) && !hamburDashboard.contains(event.target)) {
        hideMenuInLg();
    }
};

// نمایش منوی همبرگری
const showMenu = (event) => {
    console.log("ok") 
    leftBox.classList.remove("d-sm-none"); // حذف کلاس پنهان کردن منو
    leftBox.classList.remove("d-md-none")
    leftBox.classList.add("d-sm-flex");
    leftBox.classList.add("position-sm-absolute");
    leftBox.classList.add("d-md-flex");
    menuInLg.classList.add("d-lg-flex"); 
    menuInLg.classList.add("d-xl-none");
}

hamburDashboard.addEventListener("click", showMenu);
closeItem2.addEventListener("click", hiddenMenu);
document.addEventListener("click", handleDocumentClick);


