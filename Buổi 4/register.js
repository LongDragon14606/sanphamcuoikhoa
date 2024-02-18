const registerForm = document.getElementById("register-form")

//bắt sự kiện submit
registerForm.addEventListener("submit",(event) => {
    // Ngăn sự kiện submit reload lại trang web
    event.preventDefault();

    const data = {
        firstName: registerForm.firstName.value.trim(),
        lastName:  registerForm.lastName.value.trim(),
        email:  registerForm.email.value.trim(),
        pasword: registerForm.pasword.value.trim(),
        confirmPassword: registerForm.confirmPassword.value.trim(),
    }

    console.log(data);
    //gửi dữ liệu data người dừng nhập tới controller để check lôi
    controller.register(data);
    
});