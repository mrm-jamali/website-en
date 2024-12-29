const logoutBtn = document.getElementById("log-out");

const logoutFunc = () => {
    document.cookie = "name=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "email=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "password=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    // پیام خروج موفقیت‌آمیز
    alert("You have successfully logged out!");

    // هدایت کاربر به صفحه اصلی یا فرم ورود
    window.location.href = "index.html"
}

logoutBtn.addEventListener("click", logoutFunc);
export {
    logoutFunc
}