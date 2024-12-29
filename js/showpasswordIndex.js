// نمایش یا مخفی کردن رمز عبور
const viewPasswordIcon2 = document.querySelector('.view-password');
const password = document.getElementById("login-password")

console.log(viewPasswordIcon2)
let isPasswordVisible2 = false;

viewPasswordIcon2.addEventListener('click', () => {
    if (isPasswordVisible2) {
        password.type = 'password'; // تغییر به حالت مخفی
        viewPasswordIcon2.innerHTML = `
            <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#797777">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7703 12C20.7703 11.6412 20.5762 11.4056 20.188 10.9343C18.768 9.21014 15.6357 6 12 6C8.36428 6 5.23207 9.21014 3.81198 10.9343C3.42382 11.4056 3.22974 11.6412 3.22974 12C3.22974 12.3588 3.42382 12.5944 3.81198 13.0657C5.23207 14.7899 8.36428 18 12 18C15.6357 18 18.768 14.7899 20.188 13.0657C20.5762 12.5944 20.7703 12.3588 20.7703 12ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3432 9 9.00002 10.3431 9.00002 12C9.00002 13.6569 10.3432 15 12 15Z" fill="#797777"></path>
            </svg>`;
        isPasswordVisible = false;
    } else {
        password.type = 'text'; // تغییر به حالت نمایش
        viewPasswordIcon2.innerHTML = `
        <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#747272"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2371 15.1157C19.0484 14.3833 19.7137 13.6416 20.188 13.0657C20.5762 12.5944 20.7703 12.3588 20.7703 12C20.7703 11.6412 20.5762 11.4056 20.188 10.9343C18.768 9.21014 15.6357 6 12 6C11.1605 6 10.3479 6.17115 9.57695 6.45563L12.1238 9.00251C13.6822 9.06577 14.9342 10.3178 14.9975 11.8762L18.2371 15.1157ZM9.39308 10.5144C9.14295 10.9524 9.00001 11.4595 9.00001 12C9.00001 13.6569 10.3432 15 12 15C12.5405 15 13.0476 14.8571 13.4856 14.6069L15.7872 16.9085C14.636 17.5555 13.3529 18 12 18C8.36428 18 5.23207 14.7899 3.81198 13.0657C3.42382 12.5944 3.22974 12.3588 3.22974 12C3.22974 11.6412 3.42382 11.4056 3.81198 10.9343C4.48541 10.1167 5.54385 8.96489 6.85842 7.97974L9.39308 10.5144Z" fill="#747272"></path> <path d="M5 2L21 18" stroke="#747272" stroke-width="2"></path> </g></svg>`;
        isPasswordVisible2 = true;
    }
});


const viewPasswordsignIn= document.getElementById('view-password-signin');
console.log(viewPasswordsignIn);


viewPasswordsignIn.addEventListener('click', () => {
    console.log(isPasswordVisible2)
    if (isPasswordVisible2) {
        password.type = 'password'; // تغییر به حالت مخفی
        viewPasswordsignIn.innerHTML = `
            <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#797777">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7703 12C20.7703 11.6412 20.5762 11.4056 20.188 10.9343C18.768 9.21014 15.6357 6 12 6C8.36428 6 5.23207 9.21014 3.81198 10.9343C3.42382 11.4056 3.22974 11.6412 3.22974 12C3.22974 12.3588 3.42382 12.5944 3.81198 13.0657C5.23207 14.7899 8.36428 18 12 18C15.6357 18 18.768 14.7899 20.188 13.0657C20.5762 12.5944 20.7703 12.3588 20.7703 12ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3432 9 9.00002 10.3431 9.00002 12C9.00002 13.6569 10.3432 15 12 15Z" fill="#797777"></path>
            </svg>`;
        isPasswordVisible2 = false;
    } else {
        password.type = 'text'; // تغییر به حالت نمایش
        viewPasswordsignIn.innerHTML = `
        <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#747272"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2371 15.1157C19.0484 14.3833 19.7137 13.6416 20.188 13.0657C20.5762 12.5944 20.7703 12.3588 20.7703 12C20.7703 11.6412 20.5762 11.4056 20.188 10.9343C18.768 9.21014 15.6357 6 12 6C11.1605 6 10.3479 6.17115 9.57695 6.45563L12.1238 9.00251C13.6822 9.06577 14.9342 10.3178 14.9975 11.8762L18.2371 15.1157ZM9.39308 10.5144C9.14295 10.9524 9.00001 11.4595 9.00001 12C9.00001 13.6569 10.3432 15 12 15C12.5405 15 13.0476 14.8571 13.4856 14.6069L15.7872 16.9085C14.636 17.5555 13.3529 18 12 18C8.36428 18 5.23207 14.7899 3.81198 13.0657C3.42382 12.5944 3.22974 12.3588 3.22974 12C3.22974 11.6412 3.42382 11.4056 3.81198 10.9343C4.48541 10.1167 5.54385 8.96489 6.85842 7.97974L9.39308 10.5144Z" fill="#747272"></path> <path d="M5 2L21 18" stroke="#747272" stroke-width="2"></path> </g></svg>`;
        isPasswordVisible2 = true;
    }
});
