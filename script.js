let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.nav-links');

const dropdownMenu = document.getElementById('dropdownMenu');
const footerContent = document.querySelector('footer').innerHTML;

//for showing same content as footer in menubtn dropdown 
dropdownMenu.innerHTML = footerContent;

dropdownMenu.querySelector('.extra-links').remove();
dropdownMenu.querySelector('.copyright').remove();

menu.onclick = () => {
    menu.classList.toggle('ri-menu-line');
    menu.classList.toggle('ri-close-line');
    dropdownMenu.classList.toggle('hidden');

    //signIn btn in dropdown only for mobile view
    let signInBtnMobile = dropdownMenu.querySelector('.signinbtn-mobile');
    signInBtnMobile.classList.toggle('active');
};

