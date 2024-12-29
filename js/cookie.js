
const signupFunc = (event) => {
    event.preventDefault();
    
    // دریافت مقادیر ورودی
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // اعتبارسنجی‌های لازم را اینجا اضافه کنید...

    // ذخیره اطلاعات در کوکی
    document.cookie = `name=${name}; path=/; max-age=86400`; // مدت زمان 1 روزه
    document.cookie = `email=${email}; path=/; max-age=86400`;
    document.cookie = `password=${password}; path=/; max-age=86400`;

    // پیام موفقیت
    alert("Registration successful! Your data is saved.");
    
};


// تابعی برای دریافت مقادیر کوکی
function getCookieValue(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}




// رویداد ورود به حساب
const loginFunc = (event) => {
    event.preventDefault();

    // دریافت مقادیر ورودی
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // دریافت اطلاعات از کوکی‌ها
    const savedEmail = getCookieValue("email");
    const savedPassword = getCookieValue("password");

    // بررسی اطلاعات ورودی با مقادیر کوکی
    if (email === savedEmail && password === savedPassword) {
        alert("Login successful!");
    } else {
        alert("Incorrect email or password.");
    }
};

const signInButton = document.getElementById("signInButton");
signInButton.addEventListener("click", loginFunc);