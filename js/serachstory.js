document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".ui-input");
    const listItems = document.querySelectorAll(".list-item");
    const notFoundMessage = document.getElementById("not-found-message");

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase(); // متن ورودی
        let hasResult = false;

        if (query === "") {
            // اگر ورودی خالی باشد، تمام آیتم‌ها نمایش داده شوند
            listItems.forEach((item) => {
                item.style.display = "flex";
            });
            notFoundMessage.style.display = "none"; // پنهان کردن پیام "Not Found"
            return;
        }

        // بررسی مطابقت آیتم‌ها
        listItems.forEach((item) => {
            const title = item.querySelector(".inside-p h3").textContent.toLowerCase();
            if (title.startsWith(query)) {
                item.style.display = "flex"; // نمایش آیتم
                hasResult = true;
            } else {
                item.style.display = "none"; // پنهان کردن آیتم
            }
        });

        // مدیریت پیام "Not Found"
        if (hasResult) {
            notFoundMessage.style.display = "none"; // مخفی کردن پیام
        } else {
            notFoundMessage.style.display = "flex"; // نمایش پیام
        }
    });
});
















document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn-type-story");
    const listItems = document.querySelectorAll(".list-item");
    const noStoryMessage = document.querySelector('#noStoryMessage');

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const storyType = button.innerText.trim(); // نوع داستان از متن دکمه
            let foundStory = false;

            // اگر دکمه "All Story" باشد، همه داستان‌ها را نشان می‌دهد
            if (storyType === "All Story") {
                listItems.forEach(item => {
                    item.style.display = "flex"; // نمایش همه داستان‌ها
                });
                noStoryMessage.style.display = "none"; // مخفی کردن پیغام "هیچ داستانی یافت نشد"
            } else {
                listItems.forEach(item => {
                    const itemType = item.querySelector(".type-name").innerText.trim();
                    if (itemType === storyType) {
                        item.style.display = "flex"; // نمایش داستان‌های مطابق
                        foundStory = true; // پیدا شدن یک داستان مطابق
                    } else {
                        item.style.display = "none"; // مخفی کردن داستان‌های دیگر
                    }
                });
                // نمایش یا مخفی کردن پیغام
                if (foundStory) {
                    noStoryMessage.style.display = "none";
                } else {
                    noStoryMessage.style.display = "flex";
                }
            }
        });
    });
});







