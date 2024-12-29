const btnAdmin =document.querySelector('.admin-lock');
console.log(btnAdmin);
const checkLogin = (event) => {

    event.preventDefault(); // جلوگیری از ارسال فرم پیش‌فرض

    const username = document.getElementById('user-admin').value;
    const password = document.getElementById('password-admin').value;
    // اطلاعات ورود معتبر
    const validUsername = "m2";
    const validPassword = "123";

    if (username === validUsername && password === validPassword) {
        // نمایش صفحه ادمین
        document.querySelector('.modaladmin').style.display = 'none';
        location.assign("dashboard.html");
    } else {
        alert("نام کاربری یا رمز عبور اشتباه است!");
    }
}

btnAdmin.addEventListener("click", checkLogin);







// log out btn
// const logoutBtn = document.getElementById("log-out");

// const logoutFunc = () => {
//     document.cookie = "name=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
//     document.cookie = "email=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
//     document.cookie = "password=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

//     // پیام خروج موفقیت‌آمیز
//     alert("You have successfully logged out!");

//     // هدایت کاربر به صفحه اصلی یا فرم ورود
//     window.location.href = "index.html"
// }