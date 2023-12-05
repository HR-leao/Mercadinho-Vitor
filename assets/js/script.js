


$(document).ready(function () {
    $('.slides').slick({

        vertical: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 2000,
        fade: false,
        cssEase: 'ease-out'
    });

});



let mnSanduIch = document.querySelector('.div--menu')
let bLateral = document.querySelector('.nav-sidebar-left')

mnSanduIch.addEventListener('click', () => {
    if (bLateral.classList.contains('open')) {
        bLateral.classList.remove('open')
        console.log('CONTEM')
    } else {
        bLateral.classList.add('open')
    }
})




const c = (el) => document.querySelector(el);

const all = (el) => document.querySelectorAll(el)




// CONTINUEMMOS





//CONFIGURALÇÃO DO MENU
