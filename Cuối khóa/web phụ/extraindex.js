const signUp = () => {
    let acc = document.querySelector('.acc').value;
    let pass = document.querySelector('.pass').value;
    let email = document.querySelector('.email').value;
    if (acc == '' || pass == '' || email == '') {
        alert('vui lòng nhập đầy đủ thông tin')
    } else {
        window.location.href = `index.html`
    }
}