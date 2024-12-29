var modalSign = document.querySelector(".modal");
// دکمه های باکس ورود و ثبت نام
const btnSignUp = document.getElementById("signup");
const btnSignIn = document.getElementById("signin");

// دکمه های navbar
const signinIndex = document.querySelector(".sign-in-btn");
const signoutIndex = document.querySelector(".sign-out-btn");
const successCard = document.getElementById("successCard");
const btnSuccses = document.querySelector(".btn-succses-signup");

// تعریف متغیرهای مورد نیاز
const passwordInputpass1 = document.getElementById("password");
const viewPasswordIconSignup = document.getElementById("view-password-signup");
const notViewPasswordIconSignup = document.getElementById("not-view-password-signup");

// توابع برای نمایش و مخفی کردن رمز عبور
const togglePasswordVisibility2 = () => {
    if (passwordInputpass1.type === "password") {
        passwordInputpass1.type = "text";
        viewPasswordIconSignup.style.display = "none";
        notViewPasswordIconSignup.style.display = "inline-block";
    } else {
        passwordInputpass1.type = "password";
        viewPasswordIconSignup.style.display = "inline-block";
        notViewPasswordIconSignup.style.display = "none";
    }
};

// افزودن رویداد کلیک به آیکون‌های چشم
viewPasswordIconSignup.addEventListener("click", togglePasswordVisibility2);
notViewPasswordIconSignup.addEventListener("click", togglePasswordVisibility2);




// sign up function
const signupFunc = (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    let passwordValue = document.getElementById("password").value;
    const usernameMessage = document.getElementById("username-message");
    const passwordMessage = document.getElementById("password-message");
    const emailMessage = document.getElementById("email-message");
    // const successMessage = document.getElementById("success-message");

    // پاک کردن پیام‌های خطا
    usernameMessage.innerText = "";
    passwordMessage.innerText = "";
    emailMessage.innerText = "";
    // successMessage.innerText = "";

    // بررسی ورودی‌ها
    if (name === "") {
        usernameMessage.innerText = "Username field is empty.";
        return;
    }
    if (email === "") {
        emailMessage.innerText = "Email field is empty.";
        return;
    }
    if (passwordValue === "") {
        passwordMessage.innerText = "Password field is empty.";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailMessage.style.color = "red";
        emailMessage.innerText = "Please enter a valid email address.";
        return;
    }
    if (passwordValue.length < 6) {
        passwordMessage.style.color = "red";
        passwordMessage.innerText = "Password must be at least 6 characters.";
        return;
    } else {
        modalSign.style.display = "none";
        successCard.style.display = "flex";
    }

    // ثبت کوکی‌ها
    document.cookie = `name=${name}; path=/; max-age=86400`;
    document.cookie = `email=${email}; path=/; max-age=86400`;
    document.cookie = `password=${passwordValue}; path=/; max-age=86400`;
};









// تابع برای دریافت مقادیر کوکی‌ها
function getCookieValue(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}




const loginFunc = (event) => {
    event.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const loginMessage = document.getElementById("login-message");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    emailError.innerText = "";
    passwordError.innerText = "";
    loginMessage.innerText = "";

    // دریافت مقادیر کوکی‌های ذخیره‌شده
    const savedEmail = getCookieValue("email");
    const savedPassword = getCookieValue("password");

    let hasError = false;

    // بررسی ایمیل
    if (!email) {
        emailError.style.color = "red";
        emailError.innerText = "Email is empty";
        hasError = true;
    } else if (email !== savedEmail) {
        emailError.style.color = "red";
        emailError.innerText = "Email is incorrect.";
        hasError = true;
    }

    // بررسی رمز عبور
    if (!password) {
        passwordError.style.color = "red";
        passwordError.innerText = "Password is empty";
        hasError = true;
    } else if (password !== savedPassword) {
        passwordError.style.color = "red";
        passwordError.innerText = "Password is incorrect";
        hasError = true;
    }

    if (hasError) return;

    console.log("ورود موفق");

    // مخفی کردن پنجره ورود
    modalSign.style.display = "none";

    // ذخیره وضعیت کاربر در localStorage
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", getCookieValue("name")); // ذخیره نام کاربر

    wellcomUser();
};

btnSignIn.addEventListener("click", loginFunc);


// تغییر حالت نمایش رمز عبور
const togglePasswordVisibility1 = () => {
    const passwordInputPass = document.getElementById("login-password");
    const viewPasswordIcon = document.getElementById("view-password-signin");
    const notViewPasswordIcon = document.getElementById("not-view-password-signin");

    if (passwordInputPass.type === "password") {
        passwordInputPass.type = "text";
        viewPasswordIcon.style.display = "none";
        notViewPasswordIcon.style.display = "inline";
    } else {
        passwordInputPass.type = "password";
        viewPasswordIcon.style.display = "inline";
        notViewPasswordIcon.style.display = "none";
    }
};

// اضافه کردن رویداد برای نمایش/مخفی کردن رمز عبور
document.getElementById("view-password-signin").addEventListener("click", togglePasswordVisibility1);
document.getElementById("not-view-password-signin").addEventListener("click", togglePasswordVisibility1);


const wellcomUser = () => {
    const btnPart = document.querySelector(".btn-part");
    const svgUser = document.querySelector(".svg-user");
    const signinIndex = document.querySelector(".sign-in-btn");
    const signupIndex = document.querySelector(".sign-out-btn");
    const userDisplay = document.querySelector(".login-user-display");
    const welcomeMessage = document.querySelector('.welcomeMessage a');
    const languagePart = document.querySelector(".language");
    const adminLogin = document.querySelector(".admin-login");


    const userName = localStorage.getItem("userName"); // دریافت نام کاربر از localStorage

    if (userName) {
        // مخفی کردن دکمه‌های ورود و ثبت‌نام
        signinIndex.style.display = "none";
        signupIndex.style.display = "none";
        languagePart.style.display = "none";
        adminLogin.style.display = "none";

        // نمایش پیام خوش‌آمدگویی
        if (userDisplay && welcomeMessage) {
            userDisplay.style.display = "flex";
            welcomeMessage.textContent = `Welcome, ${userName}`;
            if (btnPart) {
                btnPart.style.width = "29%";
            }
        }
    } else {
        // نمایش دکمه‌های ورود و ثبت‌نام
        signinIndex.style.display = "block";
        signupIndex.style.display = "block";
        svgUser.style.display = "none";
    }
};

// بررسی وضعیت کاربر هنگام بارگذاری صفحه
window.addEventListener("load", () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
        wellcomUser(); // بازنشانی وضعیت کاربر
    }
});






// افزودن رویدادها به دکمه‌های ثبت‌نام و ورود
btnSignUp.addEventListener("click", signupFunc);

window.addEventListener("load", () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
        wellcomUser(); // بازنشانی وضعیت کاربر
    }
});





// دکمه Sign In
btnSuccses.addEventListener("click", () => {
    // پنهان کردن پیام موفقیت
    const successCard = document.getElementById("successCard");
    successCard.style.display = "none";

    // شبیه‌سازی فرآیند ورود
    const savedEmail = getCookieValue("email");
    const savedPassword = getCookieValue("password");

    // شبیه‌سازی فیلدهای ورود با مقادیر ثبت‌نام شده
    document.getElementById("login-email").value = savedEmail;
    document.getElementById("login-password").value = savedPassword;

    // فراخوانی تابع ورود
    loginFunc(new Event("click"));
    console.log(ok);
});




// دکمه بستن (close) - فقط کادر را می‌بندد
const closeBtnSuccses = document.querySelector(".close-sucess-box");
console.log(closeBtnSuccses);
closeBtnSuccses.addEventListener("click", () => {
    const successCard = document.getElementById("successCard");
    successCard.style.display = "none";
});