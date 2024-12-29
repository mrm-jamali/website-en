const usernameInput = document.getElementById('user-admin');
const passwordInput = document.getElementById('password-admin');
console.log(passwordInput);
window.addEventListener('DOMContentLoaded', () => {
    const adminLogin = document.querySelector('.admin-login');
    const dashboardBtnPart = document.getElementById('dashbord-btn-part');

    // بررسی اطلاعات ذخیره‌شده در Local Storage
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    if (username === "admin" && password === "123") {
        // اگر کاربر لاگین کرده بود
        adminLogin.style.display = 'none'; // مخفی کردن دکمه admin-login
        dashboardBtnPart.style.display = 'block'; // نمایش دکمه dashbord-btn-part
    } else {
        // اگر کاربر لاگین نکرده بود
        adminLogin.style.display = 'block'; // نمایش دکمه admin-login
        dashboardBtnPart.style.display = 'none'; // مخفی کردن دکمه dashbord-btn-part
    }
});


const validUsername = "admin";
const validPassword = "123";

// انتخاب پیام‌های خطا از HTML
const usernameError = document.querySelector('.error-username');
const passwordError = document.querySelector('.error-password');

// افزودن رویداد `input` به ورودی نام کاربری
usernameInput.addEventListener('input', () => {
    const usernameValue = usernameInput.value.trim();
    if (usernameValue === "") {
        usernameError.classList.remove('active'); // حذف پیام خطا در صورت خالی بودن ورودی
    } else if (usernameValue !== validUsername) {
        usernameError.classList.add('active'); // نمایش پیام خطا برای نام کاربری اشتباه
    } else {
        usernameError.classList.remove('active'); // حذف پیام خطا در صورت درست بودن
    }
});

// افزودن رویداد `input` به ورودی رمز عبور
passwordInput.addEventListener('input', () => {
    const passwordValue = passwordInput.value.trim();
    if (passwordValue === "") {
        passwordError.classList.remove('active'); // حذف پیام خطا در صورت خالی بودن ورودی
    } else if (passwordValue !== validPassword) {
        passwordError.classList.add('active'); // نمایش پیام خطا برای رمز عبور اشتباه
    } else {
        passwordError.classList.remove('active'); // حذف پیام خطا در صورت درست بودن
    }
});

// افزودن رویداد کلیک به دکمه برای انتقال به داشبورد
const btnAdmin = document.querySelector('.admin-lock');
btnAdmin.addEventListener('click', (event) => {
    event.preventDefault(); // جلوگیری از ارسال فرم پیش‌فرض

    // بررسی نهایی اعتبار
    const usernameValue = usernameInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (usernameValue === validUsername && passwordValue === validPassword) {
        // ذخیره اطلاعات در Local Storage
        try {
            localStorage.setItem('username', usernameValue);
            localStorage.setItem('password', passwordValue); // ⚠️ ذخیره رمز عبور توصیه نمی‌شود
            console.log("Username and password saved in Local Storage.");
        } catch (error) {
            console.error("Error saving to Local Storage:", error);
        }

        // انتقال به داشبورد
        document.querySelector('.modaladmin').style.display = 'none';
        location.assign("dashboard.html");
    } else {
        console.log("Invalid credentials. Not saved to Local Storage.");
    }
});

// نمایش یا مخفی کردن رمز عبور
const viewPasswordIcon = document.getElementById('view-password');
let isPasswordVisible = false;

viewPasswordIcon.addEventListener('click', () => {
    if (isPasswordVisible) {
        passwordInput.type = 'password'; // تغییر به حالت مخفی
        viewPasswordIcon.innerHTML = `
            <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#797777">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7703 12C20.7703 11.6412 20.5762 11.4056 20.188 10.9343C18.768 9.21014 15.6357 6 12 6C8.36428 6 5.23207 9.21014 3.81198 10.9343C3.42382 11.4056 3.22974 11.6412 3.22974 12C3.22974 12.3588 3.42382 12.5944 3.81198 13.0657C5.23207 14.7899 8.36428 18 12 18C15.6357 18 18.768 14.7899 20.188 13.0657C20.5762 12.5944 20.7703 12.3588 20.7703 12ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3432 9 9.00002 10.3431 9.00002 12C9.00002 13.6569 10.3432 15 12 15Z" fill="#797777"></path>
            </svg>`;
        isPasswordVisible = false;
    } else {
        passwordInput.type = 'text'; // تغییر به حالت نمایش
        viewPasswordIcon.innerHTML = `
            <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#797777">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C15.6357 6 18.768 9.21014 20.188 10.9343C20.5762 11.4056 20.7703 11.6412 20.7703 12C20.7703 12.3588 20.5762 12.5944 20.188 13.0657C18.768 14.7899 15.6357 18 12 18C8.36428 18 5.23207 14.7899 3.81198 13.0657C3.42382 12.5944 3.22974 12.3588 3.22974 12C3.22974 11.6412 3.42382 11.4056 3.81198 10.9343C5.23207 9.21014 8.36428 6 12 6ZM9.8787 9.87868L14.1213 14.1213C13.5786 14.4776 12.8152 15 12 15C10.3432 15 9.00002 13.6569 9.00002 12C9.00002 11.1848 9.52239 10.4214 9.8787 9.87868ZM12 9C12.8152 9 13.5786 9.52239 14.1213 10.1213L9.8787 14.1213C9.52239 13.5786 9.00002 12.8152 9.00002 12C9.00002 10.3431 10.3432 9 12 9Z" fill="#797777"></path>
            </svg>`;
        isPasswordVisible = true;
    }
});


const dashboardBtnPart = document.getElementById('dashbord-btn-part');
if (dashboardBtnPart) {
   
    dashboardBtnPart.addEventListener("click", function () {
        console.log("dashboard");
        location.assign("dashboard.html");
    });
} else {
    console.error("Element with ID 'dashboardBtnPart' not found.");
}