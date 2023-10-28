let firstName = document.querySelector(`#firstName`);
let lastName = document.querySelector(`#lastName`);
let email = document.querySelector(`#email`);
let password = document.querySelector(`#password`);
let button = document.querySelector(`button`);
let lap = document.querySelectorAll(`label`)
let so = document.querySelector(`.so`)
button.onclick = () => {

    lap.forEach((e) => {
        if (e.firstElementChild.value == ``) {
            e.children[2].innerHTML = `${e.firstElementChild.placeholder} cannot be empty`
            e.children[2].style.display = `block`
            e.children[1].style.display = `block`
        } else if (e.firstElementChild.value.length < 6) {
            e.children[2].innerHTML = `its less than 6 char`
            e.children[2].style.display = `block`
            e.children[1].style.display = `block`
        } else {

            e.children[2].style.display = `none`
            e.children[1].style.display = `none`
        }
    })
    if (/\w+@\w+.\w+/ig.test(email.value)) {
        email.nextElementSibling.style.display = `none`
        email.nextElementSibling.nextElementSibling.style.display = `none`
    } else {
        email.nextElementSibling.style.display = `block`
        email.nextElementSibling.nextElementSibling.style.display = `block`
    }
    if (!Array.from(lap).some((e) => e.lastElementChild.style.display == `block`)) {
        so.style.cssText = `top: 20px;  opacity: 1;`
    } else {
        so.style.cssText = `top: -47px;  opacity: 0;`
    }
    setTimeout(() => {
        so.style.cssText = `top: -47px;  opacity: 0;`
    }, 2000);
    // so.style.cssText = `top: -47px;  opacity: 0;`
}
