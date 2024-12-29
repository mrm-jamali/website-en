const hamburgerKey = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const signinBtn = document.querySelector(".sign-in-btn");
const modalBox = document.querySelector(".modal");
const closeItem = document.querySelector(".close-item");
const closeItemAdmin = document.querySelector(".close-item-admin");
const signoutBtn=document.querySelector(".sign-out-btn")
const adminLogin=document.querySelector(".admin-login");
const modalAdmin = document.querySelector(".modaladmin");
console.log(modalAdmin)





const signinBox=(event)=>{
    modalBox.style.display = "block";
}



// باز کردن یا بستن منو با کلیک
const openMenu = (event) => {
  hamburgerMenu.classList.toggle("open");
};

// افزودن رویداد کلیک به دکمه همبرگری
hamburgerKey.addEventListener("click", openMenu);

// بررسی اندازه صفحه و بستن منو هنگام تغییر اندازه
const checkWindowSize = () => {
  if (window.innerWidth > 800) {
    hamburgerMenu.classList.remove("open");
  }
};

// افزودن رویداد تغییر اندازه صفحه
window.addEventListener("resize", checkWindowSize);



signinBtn.addEventListener("click",signinBox)
signoutBtn.addEventListener("click",signinBox)
hamburgerKey.addEventListener("click", openMenu);


// swich in sign in-sing up--------------------------------------
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('box-outside');

signUpButton.addEventListener('click', () => {
  console.log("what happen")
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


closeItem.addEventListener("click",function(){
    modalBox.style.display = "none";
  
})
closeItemAdmin.addEventListener("click",function(){
    modalAdmin.style.display = "none";
    

})

const openAdmin= (event) => {
    modalAdmin.style.display = "block";  
}



adminLogin.addEventListener("click",openAdmin)


// likes

const heartIcons = document.querySelectorAll('.heart-icon img');

heartIcons.forEach(heartIcon => {
    heartIcon.addEventListener('click', function () {
        // نزدیک‌ترین شمارنده لایک در همان بخش (icon-boxes) را پیدا می‌کنیم
        const likeCountElement = this.closest('.icon-boxes').querySelector('#like-count');
        if (likeCountElement) {
            let currentCount = parseInt(likeCountElement.textContent); // مقدار فعلی را می‌خوانیم
            likeCountElement.textContent = currentCount + 1; // مقدار را افزایش می‌دهیم
        } else {
            console.error('عنصر شمارنده لایک پیدا نشد.');
        }
    });
});





// اطمینان از اجرای کد پس از بارگذاری کامل صفحه
document.addEventListener("DOMContentLoaded", () => {
    // انتخاب تمام عناصر ستاره
    const stars = document.querySelectorAll(".icon-star");
  
    // اضافه کردن رویداد کلیک به هر ستاره
    stars.forEach((star) => {
      star.addEventListener("click", () => {
        Swal.fire({
            position: "center", // تنظیم موقعیت به مرکز صفحه
            icon: "success",
            title: "This story saved in favorite",
            showConfirmButton: false,
            timer: 2000,
            customClass: {
              popup: "custom-popup",  // کلاس سفارشی برای کل کادر
              title: "custom-title",  // کلاس سفارشی برای عنوان
              content: "custom-content", // کلاس سفارشی برای محتوا
            }
          });
      });
    });
  });
  

  // گرفتن تمام دکمه‌های نمایش کامنت
  const showCommentsBtns = document.querySelectorAll('.show-comments-btn');
  const commentsModal = document.getElementById("comments-modal");
  const closeModal = document.getElementById("close-modal");
  
  // نمایش مدال کامنت‌ها هنگام کلیک روی هر دکمه
  showCommentsBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      commentsModal.style.display = "block";
    });
  });
  
  // بستن مدال
  closeModal.addEventListener("click", () => {
    commentsModal.style.display = "none";
  });
  
  // بستن مدال هنگام کلیک خارج از آن
  window.addEventListener("click", (event) => {
    if (event.target === commentsModal) {
      commentsModal.style.display = "none";
    }
  });
  
  // مدیریت لایک و ریپلای
  const likeButtons = document.querySelectorAll('.like-btn');
  const replyButtons = document.querySelectorAll('.reply-btn');
  const replySections = document.querySelectorAll('.reply-section');
  const heartIcons2 = document.querySelectorAll(".heart-icon");
  
  // افزودن رویداد کلیک به هر آیکن
  heartIcons2.forEach(heartIcon => {
    heartIcon.addEventListener("click", () => {
      // انتخاب متن تعداد لایک‌های مربوط به این آیکن
      const likeCount = heartIcon.querySelector("#like-count");
      // تبدیل متن به عدد و افزایش مقدار
      let currentLikes = parseInt(likeCount.textContent, 10);
      likeCount.textContent = currentLikes + 1;
    });
  });
  
  
  replyButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      // نمایش یا مخفی کردن بخش پاسخ
      replySections[index].style.display = replySections[index].style.display === "none" ? "block" : "none";
    });
  });


// scroll btn up

  const scrollTopButton = document.getElementById('scrollTop');

  // نمایش دکمه هنگام اسکرول
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollTopButton.classList.add('show');
    } else {
      scrollTopButton.classList.remove('show');
    }
  });

  // اسکرول به بالا هنگام کلیک
  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  


